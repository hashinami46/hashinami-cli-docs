---
id: app-blog-download
title: App Blog Download
hide_title: false
hide_table_of_contents: false
sidebar_label: App Blog Download
sidebar_position: 2
pagination_label: App Blog Download
description: How to download this blog from this app?
keywords:
  - blog
  - nogizaka46
  - sakurazaka46
  - hinatazaka46
tags: [blog, nogizaka46, sakurazaka46, hinatazaka46]
slug: /cli/app-blog-download
---

# Blog Download
There's no specific requirements to download blogs asset.
## ⚙️ Options
Some options and it's arguments type.
```
-A, --app > (string). App name.
-T, --type > (string). Asset type.
-M, --member > (array of string or number).Member name in kanji or id. 
-fd, --fromdate > (string). Date start. yyyy-mm-dd.
-td, --todate > (string). Date end. yyyy-mm-dd.
--parallel > (boolean). Activate some asynchronous function.
```
---
## 🪻 Nogizaka46
### Downloading recent blogs
```
hashinami-cli -A nogitalk -T blogs
hashinami-cli -A nogitalk -T blogs -M 井上和
hashinami-cli -A nogitalk -T blogs -M 松尾美佑 黒見明香 --parallel
```
### Downloading past blogs
```
hashinami-cli -A nogitalk -T blogs -fd 2025-01-01 -td 2025-02-01
hashinami-cli -A nogitalk -T blogs -M 井上和 菅原咲月 -fd 2025-01-01 -td 2025-02-01
hashinami-cli -A nogitalk -T blogs -M 井上和 菅原咲月 -fd 2025-01-01 -td 2025-02-01 --parallel
```

## 🌸 sakurazaka46
### Downloading recent blogs
```
hashinami-cli -A sakutalk -T blogs
hashinami-cli -A sakutalk -T blogs -M 小島凪紗
hashinami-cli -A sakutalk -T blogs -M 中嶋優月 山下瞳月 --parallel
```
### Downloading past blogs
```
hashinami-cli -A sakutalk -T blogs -fd 2025-01-01 -td 2025-02-01
hashinami-cli -A sakutalk -T blogs -M 大園玲 大沼晶保 -fd 2025-01-01 -td 2025-02-01
hashinami-cli -A sakutalk -T blogs -M 大園玲 大沼晶保 -fd 2025-01-01 -td 2025-02-01 --parallel
```

## 💠 Hinatazaka46
### Downloading recent blogs
```
hashinami-cli -A hinatalk -T blogs
hashinami-cli -A hinatalk -T blogs -M 小西夏菜実
hashinami-cli -A hinatalk -T blogs -M 小西夏菜実 正源司陽子 --parallel
```

### Downloading past blogs
```
hashinami-cli -A hinatalk -T blogs -fd 2025-01-01 -td 2025-02-01
hashinami-cli -A hinatalk -T blogs -M 小西夏菜実 正源司陽子 -fd 2025-01-01 -td 2025-02-01
hashinami-cli -A hinatalk -T blogs -M 小坂菜緒 河田陽菜 -fd 2025-01-01 -td 2025-02-01 --parallel
```