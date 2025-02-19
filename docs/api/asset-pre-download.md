---
id: asset-pre-download
title: Asset Pre Download
hide_title: false
hide_table_of_contents: false
sidebar_label: Asset Pre Download
sidebar_position: 5
pagination_label: Asset Pre Download
description: How to get predownload data from this app?
keywords:
  - mobame
  - talk
  - blog
  - nogizaka46
  - sakurazaka46
  - hinatazaka46
  - Asset Pre Download
tags: [mobame, talk, blog, nogizaka46, sakurazaka46, hinatazaka46, assetpredownload]
slug: /api/asset-pre-download
---

# 📦 Class 
### `AssetPreDownload`
- **Description**: Class to prepare download materials.
***
## 🚧 Constructors
### `constructor(appname)`
- **Parameters**:
  - `appname`: `string`. Which app you want to gather the asset.
- **Description**: Construct a new instance of `AssetPreDownload`.
***
## 🛠️ Methods
### `mobameData({ assetname })`
```js
import { AssetPreDownload } from "hashinami-cli";
const data = await new AssetPreDownload("nogitalk").mobameData({ assetname: "blogs" });
console.log(data);
```
- **Parameters**:
  - `params.assetname`: `string`. What kind of assets you wanna gather the data.
- **Description**: Get mobame data such as `/blogs`, `/announcements`, `/members`, and `/groups`.
- **Return**: Return `Promise<Array[]>` of `Object`.

### `mobameMessages({ mode, member, fromdate, todate, parallel })`
```js
import { AssetPreDownload } from "hashinami-cli";
const data = await new AssetPreDownload("nogitalk").mobameMessages({ mode: "timeline", member: ["柴田柚菜"] });
console.log(data);
```
- **Parameters**:
  - `params.mode`: `string`. Choose one between `timeline` or `past_messages`.
  - `params.member`: `Array[]`. List member in kanji or id.
  - `params.fromdate`: `string|undefined`. Optional parameter. Query start date in yyyy-mm-dd or `new Date()` format.
  - `params.todate`: `string|undefined`. Optional parameter. Query end date in yyyy-mm-dd or `new Date()` format.
  - `params.parallel`: `boolean`. Optional parameter. Default is `false`. Activate some asynchronous function.
- **Description**: Generate mobame messages list.
- **Return**: Return `Promise<Array[]>` of messages object.

### `mobameBlogs({ member, fromdate, todate })` 
```js
import { AssetPreDownload } from "hashinami-cli";
const data = await new AssetPreDownload("nogitalk").mobameBlogs({ member: ["柴田柚菜"] });
console.log(data);
```
- **Parameters**:
  - `params.member`: `Array[]`. List member in kanji or id.
  - `params.fromdate`: `string|undefined`. Optional parameter. Query start date in yyyy-mm-dd or `new Date()` format.
  - `params.todate`: `string|undefined`. Optional parameter. Query end date in yyyy-mm-dd or `new Date()` format.
- **Description**: Generate mobame blogs list.
- **Return**: Return `Promise<Array[]>` of messages object.
***