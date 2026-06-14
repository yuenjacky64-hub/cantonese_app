from playwright.sync_api import sync_playwright

def verify(page):
    page.goto('http://localhost:5173')
    page.wait_for_timeout(3000)
    page.screenshot(path='/home/jules/verification/home_screen.png')
    print("Screenshot saved to /home/jules/verification/home_screen.png")

if __name__ == "__main__":
    import os
    os.makedirs('/home/jules/verification', exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify(page)
        finally:
            browser.close()
