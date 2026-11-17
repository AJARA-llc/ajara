#!/usr/bin/env python3
"""Generate AJARA Studio (/studio) illustration masters locally via ComfyUI + Z-Image-Turbo.

Start ComfyUI first:  cd ~/Workspace/ComfyUI && .venv/bin/python main.py --listen 127.0.0.1 --port 8188
Usage: gen_studio_images.py [id ...] [--seed N] [--force]   (no ids = all)
Masters land in ~/Workspace/AJARA/ajara-studio-masters/<id>.png; build_studio_images.py makes the web copies.
"""
import json, sys, time, urllib.parse, urllib.request
from pathlib import Path

HOST = "http://127.0.0.1:8188"
OUT = Path.home() / "Workspace/AJARA/ajara-studio-masters"
NEG = " No text, no letters, no numbers, no logo, no watermark, no signature."

CHAR = (
    "Soft 3D-styled anime illustration, warm and friendly, cel shading with gentle gradients, clean outlines, "
    "pastel lavender and peach palette, isolated on a plain pure white background, full upper body visible, no frame. "
)
ICON = (
    "Cute glossy 3D clay icon, soft rounded shapes, pastel colours, soft studio lighting, subtle soft shadow under the object, "
    "single object centred and filling about seventy percent of the frame, isolated on a plain pure white background, "
    "minimal and clean, app icon style. Object: "
)

ITEMS = {
    "hero-girl": (CHAR + "A cheerful young Japanese woman in her early twenties with dark brown hair in a messy high ponytail, "
                  "big bright eyes, rosy cheeks, wearing a loose lavender hoodie with white headphones around her neck, "
                  "sitting at a desk typing on an open silver laptop, looking up and to the right with an excited open smile, "
                  "seen from a three-quarter front angle, hands on the keyboard.", 1024, 1024),
    "cta-boy": (CHAR + "Rendered in the same glossy 3D animated-film style with soft volumetric shading and smooth skin. "
                "A friendly young Japanese man around twenty with fluffy wavy dark brown hair, wearing a lavender hoodie, "
                "resting his chin on one hand, his head tilted back and his eyes clearly looking upward toward the upper right corner "
                "with a dreamy hopeful smile, as if imagining an idea floating above him, seen from a three-quarter side angle.", 1024, 1024),
    "icon-laptop": (ICON + "an open purple laptop whose screen glows violet with simple rounded code blocks, slightly angled.", 768, 768),
    "icon-rocket": (ICON + "a white and orange rocket with a round purple window, flying diagonally upward to the right with a small fluffy cloud puff at its tail.", 768, 768),
    "icon-bulb": (ICON + "a glowing yellow light bulb with a warm golden glow.", 768, 768),
    "icon-phone": (ICON + "a smartphone with a purple frame, its screen showing a simple pastel picture of mountains and a sun as an app preview.", 768, 768),
    "icon-coffee": (ICON + "an orange coffee cup on a small saucer with a little puff of steam.", 768, 768),
    "icon-heart": (ICON + "a plump glossy pink heart.", 768, 768),
    "icon-check": (ICON + "a rounded green square badge with a thick white check mark.", 768, 768),
    "icon-calendar": (ICON + "a lavender desk calendar with purple rings at the top and a grid of small rounded squares.", 768, 768),
    "icon-robot": (ICON + "a friendly round light blue robot head with big oval eyes, a small antenna and a happy expression.", 768, 768),
    "icon-bolt": (ICON + "a bright yellow lightning bolt.", 768, 768),
    "icon-team": (ICON + "three friendly purple person figures standing together side by side, simple rounded heads and bodies, no faces.", 768, 768),
}


def workflow(prompt: str, seed: int, prefix: str, width: int, height: int) -> dict:
    return {
        "1": {"class_type": "UNETLoader", "inputs": {"unet_name": "z_image_turbo_bf16.safetensors", "weight_dtype": "default"}},
        "2": {"class_type": "CLIPLoader", "inputs": {"clip_name": "qwen_3_4b.safetensors", "type": "lumina2"}},
        "3": {"class_type": "VAELoader", "inputs": {"vae_name": "ae.safetensors"}},
        "4": {"class_type": "ModelSamplingAuraFlow", "inputs": {"model": ["1", 0], "shift": 3}},
        "5": {"class_type": "CLIPTextEncode", "inputs": {"clip": ["2", 0], "text": prompt}},
        "6": {"class_type": "ConditioningZeroOut", "inputs": {"conditioning": ["5", 0]}},
        "7": {"class_type": "EmptySD3LatentImage", "inputs": {"width": width, "height": height, "batch_size": 1}},
        "8": {"class_type": "KSampler", "inputs": {"model": ["4", 0], "positive": ["5", 0], "negative": ["6", 0], "latent_image": ["7", 0],
              "seed": seed, "steps": 9, "cfg": 1.0, "sampler_name": "res_multistep", "scheduler": "simple", "denoise": 1.0}},
        "9": {"class_type": "VAEDecode", "inputs": {"samples": ["8", 0], "vae": ["3", 0]}},
        "10": {"class_type": "SaveImage", "inputs": {"images": ["9", 0], "filename_prefix": prefix}},
    }


def call(path: str, body: dict | None = None) -> dict:
    req = urllib.request.Request(HOST + path, data=json.dumps(body).encode() if body else None, headers={"content-type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())


def generate(name: str, prompt: str, seed: int, width: int, height: int, dest: Path) -> None:
    pid = call("/prompt", {"prompt": workflow(prompt, seed, "ajara_studio_" + name, width, height)})["prompt_id"]
    t0 = time.time()
    while True:
        hist = call("/history/" + pid).get(pid)
        if hist and hist.get("status", {}).get("completed"):
            break
        if hist and hist.get("status", {}).get("status_str") == "error":
            raise RuntimeError(name + ": ComfyUI error " + str(hist["status"]))
        if time.time() - t0 > 3600:
            raise TimeoutError(name)
        time.sleep(3)
    img = hist["outputs"]["10"]["images"][0]
    q = urllib.parse.urlencode({"filename": img["filename"], "subfolder": img["subfolder"], "type": img["type"]})
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(urllib.request.urlopen(HOST + "/view?" + q, timeout=60).read())
    print(name, round(time.time() - t0), "s ->", dest, flush=True)


if __name__ == "__main__":
    args = sys.argv[1:]
    seed = 369
    if "--seed" in args:
        i = args.index("--seed"); seed = int(args[i + 1]); del args[i:i + 2]
    force = "--force" in args
    ids = [a for a in args if a != "--force"] or list(ITEMS)
    for item_id in ids:
        prompt, w, h = ITEMS[item_id]
        dest = OUT / f"{item_id}.png"
        if dest.exists() and not force:
            continue
        generate(item_id, prompt + NEG + f" Output size: {w}x{h} pixels.", seed, w, h, dest)
