"use strict";(self.webpackChunkMHOnDeck=self.webpackChunkMHOnDeck||[]).push([[341],{8157:function(e,t,n){var l=n(1151),a=n(7294);function r(e){const t=Object.assign({p:"p",strong:"strong",code:"code",em:"em"},(0,l.ah)(),e.components);return a.createElement("div",{className:"note"},a.createElement(t.p,null,a.createElement(t.strong,null,"Note:"),' If you get a prompt saying "Windows protected Your PC" when running a *.bat script provided, click:'),a.createElement(t.p,null,a.createElement(t.code,null,"More info > Run anyway")),a.createElement(t.p,null,"If your browser prevents you from downloading, select ",a.createElement(t.em,null,"Keep")," and/or ",a.createElement(t.em,null,"Keep anyway")),a.createElement(t.p,null,"To view the contents of a *.bat script, right-click > Edit or Open with Notepad (or any text-editor of choice)"))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)}},8985:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var l=n(1151),a=n(7294),r=n(9357),c=n(1619),o=n(7306),m=n(4279),i=n(5670);function s(e){const t=Object.assign({h2:"h2",p:"p",strong:"strong",a:"a",h3:"h3",code:"code",em:"em"},(0,l.ah)(),e.components);return a.createElement("div",{id:"decky",className:"instructions"},a.createElement("div",{id:"decky-steamos"},a.createElement(t.h2,null,"SteamOS"),a.createElement(t.p,null,'Visit this page in SteamOS "Desktop Mode"'),a.createElement(t.p,null,"Copy the Decky Loader installer script:"),a.createElement(i.Z,{copyCommand:"curl -L https://github.com/SteamDeckHomebrew/decky-installer/releases/latest/download/install_release.sh | sh"}),a.createElement(t.p,null,'Paste into the Konsole app (Start Menu > System)\r\nHit the "Enter" key to install'),a.createElement("br"),a.createElement(t.p,null,a.createElement(t.strong,null,"Alternatively"),", follow the steps provided from the Decky Loader GitHub:"),a.createElement(t.p,null,a.createElement(t.a,{href:"https://github.com/SteamDeckHomebrew/decky-loader#user-content--installation"},"https://github.com/SteamDeckHomebrew/decky-loader#user-content--installation"))),a.createElement("br"),a.createElement("div",{id:"decky-windows"},a.createElement(t.h2,null,"Windows"),a.createElement(t.h3,null,"Quick Setup"),a.createElement(t.p,null,"Download the Decky installer script:"),a.createElement("a",{className:"cta",href:m.Ab.H,download:!0},m.Ab.T),a.createElement(t.p,null,"Right-click ",m.Ab.T,' > "Run as Administrator"'),a.createElement(t.p,null,"Follow the prompts (hit Enter to use default file/folder paths for unpacking the Theme)"),a.createElement(t.p,null,"Once the installation completes, the folder at ",a.createElement(t.code,null,"Decky\\PluginLoader_Win")," will open"),a.createElement(t.p,null,"Run either ",a.createElement(t.code,null,"PluginLoader.exe")," or ",a.createElement(t.code,null,"PluginLoader_noconsole.exe")," (starts silently in the background)"),a.createElement("br"),a.createElement(t.h3,null,"Manual Setup"),a.createElement(t.p,null,"Navigate to your Steam installation location and create a blank file with the following name:"),a.createElement(i.Z,{copyCommand:".cef-enable-remote-debugging"}),a.createElement(t.p,null,'Enable "File name extensions" in File Explorer > "View" (or "View" > "Show")'),a.createElement(t.p,null,"Alternatively, open the command prompt at this location and run:"),a.createElement(i.Z,{copyCommand:'type nul > ".cef-enable-remote-debugging"'}),a.createElement(t.p,null,"This enables CEF Remote Debugging and is ",a.createElement(t.em,null,"required")),a.createElement(t.p,null,"Next, copy and run the following command to setup Decky Loader (default location: Documents\\Decky\\PluginLoader_Win):"),a.createElement(i.Z,{copyCommand:'cd %USERPROFILE%Documents && curl -L -o "PluginLoader_Win.zip" "https://nightly.link/SteamDeckHomebrew/decky-loader/workflows/build-win/main/PluginLoader%20Win.zip" && powershell -command "Expand-Archive -Path \'PluginLoader_Win.zip\' -DestinationPath \'.DeckyPluginLoader_Win\'" && del "PluginLoader_Win.zip" && echo Done! || echo Failed!'})),a.createElement("br"),a.createElement("div",{id:"decky-uninstall"},a.createElement(t.h2,null,"Uninstall Decky Loader"),a.createElement(t.h3,null,"SteamOS"),a.createElement(t.p,null,'Enter "Desktop Mode" > Konsole'),a.createElement(t.p,null,"Copy, paste, and hit Enter to run the uninstaller:"),a.createElement(i.Z,{copyCommand:"curl -L https://github.com/SteamDeckHomebrew/decky-installer/releases/latest/download/uninstall.sh | sh"}),a.createElement(t.p,null,"Alternatively, follow the steps indicated in the Decky Loader GitHub:"),a.createElement(t.p,null,a.createElement(t.a,{href:"https://github.com/SteamDeckHomebrew/decky-loader#user-content--uninstallation"},"https://github.com/SteamDeckHomebrew/decky-loader#user-content--uninstallation")),a.createElement("br"),a.createElement(t.h3,null,"Windows"),a.createElement(t.p,null,'Download and run our (unofficial) "Decky Uninstaller" (as an Administrator):'),a.createElement("a",{className:"cta",href:"https://www.dropbox.com/scl/fi/58p983c1e4oedlsoor6ab/uninstall_decky.bat?rlkey=9fg3la7f04488q7vamuk6pzui&st=nd44krx2&dl=1",download:!0},"uninstall_decky.bat")))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(s,e)):s(e)};function d(e){const t=Object.assign({p:"p"},(0,l.ah)(),e.components);return a.createElement("div",{id:"steamgriddb",className:"instructions"},a.createElement(t.p,null,"Install from Decky Loader shop"))}var p=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(d,e)):d(e)},h=n(8157);function E(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",em:"em",ul:"ul",li:"li",h3:"h3",a:"a"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(r.Z,{title:"Resources"}),"\n",a.createElement("main",{className:"standard-page"},a.createElement("section",{id:"hero"},a.createElement(o.Z),a.createElement(t.h1,null,"Resources & Utilities"),a.createElement(t.h2,null,"Useful Websites and Tools")),a.createElement("section",{id:"resources",className:"large-text-list"},a.createElement(h.Z),a.createElement("div",{className:"note warning"},a.createElement(t.p,null,a.createElement(t.em,null,"Note"),": Decky Loader on Windows is still experimental and not officially supported.\r\nYou may encounter issues with the CSS Loader and Audio Loader plugins failing to load.\r\nThe MHOnDeck UI Theme is best suited for SteamOS (and primarily tested on Steam Deck).")),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.h3,null,"Decky Loader"),"\n",a.createElement(u),"\n",a.createElement("br"),"\n","Links:","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://decky.xyz/"},"decky.xyz")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://github.com/SteamDeckHomebrew/decky-plugin-database"},"github.com/SteamDeckHomebrew/decky-plugin-database")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://docs.deckthemes.com/CSSLoader/Install/"},"docs.deckthemes.com/CSSLoader/Install")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://docs.deckthemes.com/AudioLoader/Install/"},"docs.deckthemes.com/AudioLoader/Install")),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.h3,null,"CSSLoader Desktop"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://github.com/DeckThemes/CSSLoader-Desktop/releases"},"github.com/DeckThemes/CSSLoader-Desktop/releases")),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.h3,null,"Deckthemes.com"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://deckthemes.com/download/deck"},"deckthemes.com/download/deck")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://deckthemes.com/download/windows"},"deckthemes.com/download/windows")),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.h3,null,"SteamGridDB"),"\n",a.createElement(p),"\n",a.createElement("br"),"\n","Links:","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://github.com/SteamGridDB/decky-steamgriddb"},"github.com/SteamGridDB/decky-steamgriddb")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://steamgriddb.com"},"steamgriddb.com")),"\n"),"\n"),"\n")),a.createElement(c.Z)))}var f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(E,e)):E(e)}},1433:function(e,t,n){var l=n(7294);t.Z=e=>{let{textToCopy:t,className:n="cta",innerText:a="Copy",innerClickedText:r="Copied"}=e;const{0:c,1:o}=(0,l.useState)(!1);return l.createElement("button",{className:n,onClick:()=>{navigator.clipboard.writeText(t),o(!0),setTimeout((()=>o(!1)),4e3)}},c?r:a)}},5670:function(e,t,n){var l=n(7294),a=n(1433);t.Z=e=>{let{copyCommand:t,className:n=""}=e;return l.createElement("div",{className:`${n} copy-wrapper space-between`},l.createElement("input",{type:"text",contentEditable:"false",value:t}),l.createElement(a.Z,{textToCopy:t,className:"cta small",innerText:"Copy"}))}},1619:function(e,t,n){var l=n(7294),a=n(1019);t.Z=()=>l.createElement("footer",{id:"site-footer"},l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://reddit.com/u/jM5557"},"Reddit")),l.createElement("li",null,l.createElement("a",{href:"https://www.youtube.com/@MHOnDeck"},"YouTube")),l.createElement("li",null,l.createElement("a",{href:"mailto:mhondeck.site@gmail.com"},"Email"))),l.createElement("img",{alt:"Footer Logo",src:a.Z,id:"footer-logo"}),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"/faq"},"FAQ")),l.createElement("li",null,l.createElement("a",{href:"/resources"},"Resources")),l.createElement("li",null,l.createElement("a",{href:"https://store.steampowered.com"},"Steam"))))},7306:function(e,t,n){var l=n(7294),a=n(1019);t.Z=()=>l.createElement("nav",{id:"top-nav",className:"flex space-b align-c"},l.createElement("a",{href:"/",id:"main-logo"},l.createElement("img",{alt:"MHOnDeck Logo",src:a.Z}),l.createElement("span",{className:"hidden"},"MHOnDeck")),l.createElement("div",{className:"submenu flex space-b align-c"},l.createElement("li",null,l.createElement("a",{href:"/ui/theme"},"UI Theme")),l.createElement("li",null,l.createElement("a",{href:"/games"},"Games")),l.createElement("li",null,l.createElement("a",{href:"/videos"},"Videos"))))},9357:function(e,t,n){var l=n(7294),a=n(4854);t.Z=function(e){var t,n;let{description:r,title:c,children:o}=e;const{site:m}=(0,a.useStaticQuery)("63159454"),i=r||m.siteMetadata.description,s=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,s?`${s} | ${c}`:c),l.createElement("meta",{name:"description",content:i}),l.createElement("meta",{property:"og:title",content:c}),l.createElement("meta",{property:"og:description",content:i}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n?void 0:n.author)||""}),l.createElement("meta",{name:"twitter:title",content:c}),l.createElement("meta",{name:"twitter:description",content:i}),o)}},1019:function(e,t,n){t.Z=n.p+"static/logo-85bf71a1b46c53d7c97e9df3f566e34b.svg"},1151:function(e,t,n){n.d(t,{ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}},4279:function(e){e.exports=JSON.parse('{"rS":{"title":"MHOnDeck UI Theme","url":"https://www.dropbox.com/scl/fi/uvj2y305tf4ftnlnbyldj/homebrew.zip?rlkey=ephy3vcmzc4nz8udum0lt4sih&st=pnvf1znt&dl=1","fileSize":"29.8 MB"},"iv":{"title":"MHOnDeck CSS Theme","url":"https://www.dropbox.com/scl/fi/fp14ctf61mzhunsyye20p/MHOnDeck-CSS-Theme.zip?rlkey=b08mqg9km17pswd4klr555nxi&st=hdxtka7c&dl=1","fileSize":"28.5 MB"},"x4":{"title":"MHOnDeck SFX Pack","url":"https://www.dropbox.com/scl/fi/i7c92ekrn7w55ozebmvt2/MHOnDeck-SFX-Pack.zip?rlkey=4rsnhjjs5jmm339rcfedcufo5&dl=1","fileSize":"1.32 MB"},"games":{"title":"Steam Game Artwork","url":"https://www.dropbox.com/scl/fo/ss37zk1a7b2xdqa2ng8w0/APqros5Xgn7GWeNpIlUsNpw?rlkey=oh5k0dml8o39a485lik5pfj2b&st=ggheqpi1&dl=1","fileSize":"111 MB"},"Ab":{"T":"decky.bat","H":"https://www.dropbox.com/scl/fi/7jfv18iiwxph38mohjhlw/decky.bat?rlkey=xyhlm295qo5yoxhioiu5dmev1&st=p01j9sm5&dl=1"},"As":{"T":"theme.bat","H":"https://www.dropbox.com/scl/fi/b44a572qy22dz7uwumc9q/theme.bat?rlkey=vwl24wq5u6ctb9hfvmidmakyh&st=oy9kfteg&dl=1"}}')}}]);
//# sourceMappingURL=component---src-pages-resources-mdx-88c52200c45de4d1e675.js.map