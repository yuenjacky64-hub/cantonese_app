from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:4173/#/home")
    page.wait_for_timeout(1000)

    # Scroll down slightly to see the news items specifically
    page.evaluate("document.querySelector('.home-container').scrollToPoint(0, 1000)")
    page.wait_for_timeout(1000)
    page.evaluate("document.querySelector('.home-container').scrollToPoint(0, 2000)")
    page.wait_for_timeout(1000)

    # Take screenshot at the key moment
    page.screenshot(path="/home/jules/verification/screenshots/verification2.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1280, 'height': 800}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
