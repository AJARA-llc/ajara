#!/usr/bin/env python3
"""Render AJARA Studio share-card images (1200x630) from scripts/studio-ogp.html.

Run after build_studio_images.py. Writes public/images/studio/ogp-{top,school,coaching}.jpg.
"""
import io
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = (ROOT / "scripts/studio-ogp.html").as_uri()
DEST = ROOT / "public/images/studio"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 630})
    for variant in ("top", "school", "coaching"):
        page.goto(f"{TEMPLATE}?v={variant}", wait_until="networkidle")
        page.evaluate("document.fonts.ready")
        png = page.screenshot(type="png")
        out = DEST / f"ogp-{variant}.jpg"
        Image.open(io.BytesIO(png)).convert("RGB").save(out, "JPEG", quality=88, optimize=True, progressive=True)
        print(out.name, out.stat().st_size // 1024, "KB")
    browser.close()
