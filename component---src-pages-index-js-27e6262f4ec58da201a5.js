"use strict";(self.webpackChunkMHOnDeck=self.webpackChunkMHOnDeck||[]).push([[678],{9419:function(e,o,r){r.d(o,{Z:function(){return g}});var t=r(7294),n=r(5877);var l=e=>{let{gameData:o,id:r,className:n="",renderTagType:l="img"}=e;const g=(e,t)=>{if(null!=o&&o.grid&&o.grid.length>0)return{image:o.grid[0],path:"/images/gallery/"+r+"/"+o.grid[0]};for(const o of Object.keys(null!=e?e:{}))if("object"==typeof e[o]&&!Array.isArray(e[o])){if(e[o].grid&&e[o].grid.length>0)return{image:e[o].grid[0],path:"/images/gallery/"+t+"/"+o+"/"+e[o].grid[0]};const r=g(e[o],t+"/"+o);if(r)return r}return null},i=g(o,r),p=i?i.path:null;if("img"!==l)return t.createElement("div",{className:n,style:p?{backgroundImage:"url("+p+")",backgroundSize:"cover"}:{}})};var g=e=>{let{games:o}=e;return t.createElement(t.Fragment,null,o.map(((e,o)=>{let[r,g]=e;const i=n[r],p=r;return t.createElement("a",{key:o,href:"/games/"+p,className:"game-thumb"},t.createElement(l,{gameData:i,id:p,className:"img-wrapper",renderTagType:"div"}),t.createElement("small",null,g.title))})))}},1619:function(e,o,r){var t=r(7294),n=r(1019);o.Z=()=>t.createElement("footer",{id:"site-footer"},t.createElement("ul",null,t.createElement("li",null,t.createElement("a",{href:"https://reddit.com/u/jM5557"},"Reddit")),t.createElement("li",null,t.createElement("a",{href:"https://www.youtube.com/@MHOnDeck"},"YouTube")),t.createElement("li",null,t.createElement("a",{href:"mailto:mhondeck.site@gmail.com"},"Email"))),t.createElement("img",{alt:"Footer Logo",src:n.Z,id:"footer-logo"}),t.createElement("ul",null,t.createElement("li",null,t.createElement("a",{href:"/faq"},"FAQ")),t.createElement("li",null,t.createElement("a",{href:"/resources"},"Resources")),t.createElement("li",null,t.createElement("a",{href:"https://store.steampowered.com"},"Steam"))))},7306:function(e,o,r){var t=r(7294),n=r(1019);o.Z=()=>t.createElement("nav",{id:"top-nav",className:"flex space-b align-c"},t.createElement("a",{href:"/",id:"main-logo"},t.createElement("img",{alt:"MHOnDeck Logo",src:n.Z}),t.createElement("span",{className:"hidden"},"MHOnDeck")),t.createElement("div",{className:"submenu flex space-b align-c"},t.createElement("li",null,t.createElement("a",{href:"/games"},"Games")),t.createElement("li",null,t.createElement("a",{href:"/videos"},"Videos")),t.createElement("li",null,t.createElement("a",{href:"/ui/theme"},"UI Theme"))))},9357:function(e,o,r){var t=r(7294),n=r(1883);o.Z=function(e){var o,r;let{description:l,title:g,children:i}=e;const{site:p}=(0,n.useStaticQuery)("63159454"),a=l||p.siteMetadata.description,c=null===(o=p.siteMetadata)||void 0===o?void 0:o.title;return t.createElement(t.Fragment,null,t.createElement("title",null,c?c+" | "+g:g),t.createElement("meta",{name:"description",content:a}),t.createElement("meta",{property:"og:title",content:g}),t.createElement("meta",{property:"og:description",content:a}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:creator",content:(null===(r=p.siteMetadata)||void 0===r?void 0:r.author)||""}),t.createElement("meta",{name:"twitter:title",content:g}),t.createElement("meta",{name:"twitter:description",content:a}),i)}},8756:function(e,o,r){r.r(o),r.d(o,{default:function(){return s}});var t=r(7294),n=r.p+"static/bg-9e5ceaf1d451865aaf23213321d779e9.jpg",l=r.p+"static/hero-shot-28572d1290bd6f5f889b1f929d59b703.png",g=r(1619),i=r(7306),p=r(1936),a=r(9419),c=r(9357);function s(){const e=(e=>{const o=[];for(;o.length<4;){const r=Math.floor(Math.random()*e.length);o.includes(r)||o.push(r)}return o.map((o=>e[o]))})(Object.entries(p));return t.createElement("main",null,t.createElement("section",{id:"hero"},t.createElement(i.Z,null),t.createElement("div",{id:"featured-wrapper"},t.createElement("div",{id:"featured"},t.createElement("h1",null,"Monster Hunter UI Theme"),t.createElement("h2",null,"For Steam"),t.createElement("a",{href:"/ui/theme",className:"cta"},"Get Started")),t.createElement("img",{alt:"UI Theme",src:l,className:"hero-shot"}))),t.createElement("section",{id:"games"},t.createElement("h5",null,"New"),t.createElement("h3",null,"Steam Grid Artwork"),t.createElement("div",{className:"flex space-s align-s"},t.createElement(a.Z,{games:e}),t.createElement("a",{href:"/games",className:"cta secondary"},"See All"))),t.createElement("section",{id:"videos"},t.createElement("div",{className:"preview"},t.createElement("div",{className:"thumb"},t.createElement("img",{alt:"Preview thumbnail",src:n})),t.createElement("div",{className:"description"},t.createElement("h5",null,"Featured"),t.createElement("h3",null,"Bootup Videos"),t.createElement("h4",null,"for Steam"),t.createElement("a",{href:"/videos",className:"cta"},"Browse")))),t.createElement(g.Z,null),t.createElement(c.Z,{title:"Monster Hunter UI Theme for Steam & More"}))}},1019:function(e,o,r){o.Z=r.p+"static/logo-85bf71a1b46c53d7c97e9df3f566e34b.svg"},1936:function(e){e.exports=JSON.parse('{"mh1":{"title":"Monster Hunter","platforms":["ps2"],"artwork":{"url":"https://www.dropbox.com/scl/fo/knkoby0f8dvyvsgz51k0o/AMfsaGbO1JGzXerSPT0Kvgk?rlkey=j3abn9xjx8rg6pi3duxp7h93u&st=g6rb6auj&dl=1","fileSize":"3.75 MB"}},"mh2":{"title":"Monster Hunter 2 (~dos)","platforms":["ps2"],"artwork":{"url":"https://www.dropbox.com/scl/fo/4ylo71zne2q25kmi5gp4z/AHbvR-paQq4wZJFzBDubcyQ?rlkey=64hnl8tzuafbb4degdos1e7mn&st=96eedai8&dl=1","fileSize":"1.46 MB"}},"mh3":{"title":"Monster Hunter 3 (~tri)","platforms":["wii"],"artwork":{"url":"https://www.dropbox.com/scl/fo/n5i04y26jc43et4nljp3c/ALHE4tMeAlImnRMTB7_LXnM?rlkey=iua6dapvsgu3a938auz2ph4v9&st=7ok02tz4&dl=1","fileSize":"7.62 MB"}},"mh3u":{"title":"Monster Hunter 3 Ultimate","platforms":["wii","3ds"],"artwork":{"url":"https://www.dropbox.com/scl/fo/a0cn5hnbmhfk6oxr03ags/AObOM_SZ1bdcYJ5GHCHVihY?rlkey=6u1btqhomnkzwf5qb389hg99i&st=jkq4bj30&dl=1","fileSize":"6.10 MB"}},"mh4":{"title":"Monster Hunter 4","platforms":["3ds"],"artwork":{"url":"https://www.dropbox.com/scl/fo/di69jxgcafrcmi28mcxwj/ABUaR0wgn0T4Wy5eGwOhHjo?rlkey=tic263xhhzxsa593oromaajm3&st=xn41cdqi&dl=1","fileSize":"1.73 MB"}},"mh4u":{"title":"Monster Hunter 4 Ultimate","platforms":["3ds"],"artwork":{"url":"https://www.dropbox.com/scl/fo/6houzdz02y8dlkmzroqtx/AEcZqFgzz2DnbX80p1l7A28?rlkey=qoj6eer1p46q0im3pn4eqjc5a&st=urhl146a&dl=1","fileSize":"6.45 MB"}},"mhf1":{"title":"Monster Hunter Freedom","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/8e7oeo9fpo07t7sqrzudf/ACti6ueBWm08jVWV0d4uQ8Y?rlkey=hz32wozawbuexl4wu41scc7cw&st=b7hh811z&dl=1","fileSize":"5.21"}},"mhf2":{"title":"Monster Hunter Freedom 2","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/6u98qvx5m5bcnajwvdp0w/AA6R-cGhL5YXNyLls85Xh7Y?rlkey=redy3w8oirasb6y3u5r5ykoba&st=a0jniu31&dl=1","fileSize":"2.89 MB"}},"mhfu":{"title":"Monster Hunter Freedom Unite","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/3vr1ut5jq34rykr9ozfi4/AOhurYlRjSBQbc8IKptwS-c?rlkey=xldabszvdt07g3t4brkm3xsgc&st=dv4mae30&dl=1","fileSize":"16.3 MB"}},"mhg":{"title":"Monster Hunter G","platforms":["ps2","wii"],"artwork":{"url":"https://www.dropbox.com/scl/fo/pa0lphzq0m8awhmkroyfj/ALikR6EHd533PqxnXr9xeQM?rlkey=bdygyulwi30ssiq4gxf7g4o8q&st=zjgnou21&dl=1","fileSize":"4.65 MB"}},"mhgen":{"title":"Monster Hunter Generations","platforms":["3ds"],"artwork":{"url":"https://www.dropbox.com/scl/fo/nyamndi6ps7ocilska25p/AFjJDOAi6iJ5j0mZF3HxZS4?rlkey=j6l9rmndjjxs63cxl8ojrxwa5&st=llq4qnpa&dl=1","fileSize":"3.88 MB"}},"mhgu":{"title":"Monster Hunter Generations Ultimate","platforms":["switch"],"artwork":{"url":"https://www.dropbox.com/scl/fo/988wbbzue8va2626hfccl/AF9CoEj7mXhd0ymttDBkD10?rlkey=o09ja9358coliepny5ilcc90u&st=xbsbiqpn&dl=1","fileSize":"3.95 MB"}},"mhp1":{"title":"Monster Hunter Portable","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/ai93h4vlczi3x6autxx75/AMMdA7kMpxK3tTalH6vrje4?rlkey=w3z4ore2n5r7imecs48is2xli&st=0pexkrgl&dl=1","fileSize":"3.92 MB"}},"mhp2":{"title":"Monster Hunter Portable 2nd","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/kiyde4z6etn9awtwveert/AL3eETnrdHv89trCskrA5cc?rlkey=qrg54tbfwf526wtmilrs7uiam&st=soxm6xur&dl=1","fileSize":"1.65 MB"}},"mhp2g":{"title":"Monster Hunter Portable 2nd G","platforms":["psp","ios"],"artwork":{"url":"https://www.dropbox.com/scl/fo/t1ws0c39ul8vypjtcu5bz/AKBI7BRQEgsmZWVBXGWZdSc?rlkey=zfpzfi5ko6gy836k43fcfa7gp&st=jivvqz3j&dl=1","fileSize":"1.64 MB"}},"mhp3rd":{"title":"Monster Hunter Portable 3rd","platforms":["psp","ps3"],"artwork":{"url":"https://www.dropbox.com/scl/fo/pn9dav9eoeotyd0p5niug/AKJOotgpcb0U2a2jsvuW2uw?rlkey=mxy13075f1gdv3lh791odfpw8&st=sif2he2u&dl=1","fileSize":"4.94 MB"}},"mhx":{"title":"Monster Hunter X (Cross)","platforms":["3ds","switch"],"artwork":{"url":"https://www.dropbox.com/scl/fo/enular7b0uw3x9xpuq9ua/ANZ3ceUEfKiykDx9AjaCeUY?rlkey=avnyvr9y1sv54n4k4qj28hprk&st=fu0l1oc4&dl=1","fileSize":"3.00 MB"}},"mhxx":{"title":"Monster Hunter XX (Double Cross)","platforms":["3ds","switch"],"artwork":{"url":"https://www.dropbox.com/scl/fo/iod4kl5p0kmiuawioewsb/AFoM8_pBYTRHlD_wAU88Vnw?rlkey=w7pt6gnudieoxbvrnrth2xjfz&st=75d51vo2&dl=1","fileSize":"6.53 MB"}},"mhrise":{"title":"Monster Hunter Rise","platforms":["switch","pc"],"artwork":{"url":"https://www.dropbox.com/scl/fo/hu3hs262x9sfqmmj5lcng/ALrFZH5qkhWHd36E1MMego8?rlkey=zbeaio007u3ocya7tmhxnrw7j&st=zzh8pz1n&dl=1","fileSize":"2.32 MB"}},"mhst":{"title":"Monster Hunter Stories","platforms":["3ds","switch","pc"],"artwork":{"url":"https://www.dropbox.com/scl/fo/okbxoeizixo1lzx4evrzn/AC82uQt2PNJ0nCfsqy3xl_4?rlkey=qoy8frpib2u8bsiv93eajkd4n&st=z4i3sh7b&dl=1","fileSize":"3.00 MB"}},"mhdiary":{"title":"Monster Hunter Diary: Poka Poka Felyne Village","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/y7kyr6rqfb2pgn4gr6j2x/AMqtSb0LKrhAcjkH4fczNrQ?rlkey=1m04edagky1h1pbdbn1a1xyj3&st=aw5u9234&dl=1","fileSize":"2.25 MB"}},"mhdiaryg":{"title":"Monster Hunter Diary: Poka Poka Felyne Village G","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/oq2oqz6yuruwroxrfr363/AOqovlnC5M-O274Ec1GQKHM?rlkey=cjo301z901k38gqoi3taxhq7z&st=gf2sntyh&dl=1","fileSize":"2.92 MB"}},"mhdiarydx":{"title":"Monster Hunter Diary: Poka Poka Felyne Village DX","platforms":["3ds"],"artwork":{"url":"https://www.dropbox.com/scl/fo/dxcgpj998nnk1x5snv0dh/AGRZ8xrHzUz1sxHYDPiMSaU?rlkey=fwqgke1etuu0rq784kpq3v0j0&st=pde70g5t&dl=1","fileSize":"1.44 MB"}},"airoupuzzle":{"title":"Airou Puzzle","platforms":["psp"],"artwork":{"url":"https://www.dropbox.com/scl/fo/hjoqjvj150flvzs5hmqrm/AKLt0E3JR8SkQG_umATSrHI?rlkey=cs39alzd05jg36yfstgpg9zzy&st=znp77nlj&dl=1","fileSize":"1.80 MB"}},"mhpuzzles":{"title":"Monster Hunter Puzzles - Felyne Isles","platforms":["ios","android"],"artwork":{"url":"https://www.dropbox.com/scl/fo/51g0mg87n7e5im1bsab26/APW9yNPbNlE-bJ5NIz3-Qek?rlkey=1qvtmrd249rs0pfdkm52w3qxj&st=8rzeuymv&dl=1","fileSize":"1.39 MB"}}}')},5877:function(e){e.exports=JSON.parse('{"airoupuzzle":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]},"mh1":{"demo":{"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.png"],"icon":["icon.png"],"logo":["logo.png"]},"mh2":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mh3":{"demo":{"grid":["grid.png"],"hero":["hero.jpg"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-192.png","icon.png"],"logo":["logo-2.png","logo.png"]},"mh3g":{"3ds":{"demo":{"grid":["grid.png"],"logo":["logo-2.png"]},"grid":["grid.png"],"hero":["hero.png"],"icon":["icon.png"],"logo":["logo.png"]},"wiiu":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.png"],"icon":["icon.png"],"logo":["logo.png"]}},"mh3u":{"3ds":{"demo":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"grid":["grid-2.png","grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"wiiu":{"demo":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"grid":["grid-2.png","grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]}},"mh4":{"demo":{"hero":["hero.jpg"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo-2.png","logo.png"]},"mh4g":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mh4u":{"demo":{"grid":["grid.png"],"icon":["icon.png"],"logo":["logo.png"]},"grid":["grid-2.png","grid.png"],"hero":["hero.jpg"],"icon":["icon-2.png","icon.png"],"logo":["logo.png"]},"mhdiary":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]},"mhdiarydx":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mhdiaryg":{"grid":["grid-2.png","grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]},"mhf1":{"grid":["grid-2.png","grid-3.png","grid.png"],"hero":["hero.png"],"icon":["icon-144.PNG","icon.PNG"],"logo":["logo-2.png","logo.png"]},"mhf2":{"grid":["grid-2.png","grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]},"mhfu":{"demo":{"grid":["grid-2.png"],"hero":["hero.jpg"],"logo":["logo-2.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo-2.png","logo-3.png","logo.png"]},"mhg":{"ps2":{"grid":["grid.png"],"hero":["hero.png"],"icon":["icon.png"],"logo":["logo.png"]},"wii":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-192.png","icon.png"],"logo":["logo.png"]}},"mhgen":{"demo":{"hero":["hero.jpg"],"icon":["icon-2.png","icon.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mhgu":{"demo":{"hero":["hero.jpg"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"logo":["logo.png"]},"mhp1":{"grid":["grid.png"],"hero":["hero-2.png","hero.png"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]},"mhp2":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mhp2g":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-2-144.png","icon-2.png","icon.png"],"logo":["logo.png"]},"mhp3rd":{"ps3":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"psp":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-144.png","icon.png"],"logo":["logo.png"]}},"mhpuzzles":{"logo":["logo.png"],"v1.01.00":{"icon":["icon.png"]},"v2.00.02":{"grid":["grid.png"],"icon":["icon.png"]},"v2.02.00":{"hero":["hero.png"]}},"mhrise":{"grid":["grid-2.jpg"],"hero":["hero.png"]},"mhst":{"3ds":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-2.png","icon.png"],"logo":["logo.png"]},"mobile":{"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]}},"mhx":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero-2.jpg","hero-3.jpg","hero-4.jpg","hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]},"mhxx":{"3ds":{"demo":{"grid":["grid.png"],"icon":["icon.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon-2.png","icon.png"],"logo":["logo.png"]},"switch":{"demo":{"grid":["grid.png"],"logo":["logo.png"]},"grid":["grid.png"],"hero":["hero.jpg"],"icon":["icon.png"],"logo":["logo.png"]}},"output":["output.json"],"run":["run.bat","run.js"]}')}}]);
//# sourceMappingURL=component---src-pages-index-js-27e6262f4ec58da201a5.js.map