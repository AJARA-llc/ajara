#!/usr/bin/env python3
"""Render ajara.co.jp share-card images (1200x630) and favicons.

Share cards: scripts/corporate-ogp.html -> public/images/ogp.png (site default) and
public/images/ogp-{aioru,hintl,reskilling,creative}.jpg.
Favicons: the ensō mark cropped from public/images/logo-full.png -> public/images/favicon-*.png.
"""
import io
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = (ROOT / "scripts/corporate-ogp.html").as_uri()
IMAGES = ROOT / "public/images"
# square region of logo-full.png (2048px) that holds the ensō circle without the wordmark
ENSO_BOX = (380, 190, 1620, 1430)


def render_cards() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1200, "height": 630})
        for variant in ("home", "aioru", "hintl", "reskilling", "creative"):
            page.goto(f"{TEMPLATE}?v={variant}", wait_until="networkidle")
            page.evaluate("document.fonts.ready")
            img = Image.open(io.BytesIO(page.screenshot(type="png"))).convert("RGB")
            if variant == "home":
                out = IMAGES / "ogp.png"
                img.save(out, "PNG", optimize=True)
            else:
                out = IMAGES / f"ogp-{variant}.jpg"
                img.save(out, "JPEG", quality=88, optimize=True, progressive=True)
            print(out.name, out.stat().st_size // 1024, "KB")
        browser.close()


def render_favicons() -> None:
    enso = Image.open(IMAGES / "logo-full.png").convert("RGB").crop(ENSO_BOX)
    for size in (32, 192, 512):
        enso.resize((size, size), Image.LANCZOS).save(IMAGES / f"favicon-{size}.png", optimize=True)
    enso.resize((180, 180), Image.LANCZOS).save(IMAGES / "apple-touch-icon.png", optimize=True)
    print("favicons ok")


if __name__ == "__main__":
    render_favicons()
    render_cards()
