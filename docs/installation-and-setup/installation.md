---
id: installation
title: Installation
hide_title: false
hide_table_of_contents: false
sidebar_label: Installation
sidebar_position: 1
pagination_label: Installation
description: How to install this app?
keywords:
  - installation
tags: [installation]
slug: /installation
---

# Installation
There are two ways of installation. 
If you're planning to use app to download the asset directly, read quick installation or manual installation. 
However, if you want to create your own method to download the assets, read developer installation. 

## 🐇 Quick Installation 
Just directly install this app globally using npm and the app is ready to use.
```shell script
npm i -g hashinami-cli
hashinami-cli -v
```

## 🐢 Manual Installation
1. Clone this repository.
```shell script 
git clone https://github.com/hashinami46/hashinami-cli.git
```
2. Go to the cloned app directory and install the dependencies. After that, build the app. 
```shell script
# Go to cloned app directory
cd hashinami-cli
# Install dependencies
npm install
# Build app
npm run build
```
3. Run `npm link` and the app is ready to use.
```shell script
# Link to global package
npm link
hashinami-cli -v
```

## 🦉 Developer Installation
A. Git clone method
1. Clone this repository.
```shell script 
git clone https://github.com/hashinami46/hashinami-cli.git
```
2. Go to the cloned app directory and install the dependencies. After that, build the app. 
```shell script
# Go to cloned app directory
cd hashinami-cli
# Install dependencies
npm install
# Build app
npm run build
```
3. You can add your own method, scripts, etc.

B. Npm install method
1. Create a new project
```shell script
mkdir my-project
cd my-project
npm init -y
```
2. Change your project to esm by adding `type:"module"` to package.json. 
```
# package.json
{
	"name": "my-project",
	"type": "module",
	...
}
```
3. Install the app to your current project using npm install. 
```shell script
npm i hashinami-cli
```
4. Create an index.js file and import api that I provided. Example
```js
# index.js
import { AppsLists } from "hashinami-cli";
console.log(AppsList.messagesList);
#  [
#    "nogitalk",
#    "sakutalk",
#    "hinatalk",
#    "asukatalk"
#  ]
```