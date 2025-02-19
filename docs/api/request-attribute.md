---
id: request-attribute
title: Request Attribute
hide_title: false
hide_table_of_contents: false
sidebar_label: Request Attribute
sidebar_position: 4
pagination_label: Request Attribute
description: Request requirements reference.
keywords:
  - mobame
  - games
  - nogizaka46
  - sakurazaka46
  - hinatazaka46
  - http
tags: [mobame, games, nogizaka46, sakurazaka46, hinatazaka46, http]
slug: /api/request-attribute
---

# 📦 Class 
### `RequestEndpoint`
- **Description**: Class to generate request header such as token, etc.
***
## 🚧 Constructors
### `constructor(appname)`
- **Parameters**:
  - `appname`: `string`. Which app you want to get the request attribute.
- **Description**: Construct a new instance of `RequestAttribute`.
***
## 🛠️ Methods
### `authToken({ mode, refresh_token, access_token })`
```js
import { RequestEndpoint } from "hashinami-cli";
const { refresh_token, access_token } = await RequestAttribute("nogitalk").authToken({ mode: read });
console.log(refresh_token, access_token);
```
- **Parameters**:
  - `params.mode`: `string`. Should be "read, write, or update".
  - `params.refresh_token`: `string|undefined`. Token to refresh access_token.
  - `params.access_token`: `string|undefined`. Token to access some api.
- **Description**: Read, write, update token or cookies for talk apps.
- **Return**: `Promise<(Object[]|void)>`

### `customHeader({ access_token })`
```js
import { RequestEndpoint } from "hashinami-cli";
const data = await RequestAttribute("nogitalk").customHeader({ access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." });
console.log(data);
```
- **Parameters**:
  - `params.access_token`: `string|undefined`. Token to access some api.
- **Description**: Generate http header to perform an app request.
- **Return**: `Promise<Object[]>`
***