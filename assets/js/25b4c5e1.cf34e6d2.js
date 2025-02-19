"use strict";(self.webpackChunkhashinami_cli_docs=self.webpackChunkhashinami_cli_docs||[]).push([[2608],{8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(6540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}},8957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"installation-and-setup/setup","title":"Setup","description":"How to setup this app or how to obtain refresh_token?","source":"@site/versioned_docs/version-1.0.0/installation-and-setup/setup.md","sourceDirName":"installation-and-setup","slug":"/setup","permalink":"/hashinami-cli-docs/docs/1.0.0/setup","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"setup","permalink":"/hashinami-cli-docs/docs/1.0.0/tags/setup"},{"inline":true,"label":"refresh token","permalink":"/hashinami-cli-docs/docs/1.0.0/tags/refresh-token"},{"inline":true,"label":"download directory","permalink":"/hashinami-cli-docs/docs/1.0.0/tags/download-directory"}],"version":"1.0.0","sidebarPosition":2,"frontMatter":{"id":"setup","title":"Setup","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Setup","sidebar_position":2,"pagination_label":"Setup","description":"How to setup this app or how to obtain refresh_token?","keywords":["setup","refresh token","download directory"],"tags":["setup","refresh token","download directory"],"slug":"/setup"},"sidebar":"docs","previous":{"title":"Installation","permalink":"/hashinami-cli-docs/docs/1.0.0/installation"},"next":{"title":"App Mobame Download","permalink":"/hashinami-cli-docs/docs/1.0.0/cli/app-mobame-download"}}');var i=t(4848),o=t(8453);const s={id:"setup",title:"Setup",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Setup",sidebar_position:2,pagination_label:"Setup",description:"How to setup this app or how to obtain refresh_token?",keywords:["setup","refresh token","download directory"],tags:["setup","refresh token","download directory"],slug:"/setup"},r="Setup",l={},d=[{value:"\ud83d\udd10 How to obtain refresh token?",id:"-how-to-obtain-refresh-token",level:2},{value:"\u2699\ufe0f Setting up the credentials for this app.",id:"\ufe0f-setting-up-the-credentials-for-this-app",level:2},{value:"\u2b07\ufe0f Where&#39;s the assets stored?",id:"\ufe0f-wheres-the-assets-stored",level:2},{value:"\ud83d\udcac I don&#39;t understand english, how to change the language?",id:"-i-dont-understand-english-how-to-change-the-language",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"setup",children:"Setup"})}),"\n",(0,i.jsx)(n.p,{children:"Here you'll learn how to setup this app.\nI'll show you how to obtain refresh token, change download directory and change language.\nRead until the end!"}),"\n",(0,i.jsx)(n.h2,{id:"-how-to-obtain-refresh-token",children:"\ud83d\udd10 How to obtain refresh token?"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"Actually, this is prohibited to share since it's\ngathering sensitive information data such as credentials.\nThe app already told you not to messed up. So, if you want\nto continue, I'm not responsible with the damage that you caused."})}),"\n",(0,i.jsx)(n.p,{children:"A. Android-to-android (Virtual Master & reqable)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=com.clone.android.dual.space",children:"virtual master"})," and ",(0,i.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=com.reqable.android",children:"reqable"})," from playstore."]}),"\n",(0,i.jsx)(n.li,{children:"Open virtual master and follow it's setup instructions. After that, create android 7 VM."}),"\n",(0,i.jsxs)(n.li,{children:["Download ",(0,i.jsx)(n.a,{href:"https://github.com/topjohnwu/magisk/releases",children:"magisk"})," from your main android."]}),"\n",(0,i.jsx)(n.li,{children:"Open the VM and import the magisk that you downloaded."}),"\n",(0,i.jsx)(n.li,{children:"Open reqable from your main android and generate magisk-reqable.zip certificate in the certificate installation section."}),"\n",(0,i.jsx)(n.li,{children:"Import the generated zip to your VM and install it using magisk."}),"\n",(0,i.jsx)(n.li,{children:"Install mobame in your VM, but don't login."}),"\n",(0,i.jsx)(n.li,{children:"Open reqable in your main android and filter the app to Virtual Master."}),"\n",(0,i.jsx)(n.li,{children:"Start traffic sniffing and login to your mobame app."}),"\n",(0,i.jsxs)(n.li,{children:["Search for ",(0,i.jsx)(n.strong,{children:"/signin"})," form from reqable app."]}),"\n",(0,i.jsx)(n.li,{children:"See the request > body data. And you'll see refresh_token value in there."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-setting-up-the-credentials-for-this-app",children:"\u2699\ufe0f Setting up the credentials for this app."}),"\n",(0,i.jsx)(n.p,{children:"After you get the refresh_token, insert it using this command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# -A, --app can be nogitalk, sakutalk, hinatalk, or asukatalk.\nhashinami-cli -A nogitalk --update-token 9cdfc60a-63bd-432a-9a3f-3aea8a4f5595\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-wheres-the-assets-stored",children:"\u2b07\ufe0f Where's the assets stored?"}),"\n",(0,i.jsxs)(n.p,{children:["You can see the default storage after run ",(0,i.jsx)(n.code,{children:"hashinami-cli"}),'.\nIt probably like "/your/home/directory/HASHINAMI/".\nYou can change the current download directory by following this steps.\nIf you\'re using linux, you can add in .bashrc file ',(0,i.jsx)(n.code,{children:"HASHINAMI_SAVE_DIR"})," variable and restart your terminal.\nOr you can also set the variable before execution."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# .bashrc\nexport HASHINAMI_LOCAL_DIR=<your desired path>\n\n# without .bashrc\nHASHINAMI_LOCAL_DIR="/your/desired/path/" hashinami-cli\n'})}),"\n",(0,i.jsx)(n.h2,{id:"-i-dont-understand-english-how-to-change-the-language",children:"\ud83d\udcac I don't understand english, how to change the language?"}),"\n",(0,i.jsx)(n.p,{children:"It's same as you change the download directory path.\nI made this app with 3 language translation.\nThe default is en (English). You can change to id (Indonesian), or ja (Japanese)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# .bashrc\nexport HASHINAMI_LANG=<your desired language>\n\n# without .bashrc\nHASHINAMI_LANG=ja hashinami-cli\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);