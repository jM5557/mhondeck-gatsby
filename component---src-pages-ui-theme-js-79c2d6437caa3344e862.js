"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[7],{1433:function(e,t,l){var n=l(7294);t.Z=e=>{let{textToCopy:t,className:l="cta",innerText:a="Copy",innerClickedText:o="Copied"}=e;const{0:c,1:r}=(0,n.useState)(!1);return n.createElement("button",{className:l,onClick:()=>{navigator.clipboard.writeText(t),r(!0),setTimeout((()=>r(!1)),4e3)}},c?o:a)}},5670:function(e,t,l){var n=l(7294),a=l(1433);t.Z=e=>{let{copyCommand:t,className:l=""}=e;return n.createElement("div",{className:l+" copy-wrapper space-between"},n.createElement("input",{type:"text",contentEditable:"false",value:t}),n.createElement(a.Z,{textToCopy:t,className:"cta small",innerText:"Copy"}))}},709:function(e,t,l){var n=l(7294);t.Z=e=>{let{downloadLink:t,title:l,fileSize:a}=e;const{0:o,1:c}=(0,n.useState)(5),{0:r,1:m}=(0,n.useState)(!0);(0,n.useEffect)((()=>{if(o>0&&r){const e=setTimeout((()=>{c((e=>e-1))}),1e3);return()=>clearTimeout(e)}0===o&&r&&(window.location.href=t)}),[o,r,t]);return n.createElement("div",{className:"download-window"},n.createElement("h3",null,"Download"),n.createElement("h2",null,l),n.createElement("p",null,"File Size: ",a),n.createElement("div",{className:"download-inner"},r?n.createElement(n.Fragment,null,o>0&&n.createElement("p",null,"Download starting in ",o," seconds..."),0===o&&n.createElement("p",null,"Download started...")):n.createElement("button",{type:"button",className:"cta",onClick:()=>{m(!0)}},"Download Now")))}},961:function(e,t,l){l.d(t,{e:function(){return o}});var n=l(7294);const a=e=>{let{children:t,className:l=""}=e;return n.createElement("div",{className:"modal "+l},t)},o=()=>{let{0:e,1:t}=(0,n.useState)(!1);return{showModal:e,setShowModal:t,ModalComponent:l=>{let{children:o,className:c,onExit:r}=l;const m=()=>{t(!1),r&&r()};return(0,n.useEffect)((()=>{const t=e=>{"Escape"===e.key&&m()},l=()=>{m(),window.history.pushState(null,null,window.location.href)};return window.addEventListener("keydown",t),window.addEventListener("popstate",l),e&&window.history.pushState(null,null,window.location.href),()=>{window.removeEventListener("keydown",t),window.removeEventListener("popstate",l),e&&window.history.back()}}),[e,t]),e?n.createElement(a,{className:c},o,n.createElement("button",{type:"button",onClick:m,className:"cta exit"},"Exit")):n.createElement(n.Fragment,null)}}}},1619:function(e,t,l){var n=l(7294),a=l(9495);t.Z=()=>n.createElement("footer",{id:"site-footer"},n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"https://reddit.com/u/jM5557"},"Reddit")),n.createElement("li",null,n.createElement("a",{href:"https://www.youtube.com/@MHOnDeck"},"YouTube")),n.createElement("li",null,n.createElement("a",{href:"mailto:mhondeck.site@gmail.com"},"Email"))),n.createElement("img",{alt:"Footer Logo",src:a.Z,id:"footer-logo"}),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"/faq"},"FAQ")),n.createElement("li",null,n.createElement("a",{href:"/resources"},"Resources")),n.createElement("li",null,n.createElement("a",{href:"https://store.steampowered.com"},"Steam"))))},7306:function(e,t,l){var n=l(7294),a=l(9495);t.Z=()=>n.createElement("nav",{id:"top-nav",className:"flex space-b align-c"},n.createElement("a",{href:"/",id:"main-logo"},n.createElement("img",{alt:"MHOnDeck Logo",src:a.Z}),n.createElement("span",{className:"hidden"},"MHOnDeck")),n.createElement("div",{className:"submenu flex space-b align-c"},n.createElement("li",null,n.createElement("a",{href:"/games"},"Games")),n.createElement("li",null,n.createElement("a",{href:"/videos"},"Videos")),n.createElement("li",null,n.createElement("a",{href:"/ui/theme"},"UI Theme"))))},9357:function(e,t,l){var n=l(7294),a=l(1883);t.Z=function(e){var t,l;let{description:o,title:c,children:r}=e;const{site:m}=(0,a.useStaticQuery)("63159454"),i=o||m.siteMetadata.description,s=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,s?s+" | "+c:c),n.createElement("meta",{name:"description",content:i}),n.createElement("meta",{property:"og:title",content:c}),n.createElement("meta",{property:"og:description",content:i}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(l=m.siteMetadata)||void 0===l?void 0:l.author)||""}),n.createElement("meta",{name:"twitter:title",content:c}),n.createElement("meta",{name:"twitter:description",content:i}),r)}},9178:function(e,t,l){l.r(t),l.d(t,{Head:function(){return p},default:function(){return w}});var n=l(7294),a=l(7306),o=l(5670),c=l(4279);c.rS.url;var r=l(1619),m=l(9357),i=l(961),s=l(709),u=l(1151);var d=e=>{let{item:t,onClick:l}=e;return n.createElement("li",null,t.title,n.createElement("button",{type:"button",className:"cta",onClick:()=>l(t)},"Download"))};function h(e){const t=Object.assign({h2:"h2",h3:"h3",h4:"h4",p:"p",a:"a",code:"code",em:"em",ul:"ul",li:"li"},(0,u.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement("section",{className:"install"},n.createElement(t.h2,null,"Install"),n.createElement(t.h3,null,"On SteamOS"),n.createElement(t.h4,null,"Prerequisite"),n.createElement(t.p,null,'Enter "Desktop Mode" > Konsole app [Start Menu ("Steam Deck" Icon) > System]'),n.createElement(t.p,null,'If "Decky Loader" is not installed yet, copy the command below, paste, and hit Enter'),n.createElement(o.Z,{copyCommand:"curl -L https://github.com/SteamDeckHomebrew/decky-installer/releases/latest/download/install_release.sh | sh"}),n.createElement(t.p,null,"Alternatively, follow the steps from the Decky Loader GitHub:"),n.createElement(t.p,null,n.createElement(t.a,{href:"https://github.com/SteamDeckHomebrew/decky-loader#user-content--installation"},"https://github.com/SteamDeckHomebrew/decky-loader#user-content--installation")),n.createElement(t.h4,null,"Quick Setup"),n.createElement(t.p,null,'Install (or update) the "MHOnDeck UI Theme" by copying the command:'),n.createElement(o.Z,{copyCommand:"wget -N -P /home/deck https://www.dropbox.com/scl/fi/uvj2y305tf4ftnlnbyldj/homebrew.zip?rlkey=ephy3vcmzc4nz8udum0lt4sih&dl=1 && unzip -o -d /home/deck /home/deck/homebrew"}),n.createElement(t.p,null,"Paste onto the Konsole and hit Enter"),n.createElement(t.h4,null,"Manual Setup"),n.createElement(t.p,null,'Download the "MHOnDeck UI Theme" below:'),n.createElement("ul",{className:"link-box"},n.createElement(d,{item:c.rS,onClick:e.setDownload})),n.createElement(t.p,null,"OR"),n.createElement("ul",{className:"link-box"},n.createElement(d,{item:c.iv,onClick:e.setDownload}),n.createElement(d,{item:c.x4,onClick:e.setDownload})),n.createElement(t.p,null,"Right-click and extract the contents of the downloaded file into the following folder:"),n.createElement(t.p,null,n.createElement(t.code,null,"/home/deck/homebrew")),n.createElement(t.p,null,"The final result should look like:"),n.createElement(t.p,null,n.createElement(t.code,null,"/home/deck/homebrew/sounds")," and ",n.createElement(t.code,null,"/home/deck/homebrew/themes"))),"\n",n.createElement("section",{className:"install"},n.createElement(t.h2,null,"Install"),n.createElement(t.h3,null,"On Windows"),n.createElement(t.h4,null,"Prerequisite"),n.createElement(t.p,null,'If "Decky Loader" is not installed yet, download the following "Decky Loader" installer:'),n.createElement("a",{className:"cta",href:"https://www.dropbox.com/scl/fi/7jfv18iiwxph38mohjhlw/decky.bat?rlkey=xyhlm295qo5yoxhioiu5dmev1&st=p01j9sm5&dl=1",download:!0},"decky.bat"),n.createElement(t.p,null,'Right-click and "Run as Administrator"'),n.createElement(t.h4,null,"Quick Setup"),n.createElement(t.p,null,'Download the following "MHOnDeck UI Theme" installer:'),n.createElement("a",{className:"cta",href:"https://www.dropbox.com/scl/fi/7jfv18iiwxph38mohjhlw/decky.bat?rlkey=xyhlm295qo5yoxhioiu5dmev1&st=p01j9sm5&dl=1",download:!0},"theme.bat"),n.createElement(t.p,null,'Right-click and "Run as Administrator"'),n.createElement(t.p,null,"Follow the onscreen prompts (hit Enter to use default file/folder paths)"),n.createElement(t.p,null,"Once the installation completes, the folder at ",n.createElement(t.code,null,"Decky\\PluginLoader_Win")," will open"),n.createElement(t.p,null,"Run either ",n.createElement(t.code,null,"PluginLoader.exe")," or ",n.createElement(t.code,null,"PluginLoader_noconsole.exe")," (starts silently in the background)"),n.createElement(t.h4,null,"Manual Setup"),n.createElement(t.p,null,"Navigate to your Steam installation location and create a blank file with the following name:"),n.createElement(o.Z,{copyCommand:".cef-enable-remote-debugging"}),n.createElement(t.p,null,'Make sure "File name extensions" is checked off at the top of the File Explorer under the "View" tab'),n.createElement(t.p,null,"Alternatively, open the command prompt at this location and run:"),n.createElement(o.Z,{copyCommand:'type nul > ".cef-enable-remote-debugging"'}),n.createElement(t.p,null,"This enables CEF Remote Debugging and is ",n.createElement(t.em,null,"required")),n.createElement(t.p,null,"Next, copy and run the following command to setup Decky Loader (default location: Documents\\Decky\\PluginLoader_Win):"),n.createElement(o.Z,{copyCommand:'cd %USERPROFILE%Documents && curl -L -o "PluginLoader_Win.zip" "https://nightly.link/SteamDeckHomebrew/decky-loader/workflows/build-win/main/PluginLoader%20Win.zip" && powershell -command "Expand-Archive -Path \'PluginLoader_Win.zip\' -DestinationPath \'.DeckyPluginLoader_Win\'" && del "PluginLoader_Win.zip" && echo Done! || echo Failed!'}),n.createElement(t.p,null,"Next, download the latest MHOnDeck UI Theme"),n.createElement("ul",{className:"link-box"},n.createElement(d,{item:c.rS,onClick:e.setDownload})),n.createElement(t.p,null,"OR"),n.createElement("ul",{className:"link-box"},n.createElement(d,{item:c.iv,onClick:e.setDownload}),n.createElement(d,{item:c.x4,onClick:e.setDownload})),n.createElement(t.p,null,'Alternatively, run the following command (downloads and unpacks the "MHOnDeck UI Theme" into your ',n.createElement(t.code,null,"%USERPROFILE%\\homebrew")," folder):"),n.createElement(o.Z,{copyCommand:'cd "%USERPROFILE%" && curl -L -o "homebrew.zip" "https://www.dropbox.com/scl/fi/uvj2y305tf4ftnlnbyldj/homebrew.zip?rlkey=ephy3vcmzc4nz8udum0lt4sih&dl=1" && powershell -command "Expand-Archive -Path \'homebrew.zip\' -DestinationPath \'.\'" && echo Done! || echo Failed!'}),n.createElement(t.p,null,"Next, open the folder: ",n.createElement(t.code,null,"Decky\\PluginLoader_Win")),n.createElement(t.p,null,"Run either ",n.createElement(t.code,null,"PluginLoader.exe")," or ",n.createElement(t.code,null,"PluginLoader_noconsole.exe")," (starts silently in the background)")),"\n",n.createElement("section",{className:"install finalizing"},n.createElement(t.h2,null,"Finalizing"),n.createElement(t.p,null,"Start Steam Big Picture Mode (Windows) or Gaming Mode (SteamOS)"),n.createElement(t.p,null,'Open the Quick Access Menu (QAM) using the "Ctrl + 2" keys (or the "..." button on Steam Deck)'),n.createElement(t.p,null,'Navigate to Decky (Plug icon) > "Decky Store" (top-right Shop-icon)'),n.createElement(t.p,null,'Search for and install "CSS Loader" and "Audio Loader"'),n.createElement(t.p,null,'Return to Decky > CSS Loader > Enable "MHOnDeck CSS Theme"'),n.createElement(t.p,null,'Return to Decky > Audio Loader > Enable "MHOnDeck SFX Pack"'),n.createElement(t.p,null,"Voila! You are now ready for the ultimate Monster Hunting experience!")),"\n",n.createElement("section",{className:"install uninstall"},n.createElement(t.h2,null,"Uninstalling"),n.createElement(t.h3,null,"MHOnDeck UI Theme"),n.createElement(t.p,null,"Delete the following folders:"),n.createElement(t.h4,null,"SteamOS"),n.createElement(t.ul,null,"\n",n.createElement(t.li,null,n.createElement(t.code,null,"/home/deck/homebrew/themes/MHOnDeck CSS Theme")),"\n",n.createElement(t.li,null,n.createElement(t.code,null,"/home/deck/homebrew/sounds/MHOnDeck SFX Pack")),"\n"),n.createElement(t.h4,null,"Windows"),n.createElement(t.ul,null,"\n",n.createElement(t.li,null,n.createElement(t.code,null,"%USERPROFILE%/homebrew/themes/MHOnDeck CSS Theme")),"\n",n.createElement(t.li,null,n.createElement(t.code,null,"%USERPROFILE%/homebrew/sounds/MHOnDeck SFX Pack")),"\n"),n.createElement(t.p,null,'Refresh "CSS Loader" and "Audio Loader" (or restart SteamOS/Big Picture Mode)'),n.createElement(t.h3,null,"Decky Loader"),n.createElement(t.h4,null,"SteamOS"),n.createElement(t.p,null,'Enter "Desktop Mode" > Konsole'),n.createElement(t.p,null,"Copy, paste, and hit Enter to run the uninstaller:"),n.createElement(o.Z,{copyCommand:"curl -L https://github.com/SteamDeckHomebrew/decky-installer/releases/latest/download/uninstall.sh | sh"}),n.createElement(t.p,null,"Alternatively, follow the steps indicated in the Decky Loader GitHub:"),n.createElement(t.p,null,n.createElement(t.a,{href:"https://github.com/SteamDeckHomebrew/decky-loader#user-content--uninstallation"},"https://github.com/SteamDeckHomebrew/decky-loader#user-content--uninstallation")),n.createElement(t.h4,null,"Windows"),n.createElement(t.p,null,'Download and run our (unofficial) "Decky Uninstaller" (as an Administrator):'),n.createElement("a",{className:"cta",href:"https://www.dropbox.com/scl/fi/58p983c1e4oedlsoor6ab/uninstall_decky.bat?rlkey=9fg3la7f04488q7vamuk6pzui&st=nd44krx2&dl=1",download:!0},"uninstall_decky.bat")))}var E=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,u.ah)(),e.components);return t?n.createElement(t,e,n.createElement(h,e)):h(e)};const p=()=>n.createElement(m.Z,{title:"MHOnDeck UI Theme"});var w=()=>{const{setShowModal:e,ModalComponent:t}=(0,i.e)(),{0:l,1:o}=(0,n.useState)(null);return n.createElement("main",{className:"standard-page"},n.createElement("section",{id:"hero",className:"theme-hero"},n.createElement(a.Z,null),n.createElement("h1",null,"UI Theme for Steam"),n.createElement("div",{className:"details"},n.createElement("div",{className:"detail"},n.createElement("strong",null,"Version"),n.createElement("p",null,"1.01.00")))),n.createElement("div",{className:"flex ui-theme-content"},n.createElement(E,{setDownload:t=>(o(t),void e(!0))})),n.createElement(r.Z,null),l&&n.createElement(t,{onExit:()=>{o(null),e(!1)}},n.createElement(s.Z,{downloadLink:l.url,title:l.title,fileSize:l.fileSize})))}},9495:function(e,t,l){t.Z=l.p+"static/logo-c32ff40a348958412acb39b922cc9e08.svg"},1151:function(e,t,l){l.d(t,{ah:function(){return o}});var n=l(7294);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}},4279:function(e){e.exports=JSON.parse('{"rS":{"title":"MHOnDeck UI Theme","url":"https://www.dropbox.com/scl/fi/uvj2y305tf4ftnlnbyldj/homebrew.zip?rlkey=ephy3vcmzc4nz8udum0lt4sih&dl=1","fileSize":"24.5 MB"},"iv":{"title":"MHOnDeck CSS Theme","url":"https://www.dropbox.com/scl/fi/ioke37637ajw4kqt31aje/MHOnDeck-CSS-Theme.zip?rlkey=o3r0odmq1zl48amf0lnxitgeu&dl=1","fileSize":"23.1 MB"},"x4":{"title":"MHOnDeck SFX Pack","url":"https://www.dropbox.com/scl/fi/i7c92ekrn7w55ozebmvt2/MHOnDeck-SFX-Pack.zip?rlkey=4rsnhjjs5jmm339rcfedcufo5&dl=1","fileSize":"1.32 MB"},"games":{"title":"Steam Grid Artwork","url":"https://www.dropbox.com/scl/fo/ss37zk1a7b2xdqa2ng8w0/APqros5Xgn7GWeNpIlUsNpw?rlkey=oh5k0dml8o39a485lik5pfj2b&st=ggheqpi1&dl=1","fileSize":"111 MB"}}')}}]);
//# sourceMappingURL=component---src-pages-ui-theme-js-79c2d6437caa3344e862.js.map