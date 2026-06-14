from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1280, 'height': 800},
            record_video_dir='videos4/'
        )
        page = context.new_page()

        print("Navigating to Home...")
        page.goto('http://localhost:4173/#/home')
        page.wait_for_selector('.pod-dashboard')

        print("Scrolling to news section...")
        # Since we are using Ionic, we should scroll the ion-content
        page.evaluate("""
            const newsGrid = document.querySelector('.news-grid');
            if (newsGrid) {
                newsGrid.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        """)
        page.wait_for_timeout(2000)

        print("Capturing screenshot...")
        page.screenshot(path='verification4.png', full_page=False)

        context.close()
        browser.close()
        print("Done.")

if __name__ == '__main__':
    main()
