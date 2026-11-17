#!/usr/bin/env python3
"""Cut out AJARA Studio masters (rembg) and write web copies to public/images/studio/*.webp.

Usage: build_studio_images.py [id ...]   (no ids = every master in ~/Workspace/AJARA/ajara-studio-masters)
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter
from rembg import new_session, remove
from scipy import ndimage

ROOT = Path(__file__).resolve().parent.parent
SRC = Path.home() / "Workspace/AJARA/ajara-studio-masters"
DEST = ROOT / "public/images/studio"
SIZES = {"hero-girl": 900, "cta-boy": 720}
ICON_SIZE = 256
# (threshold, max chroma) for the border flood. The rocket's white body touches the ground, so it
# needs a tight threshold; the rest drop their pale contact shadow with a looser one.
FLOOD = {"icon-rocket": (249, 255), "icon-bulb": (222, 14)}
FLOOD_DEFAULT = (185, 26)


def flood_cutout(img: Image.Image, threshold: int, max_chroma: int) -> Image.Image:
    # rembg drops white objects on a white ground (the rocket body); for icons treat only the
    # near-white region connected to the image border as background.
    a = np.asarray(img)
    light = (a.min(axis=2) >= threshold) & (a.max(axis=2).astype(int) - a.min(axis=2) <= max_chroma)
    lab, _ = ndimage.label(light)
    border = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    fg = ~np.isin(lab, list(border))
    fg = ndimage.binary_opening(fg, iterations=2)
    alpha = Image.fromarray(fg.astype(np.uint8) * 255).filter(ImageFilter.GaussianBlur(1.2))
    out = img.convert("RGBA")
    out.putalpha(alpha)
    return out


def build(item_id: str, session) -> None:
    img = Image.open(SRC / f"{item_id}.png").convert("RGB")
    cut = remove(img, session=session) if item_id in SIZES else flood_cutout(img, *FLOOD.get(item_id, FLOOD_DEFAULT))
    bbox = cut.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
    cut = cut.crop(bbox)
    side = SIZES.get(item_id, ICON_SIZE)
    if item_id in SIZES:
        cut.thumbnail((side, side), Image.LANCZOS)
        out = cut
    else:
        pad = max(cut.size) // 12
        square = max(cut.size) + pad * 2
        out = Image.new("RGBA", (square, square), (0, 0, 0, 0))
        out.paste(cut, ((square - cut.width) // 2, (square - cut.height) // 2), cut)
        out = out.resize((side, side), Image.LANCZOS)
    DEST.mkdir(parents=True, exist_ok=True)
    out.save(DEST / f"{item_id}.webp", "WEBP", quality=88, method=6)
    print(item_id, out.size, (DEST / f"{item_id}.webp").stat().st_size // 1024, "KB")


if __name__ == "__main__":
    ids = sys.argv[1:] or sorted(p.stem for p in SRC.glob("*.png") if p.stem not in ("logo-source", "design-mock"))
    session = new_session("isnet-general-use")
    for item_id in ids:
        build(item_id, session)
