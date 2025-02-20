## Quickstart
This app is written in JavaScript with [ESM](https://nodejs.org/api/esm.html) scope.  
Get latest blogs data using this following code: 
```js title="index.js"
import { AssetPreDownload } from "hashinami-cli";

const data = await new AssetPreDownload("nogitalk").mobameBlogs({ member: ["井上和"] });

// You can process the data as you want.
console.log(data)
```
Works! 🎉