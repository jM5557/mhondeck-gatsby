"use strict";(self.webpackChunkMHOnDeck=self.webpackChunkMHOnDeck||[]).push([[7],{1433:function(e,t,n){var l=n(7294);t.Z=e=>{let{textToCopy:t,className:n="cta",innerText:a="Copy",innerClickedText:c="Copied"}=e;const{0:o,1:r}=(0,l.useState)(!1);return l.createElement("button",{className:n,onClick:()=>{navigator.clipboard.writeText(t),r(!0),setTimeout((()=>r(!1)),4e3)}},o?c:a)}},5670:function(e,t,n){var l=n(7294),a=n(1433);t.Z=e=>{let{copyCommand:t,className:n=""}=e;return l.createElement("div",{className:n+" copy-wrapper space-between"},l.createElement("input",{type:"text",contentEditable:"false",value:t}),l.createElement(a.Z,{textToCopy:t,className:"cta small",innerText:"Copy"}))}},709:function(e,t,n){var l=n(7294);t.Z=e=>{let{downloadLink:t,title:n,fileSize:a}=e;const{0:c,1:o}=(0,l.useState)(5),{0:r,1:m}=(0,l.useState)(!0);(0,l.useEffect)((()=>{if(c>0&&r){const e=setTimeout((()=>{o((e=>e-1))}),1e3);return()=>clearTimeout(e)}0===c&&r&&(window.location.href=t)}),[c,r,t]);return l.createElement("div",{className:"download-window"},l.createElement("h3",null,"Download"),l.createElement("h2",null,n),l.createElement("p",null,"File Size: ",a),l.createElement("div",{className:"download-inner"},r?l.createElement(l.Fragment,null,c>0&&l.createElement("p",null,"Download starting in ",c," seconds..."),0===c&&l.createElement("p",null,"Download started...")):l.createElement("button",{type:"button",className:"cta",onClick:()=>{m(!0)}},"Download Now")))}},961:function(e,t,n){n.d(t,{e:function(){return c}});var l=n(7294);const a=e=>{let{children:t,className:n=""}=e;return l.createElement("div",{className:"modal "+n},t)},c=()=>{let{0:e,1:t}=(0,l.useState)(!1);return{showModal:e,setShowModal:t,ModalComponent:n=>{let{children:c,className:o,onExit:r}=n;const m=()=>{t(!1),r&&r()};return(0,l.useEffect)((()=>{const t=e=>{"Escape"===e.key&&m()},n=()=>{m(),window.history.pushState(null,null,window.location.href)};return window.addEventListener("keydown",t),window.addEventListener("popstate",n),e&&window.history.pushState(null,null,window.location.href),()=>{window.removeEventListener("keydown",t),window.removeEventListener("popstate",n),e&&window.history.back()}}),[e,t]),e?l.createElement(a,{className:o},c,l.createElement("button",{type:"button",onClick:m,className:"cta exit"},"Exit")):l.createElement(l.Fragment,null)}}}},1619:function(e,t,n){var l=n(7294),a=n(1019);t.Z=()=>l.createElement("footer",{id:"site-footer"},l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://reddit.com/u/jM5557"},"Reddit")),l.createElement("li",null,l.createElement("a",{href:"https://www.youtube.com/@MHOnDeck"},"YouTube")),l.createElement("li",null,l.createElement("a",{href:"mailto:mhondeck.site@gmail.com"},"Email"))),l.createElement("img",{alt:"Footer Logo",src:a.Z,id:"footer-logo"}),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"/faq"},"FAQ")),l.createElement("li",null,l.createElement("a",{href:"/resources"},"Resources")),l.createElement("li",null,l.createElement("a",{href:"https://store.steampowered.com"},"Steam"))))},7306:function(e,t,n){var l=n(7294),a=n(1019);t.Z=()=>l.createElement("nav",{id:"top-nav",className:"flex space-b align-c"},l.createElement("a",{href:"/",id:"main-logo"},l.createElement("img",{alt:"MHOnDeck Logo",src:a.Z}),l.createElement("span",{className:"hidden"},"MHOnDeck")),l.createElement("div",{className:"submenu flex space-b align-c"},l.createElement("li",null,l.createElement("a",{href:"/games"},"Games")),l.createElement("li",null,l.createElement("a",{href:"/videos"},"Videos")),l.createElement("li",null,l.createElement("a",{href:"/ui/theme"},"UI Theme"))))},9357:function(e,t,n){var l=n(7294),a=n(1883);t.Z=function(e){var t,n;let{description:c,title:o,children:r}=e;const{site:m}=(0,a.useStaticQuery)("63159454"),i=c||m.siteMetadata.description,s=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,s?s+" | "+o:o),l.createElement("meta",{name:"description",content:i}),l.createElement("meta",{property:"og:title",content:o}),l.createElement("meta",{property:"og:description",content:i}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n?void 0:n.author)||""}),l.createElement("meta",{name:"twitter:title",content:o}),l.createElement("meta",{name:"twitter:description",content:i}),r)}},1388:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return D}});var l=n(7294),a=n(7306),c=n(1619),o=n(9357),r=n(961),m=n(709),i=n(1151),s=n(5670);var u=e=>{let{item:t,onClick:n}=e;return l.createElement("li",null,t.title,l.createElement("button",{type:"button",className:"cta",onClick:()=>n(t)},"Download"))},d=n(4279);function E(e){const t=Object.assign({p:"p",strong:"strong",code:"code"},(0,i.ah)(),e.components);return l.createElement("div",{className:"note"},l.createElement(t.p,null,l.createElement(t.strong,null,"Note:"),' If you see a prompt saying "Windows protected Your PC" when running any *.bat script provided, click:'),l.createElement(t.p,null,l.createElement(t.code,null,"More info > Run anyway")),l.createElement(t.p,null,"To view the contents of each *.bat script, right-click > Edit"))}var h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?l.createElement(t,e,l.createElement(E,e)):E(e)};function p(e){const t=Object.assign({h3:"h3",h4:"h4",p:"p",strong:"strong",code:"code",em:"em"},(0,i.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h3,null,"On Windows 10/11"),"\n",l.createElement("div",{className:"prereq"},l.createElement(t.h4,null,"Prerequisite"),l.createElement(t.p,null,"Install ",l.createElement(t.strong,null,"Decky Loader")," (Plugin utility):"),l.createElement("br"),l.createElement("a",{className:"cta",href:"https://www.dropbox.com/scl/fi/7jfv18iiwxph38mohjhlw/decky.bat?rlkey=xyhlm295qo5yoxhioiu5dmev1&st=p01j9sm5&dl=1",download:!0},"decky.bat"),l.createElement(t.p,null,'Once downloaded, right-click > "Run as Administrator" to install')),"\n",l.createElement(h),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.h4,null,"Quick Setup"),"\n",l.createElement(t.p,null,'Download the following "MHOnDeck UI Theme" installer:'),"\n",l.createElement("a",{className:"cta",href:"https://www.dropbox.com/scl/fi/b44a572qy22dz7uwumc9q/theme.bat?rlkey=vwl24wq5u6ctb9hfvmidmakyh&st=oy9kfteg&dl=0",download:!0},"theme.bat"),"\n",l.createElement(t.p,null,'Right-click and "Run as Administrator"'),"\n",l.createElement(t.p,null,"Follow the onscreen prompts (hit Enter to use default file/folder paths)"),"\n",l.createElement(t.p,null,"Once the installation completes, the folder at ",l.createElement(t.code,null,"Decky\\PluginLoader_Win")," will open"),"\n",l.createElement(t.p,null,"Run either ",l.createElement(t.code,null,"PluginLoader.exe")," or ",l.createElement(t.code,null,"PluginLoader_noconsole.exe")," (starts silently in the background)"),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.h4,null,"Manual Setup"),"\n",l.createElement(t.p,null,"Navigate to your Steam installation location and create a blank file with the following name:"),"\n",l.createElement(s.Z,{copyCommand:".cef-enable-remote-debugging"}),"\n",l.createElement(t.p,null,'Make sure "File name extensions" is checked off at the top of the File Explorer under the "View" tab'),"\n",l.createElement(t.p,null,"Alternatively, open the command prompt at this location and run:"),"\n",l.createElement(s.Z,{copyCommand:'type nul > ".cef-enable-remote-debugging"'}),"\n",l.createElement(t.p,null,"This enables CEF Remote Debugging and is ",l.createElement(t.em,null,"required")),"\n",l.createElement(t.p,null,"Next, copy and run the following command to setup Decky Loader (default location: Documents\\Decky\\PluginLoader_Win):"),"\n",l.createElement(s.Z,{copyCommand:'cd %USERPROFILE%Documents && curl -L -o "PluginLoader_Win.zip" "https://nightly.link/SteamDeckHomebrew/decky-loader/workflows/build-win/main/PluginLoader%20Win.zip" && powershell -command "Expand-Archive -Path \'PluginLoader_Win.zip\' -DestinationPath \'.DeckyPluginLoader_Win\'" && del "PluginLoader_Win.zip" && echo Done! || echo Failed!'}),"\n",l.createElement(t.p,null,"Next, download the latest MHOnDeck UI Theme"),"\n",l.createElement("ul",{className:"link-box"},l.createElement(u,{item:d.rS,onClick:e.setDownload})),"\n",l.createElement(t.p,null,"OR"),"\n",l.createElement("ul",{className:"link-box"},l.createElement(u,{item:d.iv,onClick:e.setDownload}),l.createElement(u,{item:d.x4,onClick:e.setDownload})),"\n",l.createElement(t.p,null,'Alternatively, run the following command (downloads and unpacks the "MHOnDeck UI Theme" into your ',l.createElement(t.code,null,"%USERPROFILE%\\homebrew")," folder):"),"\n",l.createElement(s.Z,{copyCommand:'cd "%USERPROFILE%" && curl -L -o "homebrew.zip" "https://www.dropbox.com/scl/fi/uvj2y305tf4ftnlnbyldj/homebrew.zip?rlkey=ephy3vcmzc4nz8udum0lt4sih&dl=1" && powershell -command "Expand-Archive -Path \'homebrew.zip\' -DestinationPath \'.\'" && echo Done! || echo Failed!'}),"\n",l.createElement(t.p,null,"Next, open the folder: ",l.createElement(t.code,null,"Decky\\PluginLoader_Win")),"\n",l.createElement(t.p,null,"Run either ",l.createElement(t.code,null,"PluginLoader.exe")," or ",l.createElement(t.code,null,"PluginLoader_noconsole.exe")," (starts silently in the background)"))}var w=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?l.createElement(t,e,l.createElement(p,e)):p(e)};function k(e){const t=Object.assign({h3:"h3",h4:"h4",p:"p",strong:"strong",a:"a",code:"code"},(0,i.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h3,null,"On SteamOS"),"\n",l.createElement("div",{className:"prereq"},l.createElement(t.h4,null,"Prerequisite"),l.createElement(t.p,null,'Enter "Desktop Mode"'),l.createElement(t.p,null,"Open the Konsole app (Start Menu > System)"),l.createElement(t.p,null,"Install ",l.createElement(t.strong,null,"Decky Loader")," (Plugin utility):"),l.createElement(s.Z,{copyCommand:"curl -L https://github.com/SteamDeckHomebrew/decky-installer/releases/latest/download/install_release.sh | sh"}),l.createElement(t.p,null,"Copy the command above, paste into the Konsole, and hit Enter to install"),l.createElement(t.p,null,"Alternatively, follow the steps from the Decky Loader GitHub:"),l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/SteamDeckHomebrew/decky-loader#user-content--installation"},"https://github.com/SteamDeckHomebrew/decky-loader#user-content--installation"))),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.h4,null,"Quick Setup"),"\n",l.createElement(t.p,null,'"MHOnDeck UI Theme" Installer:'),"\n",l.createElement(s.Z,{copyCommand:"wget -N -P /home/deck https://www.dropbox.com/scl/fi/uvj2y305tf4ftnlnbyldj/homebrew.zip?rlkey=ephy3vcmzc4nz8udum0lt4sih&dl=1 && unzip -o -d /home/deck /home/deck/homebrew"}),"\n",l.createElement(t.p,null,"Copy and paste onto the Konsole and hit Enter"),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.h4,null,"Manual Setup"),"\n",l.createElement(t.p,null,'Download the "MHOnDeck UI Theme":'),"\n",l.createElement("ul",{className:"link-box"},l.createElement(u,{item:d.rS,onClick:e.setDownload})),"\n",l.createElement(t.p,null,"OR"),"\n",l.createElement("ul",{className:"link-box"},l.createElement(u,{item:d.iv,onClick:e.setDownload}),l.createElement(u,{item:d.x4,onClick:e.setDownload})),"\n",l.createElement(t.p,null,"Right-click and extract the contents of the downloaded file into the following folder:"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"/home/deck/homebrew")),"\n",l.createElement(t.p,null,"The final result should look like:"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"/home/deck/homebrew/sounds")," and ",l.createElement(t.code,null,"/home/deck/homebrew/themes")))}var f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?l.createElement(t,e,l.createElement(k,e)):k(e)};function b(e){const t=Object.assign({h2:"h2",p:"p"},(0,i.ah)(),e.components);return l.createElement("section",{className:"install finalizing"},l.createElement(t.h2,null,"Finalizing"),l.createElement(t.p,null,"Start Steam Big Picture Mode (Windows) or Gaming Mode (SteamOS)"),l.createElement(t.p,null,'Open the Quick Access Menu (QAM) using the "Ctrl + 2" keys (or the "..." button on Steam Deck)'),l.createElement(t.p,null,'Navigate to Decky (Plug icon) > "Decky Store" (top-right Shop-icon)'),l.createElement(t.p,null,'Search for and install "CSS Loader" and "Audio Loader"'),l.createElement(t.p,null,'Return to Decky > CSS Loader > Enable "MHOnDeck CSS Theme"'),l.createElement(t.p,null,'Return to Decky > Audio Loader > Enable "MHOnDeck SFX Pack"'),l.createElement(t.p,null,"Voila! You are now ready for the ultimate Monster Hunting experience!"))}var g=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?l.createElement(t,e,l.createElement(b,e)):b(e)};function y(e){const t=Object.assign({h2:"h2",h3:"h3",p:"p",h4:"h4",ul:"ul",li:"li",code:"code",a:"a"},(0,i.ah)(),e.components);return l.createElement("section",{className:"install uninstall"},l.createElement(t.h2,null,"Uninstall"),l.createElement(t.h3,null,"MHOnDeck UI Theme"),l.createElement(t.p,null,"Delete the following folders:"),l.createElement(t.h4,null,"SteamOS"),l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"/home/deck/homebrew/themes/MHOnDeck CSS Theme")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"/home/deck/homebrew/sounds/MHOnDeck SFX Pack")),"\n"),l.createElement(t.h4,null,"Windows"),l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"%USERPROFILE%/homebrew/themes/MHOnDeck CSS Theme")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"%USERPROFILE%/homebrew/sounds/MHOnDeck SFX Pack")),"\n"),l.createElement(t.p,null,'Refresh "CSS Loader" and "Audio Loader" (or restart SteamOS/Big Picture Mode)'),l.createElement("br"),l.createElement("br"),l.createElement(t.h3,null,"Decky Loader"),l.createElement(t.h4,null,"SteamOS"),l.createElement(t.p,null,'Enter "Desktop Mode" > Konsole'),l.createElement(t.p,null,"Copy, paste, and hit Enter to run the uninstaller:"),l.createElement(s.Z,{copyCommand:"curl -L https://github.com/SteamDeckHomebrew/decky-installer/releases/latest/download/uninstall.sh | sh"}),l.createElement(t.p,null,"Alternatively, follow the steps indicated in the Decky Loader GitHub:"),l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/SteamDeckHomebrew/decky-loader#user-content--uninstallation"},"https://github.com/SteamDeckHomebrew/decky-loader#user-content--uninstallation")),l.createElement(t.h4,null,"Windows"),l.createElement(t.p,null,'Download and run our (unofficial) "Decky Uninstaller" (as an Administrator):'),l.createElement("a",{className:"cta",href:"https://www.dropbox.com/scl/fi/58p983c1e4oedlsoor6ab/uninstall_decky.bat?rlkey=9fg3la7f04488q7vamuk6pzui&st=nd44krx2&dl=1",download:!0},"uninstall_decky.bat"))}var S=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?l.createElement(t,e,l.createElement(y,e)):y(e)};const v=()=>l.createElement(o.Z,{title:"MHOnDeck UI Theme"});var D=()=>{const{setShowModal:e,ModalComponent:t}=(0,r.e)(),{0:n,1:o}=(0,l.useState)(null),i=t=>{o(t),e(!0)},{0:s,1:u}=(0,l.useState)("STEAMOS");return l.createElement("main",{className:"standard-page"},l.createElement("section",{id:"hero",className:""},l.createElement(a.Z,null),l.createElement("h1",null,"MHOnDeck UI Theme"),l.createElement("h2",null,"Contains a visual UI overhaul theme and a Sound FX replacement pack"),l.createElement("div",{className:"details"},l.createElement("div",{className:"detail"},l.createElement("strong",null,"Version"),l.createElement("p",null,"1.01.00")))),l.createElement("div",{className:"ui-theme-content"},l.createElement("section",{className:"install per-platform"},l.createElement("h2",{className:"flex space-b align-c with-tabs"},l.createElement("span",null,"Installation"),l.createElement("div",{className:"flex space-b"},l.createElement("button",{type:"button",onClick:()=>u("STEAMOS"),className:"STEAMOS"===s?"cta":"cta secondary"},"SteamOS"),l.createElement("button",{type:"button",onClick:()=>u("WINDOWS"),className:"WINDOWS"===s?"cta":"cta secondary"},"Windows"))),"STEAMOS"===s?l.createElement(f,{setDownload:e=>i(e)}):l.createElement(w,{setDownload:e=>i(e)})),l.createElement(g,null),l.createElement(S,null)),l.createElement(c.Z,null),n&&l.createElement(t,{onExit:()=>{o(null),e(!1)}},l.createElement(m.Z,{downloadLink:n.url,title:n.title,fileSize:n.fileSize})))}},1019:function(e,t,n){t.Z=n.p+"static/logo-85bf71a1b46c53d7c97e9df3f566e34b.svg"},1151:function(e,t,n){n.d(t,{ah:function(){return c}});var l=n(7294);const a=l.createContext({});function c(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}},4279:function(e){e.exports=JSON.parse('{"rS":{"title":"MHOnDeck UI Theme","url":"https://www.dropbox.com/scl/fi/uvj2y305tf4ftnlnbyldj/homebrew.zip?rlkey=ephy3vcmzc4nz8udum0lt4sih&dl=1","fileSize":"24.5 MB"},"iv":{"title":"MHOnDeck CSS Theme","url":"https://www.dropbox.com/scl/fi/ioke37637ajw4kqt31aje/MHOnDeck-CSS-Theme.zip?rlkey=o3r0odmq1zl48amf0lnxitgeu&dl=1","fileSize":"23.1 MB"},"x4":{"title":"MHOnDeck SFX Pack","url":"https://www.dropbox.com/scl/fi/i7c92ekrn7w55ozebmvt2/MHOnDeck-SFX-Pack.zip?rlkey=4rsnhjjs5jmm339rcfedcufo5&dl=1","fileSize":"1.32 MB"},"games":{"title":"Steam Grid Artwork","url":"https://www.dropbox.com/scl/fo/ss37zk1a7b2xdqa2ng8w0/APqros5Xgn7GWeNpIlUsNpw?rlkey=oh5k0dml8o39a485lik5pfj2b&st=ggheqpi1&dl=1","fileSize":"111 MB"}}')}}]);
//# sourceMappingURL=component---src-pages-ui-theme-js-864feb4e11b2f636d72e.js.map