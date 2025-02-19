---
id: request-endpoint
title: Request Endpoint
hide_title: false
hide_table_of_contents: false
sidebar_label: Request Endpoint
sidebar_position: 3
pagination_label: Request Endpoint
description: Endpoint reference.
keywords:
  - mobame
  - games
  - nogizaka46
  - sakurazaka46
  - hinatazaka46
  - endpoint
tags: [mobame, games, nogizaka46, sakurazaka46, hinatazaka46, endpoint]
slug: /api/request-endpoint
---

# 📦 Class 
### `RequestEndpoint`
- **Description**: Class to generate url and path related.
***
## 🚧 Constructors
### `constructor(appname, assetname)`
- **Parameters**:
  - `appname`: `string`. Which app you want to get the url and path.
  - `assetname`: `string`. Which app asset you want to get the url and path.
- **Description**: Construct a new instance of `RequestEndpoint`.
***
## 🛠️ Methods
### `basenameServerLocal()`
```js
import { RequestEndpoint } from "hashinami-cli";
const { baseServer, baseLocal } = await new RequestEndpoint("nogitalk").basenameServerLocal();
console.log(baseServer, baseLocal);
```
- **Description**: Get base url server or local path storage of the specified app.
- **Return**: return `Promise<Object<{ baseServer: string, baseLocal: string }>>`.
### `pathnameServerLocal()`
```js
import { RequestEndpoint } from "hashinami-cli";
const { pathServer, pathLocal } = await new RequestEndpoint("nogitalk", "blogs").pathnameServerLocal();
console.log(pathServer, pathLocal);
```
- **Description**: Get sub url server or local path storage of the specified app.
- **Return**: return `Promise<Object<{ pathServer: string, pathLocal: string }>>`.
***