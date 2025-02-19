---
id: app-mobame-download
title: App Mobame Download
hide_title: false
hide_table_of_contents: false
sidebar_label: App Mobame Download
sidebar_position: 1
pagination_label: App Mobame Download
description: How to download this mobame from this app?
keywords:
  - mobame
  - talk
  - nogizaka46
  - sakurazaka46
  - hinatazaka46
tags: [mobame, talk, nogizaka46, sakurazaka46, hinatazaka46]
slug: /cli/app-mobame-download
---

# Mobame Download
:::warning
This command require refresh token to download the assets. 
If you haven't setup the token, please check [this](/docs/setup) or [this](https://github.com/proshunsuke/colmsg/blob/main/doc%2Fhow_to_get_refresh_token.md)!
:::

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
Common knowledge: 
- Past messages
> Past messages is previous days messages that you get after do a subscription. 
For example, if you subscribed a member at 2025-02-14, the past messages will be some messages at 2025-02-13. 
- Timeline messages
> Messages that can be filtered using date.
---
## 🪻 Nogizaka46
### Downloading past messages
```
hashinami-cli -A nogitalk -T past_messages -M 松尾美佑
hashinami-cli -A nogitalk -T past_messages -M 松尾美佑 黒見明香 --parallel
```
### Downloading timeline messages
```
hashinami-cli -A nogitalk -T timeline
hashinami-cli -A nogitalk -T timeline -M 井上和
hashinami-cli -A nogitalk -T timeline -M 井上和 菅原咲月 -fd 2025-01-01 -td 2025-02-01
hashinami-cli -A nogitalk -T timeline -M 井上和 菅原咲月 -fd 2025-01-01 -td 2025-02-01 --parallel
```

## 🌸 Sakurazaka46
### Downloading past messages
```
hashinami-cli -A sakutalk -T past_messages -M 小島凪紗
hashinami-cli -A sakutalk -T past_messages -M 中嶋優月 山下瞳月 --parallel
```
### Downloading timeline messages
```
hashinami-cli -A sakutalk -T timeline
hashinami-cli -A sakutalk -T timeline -M 藤吉夏鈴
hashinami-cli -A sakutalk -T timeline -M 大園玲 大沼晶保 -fd 2025-01-01 -td 2025-02-01
hashinami-cli -A sakutalk -T timeline -M 大園玲 大沼晶保 -fd 2025-01-01 -td 2025-02-01 --parallel
```

## 💠 Hinatazaka46
### Downloading past messages
```
hashinami-cli -A hinatalk -T past_messages -M 小西夏菜実
hashinami-cli -A hinatalk -T past_messages -M 小西夏菜実 正源司陽子 --parallel
```
### Downloading timeline messages
```
hashinami-cli -A hinatalk -T timeline
hashinami-cli -A hinatalk -T timeline -M 小西夏菜実
hashinami-cli -A hinatalk -T timeline -M 小西夏菜実 正源司陽子 -fd 2025-01-01 -td 2025-02-01
hashinami-cli -A hinatalk -T timeline -M 小坂菜緒 河田陽菜 -fd 2025-01-01 -td 2025-02-01 --parallel
```
