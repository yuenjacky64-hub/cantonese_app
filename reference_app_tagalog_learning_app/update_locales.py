import json
import os

locales_dir = 'src/i18n/locales'
files = ['en.json', 'zh-TW.json', 'zh-CN.json']

news_data = {
    'en': {
        "title": "News",
        "philippinesNews": "Philippines News",
        "loading": "Loading...",
        "error": "Failed to load news",
        "readMore": "Read more"
    },
    'zh-TW': {
        "title": "新聞",
        "philippinesNews": "菲律賓新聞",
        "loading": "載入中...",
        "error": "無法載入新聞",
        "readMore": "閱讀更多"
    },
    'zh-CN': {
        "title": "新闻",
        "philippinesNews": "菲律宾新闻",
        "loading": "加载中...",
        "error": "无法加载新闻",
        "readMore": "阅读更多"
    }
}

for file in files:
    filepath = os.path.join(locales_dir, file)
    lang = file.split('.')[0]

    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    data['news'] = news_data[lang]

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

print("Updated locale files")
