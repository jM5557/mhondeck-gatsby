"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[385],{7473:function(e,o,t){var n=t(1151),r=t(7294);t(5670);function l(e){const o=Object.assign({h3:"h3",ul:"ul",li:"li",p:"p",strong:"strong",code:"code"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(o.h3,null,"How to Customize Game Artwork"),"\n",r.createElement(o.ul,null,"\n",r.createElement(o.li,null,"\n",r.createElement(o.p,null,"Click the ",r.createElement(o.strong,null,"Download Pack")," button and unzip the pack somewhere onto your Steam Deck or Windows 10 or 11 device"),"\n"),"\n",r.createElement(o.li,null,"\n",r.createElement(o.p,null,"Prerequisite: Install ",r.createElement(o.strong,null,"Decky Loader")," and the ",r.createElement(o.strong,null,"SteamGridDB Plugin")),"\n"),"\n",r.createElement(o.li,null,"\n",r.createElement(o.p,null,r.createElement(o.strong,null,"Set Artwork"),":"),"\n",r.createElement(o.ul,null,"\n",r.createElement(o.li,null,"Visit Game Mode (on Steam Deck) or Big Picture Mode (on Windows)"),"\n",r.createElement(o.li,null,"Find the game in your Steam Library"),"\n",r.createElement(o.li,null,"From the game's page, navigate to ",r.createElement(o.code,null,"Settings > Change Artwork...")),"\n"),"\n",r.createElement(o.p,null,"This will open the SteamGridDB menu for the game."),"\n",r.createElement(o.ul,null,"\n",r.createElement(o.li,null,"Navigate to Manage (last tab) from the game's SteamGridDB menu"),"\n",r.createElement(o.li,null,"Click the Folder icon on each artwork type"),"\n",r.createElement(o.li,null,"Browse for your preferred artwork image"),"\n"),"\n"),"\n",r.createElement(o.li,null,"\n",r.createElement(o.p,null,r.createElement(o.strong,null,"Set Artwork (via Steam desktop app without Decky Loader)"),":"),"\n",r.createElement(o.ul,null,"\n",r.createElement(o.li,null,'Locate the game in your Steam Library from a Collection (or click "Uncategorized")'),"\n",r.createElement(o.li,null,"Right-click the game and select ",r.createElement(o.strong,null,"Manage")),"\n",r.createElement(o.li,null,"Choose ",r.createElement(o.strong,null,"Set Custom Artwork")),"\n",r.createElement(o.li,null,"For Non-Steam games, change the icon via ",r.createElement(o.strong,null,"Settings > Properties")),"\n"),"\n"),"\n"))}o.Z=function(e){void 0===e&&(e={});const{wrapper:o}=Object.assign({},(0,n.ah)(),e.components);return o?r.createElement(o,e,r.createElement(l,e)):l(e)}},1433:function(e,o,t){var n=t(7294);o.Z=e=>{let{textToCopy:o,className:t="cta",innerText:r="Copy",innerClickedText:l="Copied"}=e;const{0:i,1:g}=(0,n.useState)(!1);return n.createElement("button",{className:t,onClick:()=>{navigator.clipboard.writeText(o),g(!0),setTimeout((()=>g(!1)),4e3)}},i?l:r)}},5670:function(e,o,t){var n=t(7294),r=t(1433);o.Z=e=>{let{copyCommand:o,className:t=""}=e;return n.createElement("div",{className:t+" copy-wrapper space-between"},n.createElement("input",{type:"text",contentEditable:"false",value:o}),n.createElement(r.Z,{textToCopy:o,className:"cta small",innerText:"Copy"}))}},709:function(e,o,t){var n=t(7294);o.Z=e=>{let{downloadLink:o,title:t,fileSize:r}=e;const{0:l,1:i}=(0,n.useState)(5),{0:g,1:a}=(0,n.useState)(!0);(0,n.useEffect)((()=>{if(l>0&&g){const e=setTimeout((()=>{i((e=>e-1))}),1e3);return()=>clearTimeout(e)}0===l&&g&&(window.location.href=o)}),[l,g,o]);return n.createElement("div",{className:"download-window"},n.createElement("h3",null,"Download"),n.createElement("h2",null,t),n.createElement("p",null,"File Size: ",r),n.createElement("div",{className:"download-inner"},g?n.createElement(n.Fragment,null,l>0&&n.createElement("p",null,"Download starting in ",l," seconds..."),0===l&&n.createElement("p",null,"Download started...")):n.createElement("button",{type:"button",className:"cta",onClick:()=>{a(!0)}},"Download Now")))}},961:function(e,o,t){t.d(o,{e:function(){return l}});var n=t(7294);const r=e=>{let{children:o,className:t=""}=e;return n.createElement("div",{className:"modal "+t},o)},l=()=>{let{0:e,1:o}=(0,n.useState)(!1);return{showModal:e,setShowModal:o,ModalComponent:t=>{let{children:l,className:i,onExit:g}=t;const a=()=>{o(!1),g&&g()};return(0,n.useEffect)((()=>{const o=e=>{"Escape"===e.key&&a()},t=()=>{a(),window.history.pushState(null,null,window.location.href)};return window.addEventListener("keydown",o),window.addEventListener("popstate",t),e&&window.history.pushState(null,null,window.location.href),()=>{window.removeEventListener("keydown",o),window.removeEventListener("popstate",t),e&&window.history.back()}}),[e,o]),e?n.createElement(r,{className:i},l,n.createElement("button",{type:"button",onClick:a,className:"cta exit"},"Exit")):n.createElement(n.Fragment,null)}}}},1619:function(e,o,t){var n=t(7294),r=t(9495);o.Z=()=>n.createElement("footer",{id:"site-footer"},n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"https://reddit.com/u/jM5557"},"Reddit")),n.createElement("li",null,n.createElement("a",{href:"https://www.youtube.com/@MHOnDeck"},"YouTube")),n.createElement("li",null,n.createElement("a",{href:"mailto:mhondeck.site@gmail.com"},"Email"))),n.createElement("img",{alt:"Footer Logo",src:r.Z,id:"footer-logo"}),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"/faq"},"FAQ")),n.createElement("li",null,n.createElement("a",{href:"/resources"},"Resources")),n.createElement("li",null,n.createElement("a",{href:"https://store.steampowered.com"},"Steam"))))},7306:function(e,o,t){var n=t(7294),r=t(9495);o.Z=()=>n.createElement("nav",{id:"top-nav",className:"flex space-b align-c"},n.createElement("a",{href:"/",id:"main-logo"},n.createElement("img",{alt:"MHOnDeck Logo",src:r.Z}),n.createElement("span",{className:"hidden"},"MHOnDeck")),n.createElement("div",{className:"submenu flex space-b align-c"},n.createElement("li",null,n.createElement("a",{href:"/games"},"Games")),n.createElement("li",null,n.createElement("a",{href:"/videos"},"Videos")),n.createElement("li",null,n.createElement("a",{href:"/ui/theme"},"UI Theme"))))},9357:function(e,o,t){var n=t(7294),r=t(1883);o.Z=function(e){var o,t;let{description:l,title:i,children:g}=e;const{site:a}=(0,r.useStaticQuery)("63159454"),c=l||a.siteMetadata.description,p=null===(o=a.siteMetadata)||void 0===o?void 0:o.title;return n.createElement(n.Fragment,null,n.createElement("title",null,p?p+" | "+i:i),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:i}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(t=a.siteMetadata)||void 0===t?void 0:t.author)||""}),n.createElement("meta",{name:"twitter:title",content:i}),n.createElement("meta",{name:"twitter:description",content:c}),g)}},9495:function(e,o,t){o.Z=t.p+"static/logo-c32ff40a348958412acb39b922cc9e08.svg"},1151:function(e,o,t){t.d(o,{ah:function(){return l}});var n=t(7294);const r=n.createContext({});function l(e){const o=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}},1936:function(e){e.exports=JSON.parse('{"mh1":{"title":"Monster Hunter","platforms":["ps2"],"artwork":{"url":"https://www.dropbox.com/scl/fo/knkoby0f8dvyvsgz51k0o/AMfsaGbO1JGzXerSPT0Kvgk?rlkey=j3abn9xjx8rg6pi3duxp7h93u&st=g6rb6auj&dl=1","fileSize":"3.75 MB"}},"mh2":{"title":"Monster Hunter 2 (~dos)","platforms":["ps2"],"artwork":{"url":"https://www.dropbox.com/scl/fo/4ylo71zne2q25kmi5gp4z/AHbvR-paQq4wZJFzBDubcyQ?rlkey=64hnl8tzuafbb4degdos1e7mn&st=96eedai8&dl=1","fileSize":"1.46 MB"}},"mh3":{"title":"Monster Hunter 3 (~tri)","platforms":["wii"],"artwork":{"url":"https://www.dropbox.com/scl/fo/n5i04y26jc43et4nljp3c/ALHE4tMeAlImnRMTB7_LXnM?rlkey=iua6dapvsgu3a938auz2ph4v9&st=7ok02tz4&dl=1","fileSize":"7.62 MB"}},"mh3u":{"title":"Monster Hunter 3 Ultimate","platforms":["wii","3ds"],"artwork":{"url":"https://www.dropbox.com/scl/fo/a0cn5hnbmhfk6oxr03ags/AObOM_SZ1bdcYJ5GHCHVihY?rlkey=6u1btqhomnkzwf5qb389hg99i&st=jkq4bj30&dl=1","fileSize":"6.10 MB"}},"mh4":{"title":"Monster Hunter 4","platforms":["3ds"],"artwork":{"url":"https://www.dropbox.com/scl/fo/di69jxgcafrcmi28mcxwj/ABUaR0wgn0T4Wy5eGwOhHjo?rlkey=tic263xhhzxsa593oromaajm3&st=xn41cdqi&dl=1","fileSize":"1.73 MB"}},"mh4u":{"title":"Monster Hunter 4 Ultimate","platforms":["3ds"],"artwork":{"url":"https://www.dropbox.com/scl/fo/6houzdz02y8dlkmzroqtx/AEcZqFgzz2DnbX80p1l7A28?rlkey=qoj6eer1p46q0im3pn4eqjc5a&st=urhl146a&dl=1","fileSize":"6.45 MB"}},"mhf1":{"title":"Monster Hunter Freedom","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/8e7oeo9fpo07t7sqrzudf/ACti6ueBWm08jVWV0d4uQ8Y?rlkey=hz32wozawbuexl4wu41scc7cw&st=b7hh811z&dl=1","fileSize":"5.21"}},"mhf2":{"title":"Monster Hunter Freedom 2","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/6u98qvx5m5bcnajwvdp0w/AA6R-cGhL5YXNyLls85Xh7Y?rlkey=redy3w8oirasb6y3u5r5ykoba&st=a0jniu31&dl=1","fileSize":"2.89 MB"}},"mhfu":{"title":"Monster Hunter Freedom Unite","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/3vr1ut5jq34rykr9ozfi4/AOhurYlRjSBQbc8IKptwS-c?rlkey=xldabszvdt07g3t4brkm3xsgc&st=dv4mae30&dl=1","fileSize":"16.3 MB"}},"mhg":{"title":"Monster Hunter G","platforms":["ps2","wii"],"artwork":{"url":"https://www.dropbox.com/scl/fo/pa0lphzq0m8awhmkroyfj/ALikR6EHd533PqxnXr9xeQM?rlkey=bdygyulwi30ssiq4gxf7g4o8q&st=zjgnou21&dl=1","fileSize":"4.65 MB"}},"mhgen":{"title":"Monster Hunter Generations","platforms":["3ds"],"artwork":{"url":"https://www.dropbox.com/scl/fo/nyamndi6ps7ocilska25p/AFjJDOAi6iJ5j0mZF3HxZS4?rlkey=j6l9rmndjjxs63cxl8ojrxwa5&st=llq4qnpa&dl=1","fileSize":"3.88 MB"}},"mhgu":{"title":"Monster Hunter Generations Ultimate","platforms":["switch"],"artwork":{"url":"https://www.dropbox.com/scl/fo/988wbbzue8va2626hfccl/AF9CoEj7mXhd0ymttDBkD10?rlkey=o09ja9358coliepny5ilcc90u&st=xbsbiqpn&dl=1","fileSize":"3.95 MB"}},"mhp1":{"title":"Monster Hunter Portable","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/ai93h4vlczi3x6autxx75/AMMdA7kMpxK3tTalH6vrje4?rlkey=w3z4ore2n5r7imecs48is2xli&st=0pexkrgl&dl=1","fileSize":"3.92 MB"}},"mhp2":{"title":"Monster Hunter Portable 2nd","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/kiyde4z6etn9awtwveert/AL3eETnrdHv89trCskrA5cc?rlkey=qrg54tbfwf526wtmilrs7uiam&st=soxm6xur&dl=1","fileSize":"1.65 MB"}},"mhp2g":{"title":"Monster Hunter Portable 2nd G","platforms":["psp","ios"],"artwork":{"url":"https://www.dropbox.com/scl/fo/t1ws0c39ul8vypjtcu5bz/AKBI7BRQEgsmZWVBXGWZdSc?rlkey=zfpzfi5ko6gy836k43fcfa7gp&st=jivvqz3j&dl=1","fileSize":"1.64 MB"}},"mhp3rd":{"title":"Monster Hunter Portable 3rd","platforms":["psp","ps3"],"artwork":{"url":"https://www.dropbox.com/scl/fo/pn9dav9eoeotyd0p5niug/AKJOotgpcb0U2a2jsvuW2uw?rlkey=mxy13075f1gdv3lh791odfpw8&st=sif2he2u&dl=1","fileSize":"4.94 MB"}},"mhx":{"title":"Monster Hunter X (Cross)","platforms":["3ds","switch"],"artwork":{"url":"https://www.dropbox.com/scl/fo/enular7b0uw3x9xpuq9ua/ANZ3ceUEfKiykDx9AjaCeUY?rlkey=avnyvr9y1sv54n4k4qj28hprk&st=fu0l1oc4&dl=1","fileSize":"3.00 MB"}},"mhxx":{"title":"Monster Hunter XX (Double Cross)","platforms":["3ds","switch"],"artwork":{"url":"https://www.dropbox.com/scl/fo/iod4kl5p0kmiuawioewsb/AFoM8_pBYTRHlD_wAU88Vnw?rlkey=w7pt6gnudieoxbvrnrth2xjfz&st=75d51vo2&dl=1","fileSize":"6.53 MB"}},"mhrise":{"title":"Monster Hunter Rise","platforms":["switch","pc"],"artwork":{"url":"https://www.dropbox.com/scl/fo/hu3hs262x9sfqmmj5lcng/ALrFZH5qkhWHd36E1MMego8?rlkey=zbeaio007u3ocya7tmhxnrw7j&st=zzh8pz1n&dl=1","fileSize":"2.32 MB"}},"mhst":{"title":"Monster Hunter Stories","platforms":["3ds","switch","pc"],"artwork":{"url":"https://www.dropbox.com/scl/fo/okbxoeizixo1lzx4evrzn/AC82uQt2PNJ0nCfsqy3xl_4?rlkey=qoy8frpib2u8bsiv93eajkd4n&st=z4i3sh7b&dl=1","fileSize":"3.00 MB"}},"mhdiary":{"title":"Monster Hunter Diary: Poka Poka Felyne Village","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/y7kyr6rqfb2pgn4gr6j2x/AMqtSb0LKrhAcjkH4fczNrQ?rlkey=1m04edagky1h1pbdbn1a1xyj3&st=aw5u9234&dl=1","fileSize":"2.25 MB"}},"mhdiaryg":{"title":"Monster Hunter Diary: Poka Poka Felyne Village G","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/oq2oqz6yuruwroxrfr363/AOqovlnC5M-O274Ec1GQKHM?rlkey=cjo301z901k38gqoi3taxhq7z&st=gf2sntyh&dl=1","fileSize":"2.92 MB"}},"mhdiarydx":{"title":"Monster Hunter Diary: Poka Poka Felyne Village DX","platforms":["3ds"],"artwork":{"url":"https://www.dropbox.com/scl/fo/dxcgpj998nnk1x5snv0dh/AGRZ8xrHzUz1sxHYDPiMSaU?rlkey=fwqgke1etuu0rq784kpq3v0j0&st=pde70g5t&dl=1","fileSize":"1.44 MB"}},"airoupuzzle":{"title":"Airou Puzzle","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/hjoqjvj150flvzs5hmqrm/AKLt0E3JR8SkQG_umATSrHI?rlkey=cs39alzd05jg36yfstgpg9zzy&st=znp77nlj&dl=1","fileSize":"1.80 MB"}},"mhpuzzles":{"title":"Monster Hunter Puzzles - Felyne Isles","platforms":["ios","android"],"artwork":{"url":"https://www.dropbox.com/scl/fo/51g0mg87n7e5im1bsab26/APW9yNPbNlE-bJ5NIz3-Qek?rlkey=1qvtmrd249rs0pfdkm52w3qxj&st=8rzeuymv&dl=1","fileSize":"1.39 MB"}}}')},5877:function(e){e.exports=JSON.parse('{"airoupuzzle":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]},"mh1":{"demo":{"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.png"],"icon":["icon.png"],"logo":["logo.png"]},"mh2":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mh3":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-192.png","icon.png"],"logo":["logo-2.png","logo.png"]},"mh3g":{"3ds":{"demo":{"grid":["grid.png"],"logo":["logo-2.png"]},"grid":["grid.png"],"hero":["hero.png"],"icon":["icon.png"],"logo":["logo.png"]},"wiiu":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.png"],"icon":["icon.png"],"logo":["logo.png"]}},"mh3u":{"3ds":{"demo":{"grid":["grid.png"],"icon":["icon.png"],"logo":["logo.png"]},"grid":["grid.png"],"icon":["icon.png"],"logo":["logo.png"]},"wiiu":{"demo":{"grid":["grid.png"],"icon":["icon.png"],"logo":["logo.png"]},"grid":["grid.png"],"icon":["icon.png"],"logo":["logo.png"]}},"mh4":{"demo":{"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo-2.png","logo.png"]},"mh4g":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mh4u":{"demo":{"grid":["grid.png"],"icon":["icon.png"],"logo":["logo.png"]},"grid":["grid-2.png","grid.png"],"hero":["hero.jpg"],"icon":["icon-2.png","icon.png"],"logo":["logo.png"]},"mhdiary":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]},"mhdiarydx":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mhdiaryg":{"grid":["grid-2.png","grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]},"mhf1":{"grid":["grid-2.png","grid-3.png","grid.png"],"hero":["hero.png"],"icon":["icon-144.PNG","icon.PNG"],"logo":["logo-2.png","logo.png"]},"mhf2":{"grid":["grid-2.png","grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]},"mhfu":{"demo":{"grid":["grid-2.png"],"logo":["logo-2.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo-2.png","logo-3.png","logo.png"]},"mhg":{"ps2":{"grid":["grid.png"],"hero":["hero.png"],"icon":["icon.png"],"logo":["logo.png"]},"wii":{"grid":["grid.png"],"hero":["hero-2.jpg","hero.jpg"],"icon":["icon-192.png","icon.png"],"logo":["logo.png"]}},"mhgen":{"demo":{"icon":["icon-2.png","icon.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mhgu":{"demo":{"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"logo":["logo.png"]},"mhp1":{"grid":["grid.png"],"hero":["hero-2.png","hero.png"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]},"mhp2":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mhp2g":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-2-144.png","icon-2.png","icon.png"],"logo":["logo.png"]},"mhp3rd":{"ps3":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"psp":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]}},"mhrise":{"grid":["grid-2.jpg"],"hero":["hero.png"]},"mhst":{"3ds":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-2.png","icon.png"],"logo":["logo.png"]},"mobile":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]}},"mhx":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mhxx":{"3ds":{"demo":{"grid":["grid.png"],"icon":["icon.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-2.png","icon.png"],"logo":["logo.png"]},"switch":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]}},"mhpuzzles":{"v1.01.00":{"icon":["icon.png"]},"v2.00.02":{"icon":["icon.png"],"grid":["grid.png"]},"v2.02.00":{"hero":["hero.png"]},"logo":["logo.png"]}}')}}]);
//# sourceMappingURL=0f143b6cc7fab57e053bb2f0fa9d708bc01e226d-5a8b230580a0737da0cf.js.map