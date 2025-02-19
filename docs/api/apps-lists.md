---
id: apps-lists
title: Apps Lists
hide_title: false
hide_table_of_contents: false
sidebar_label: Apps Lists
sidebar_position: 3
pagination_label: Apps Lists
description: How to get lists supported apps?
keywords:
  - mobame
  - games
  - nogizaka46
  - sakurazaka46
  - hinatazaka46
  - Apps Lists
tags: [mobame, games, nogizaka46, sakurazaka46, hinatazaka46, appslists]
slug: /api/apps-lists
---

# 🛰️ Namespace
### `AppsLists`
- **Description**: Object that store list of apps.
***
## 🏘️ Properties
```js
import { AppsList } from "hashinami-cli";
console.log(AppsLists.messagesLists);
```
### `messagesList`
- **Description**: Contains list of available message apps.
- **Type**: `Array<string>`
### `gamesList`
- **Description**: Contains list of available game apps.
- **Type**: `Array<string>`
### `commonImageList`
- **Description**: Contains list of available image assets that can be downloaded.
- **Type**: `Array<string>`
### `commonVideoList`
- **Description**: Contains list of available video assets that can be downloaded.
- **Type**: `Array<string>`
### `commonUnityList`
- **Description**: Contains list of available unity assets that can be downloaded.
- **Type**: `Array<string>`
### `commonUsmList`
- **Description**: Contains list of available usm assets that can be downloaded.
- **Type**: `Array<string>`
### `commonCpkList`
- **Description**: Contains list of available cpk assets that can be downloaded.
- **Type**: `Array<string>`
### `commonConfigList`
- **Description**: Contains list of available config assets that can be downloaded.
- **Type**: `Array<string>`
### `commonCatalogList`
- **Description**: Contains list of available catalog assets that can be downloaded.
- **Type**: `Array<string>`
***