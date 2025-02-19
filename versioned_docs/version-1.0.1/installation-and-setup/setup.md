---
id: setup
title: Setup
hide_title: false
hide_table_of_contents: false
sidebar_label: Setup
sidebar_position: 2
pagination_label: Setup
description: How to setup this app or how to obtain refresh_token?
keywords:
  - setup
  - refresh token
  - download directory
tags: [setup, refresh token, download directory]
slug: /setup
---

# Setup
Here you'll learn how to setup this app. 
I'll show you how to obtain refresh token, change download directory and change language. 
Read until the end!

## 🔐 How to obtain refresh token?
:::danger
Actually, this is prohibited to share since it's 
gathering sensitive information data such as credentials. 
The app already told you not to messed up. So, if you want 
to continue, I'm not responsible with the damage that you caused.
:::

A. Android-to-android (Virtual Master & reqable)
1. Install [virtual master](https://play.google.com/store/apps/details?id=com.clone.android.dual.space) and [reqable](https://play.google.com/store/apps/details?id=com.reqable.android) from playstore.
2. Open virtual master and follow it's setup instructions. After that, create android 7 VM. 
3. Download [magisk](https://github.com/topjohnwu/magisk/releases) from your main android.
4. Open the VM and import the magisk that you downloaded. 
5. Open reqable from your main android and generate magisk-reqable.zip certificate in the certificate installation section.
6. Import the generated zip to your VM and install it using magisk.
7. Install mobame in your VM, but don't login. 
8. Open reqable in your main android and filter the app to Virtual Master.
9. Start traffic sniffing and login to your mobame app.
10. Search for **/signin** form from reqable app.
11. See the request > body data. And you'll see refresh_token value in there. 


## ⚙️ Setting up the credentials for this app.
After you get the refresh_token, insert it using this command
```
# -A, --app can be nogitalk, sakutalk, hinatalk, or asukatalk.
hashinami-cli -A nogitalk --update-token 9cdfc60a-63bd-432a-9a3f-3aea8a4f5595
```

## ⬇️ Where's the assets stored?
You can see the default storage after run `hashinami-cli`. 
It probably like "/your/home/directory/HASHINAMI/". 
You can change the current download directory by following this steps. 
If you're using linux, you can add in .bashrc file `HASHINAMI_SAVE_DIR` variable and restart your terminal. 
Or you can also set the variable before execution. 
```
# .bashrc
export HASHINAMI_LOCAL_DIR=<your desired path>

# without .bashrc
HASHINAMI_LOCAL_DIR="/your/desired/path/" hashinami-cli
```

## 💬 I don't understand english, how to change the language?
It's same as you change the download directory path. 
I made this app with 3 language translation. 
The default is en (English). You can change to id (Indonesian), or ja (Japanese). 
```
# .bashrc
export HASHINAMI_LANG=<your desired language>

# without .bashrc
HASHINAMI_LANG=ja hashinami-cli
```