"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[89],{9419:function(e,t,l){l.d(t,{Z:function(){return o}});var a=l(7294),r=l(5877);var n=e=>{let{gameData:t,id:l,className:r="",renderTagType:n="img"}=e;const o=(e,a)=>{if(null!=t&&t.grid&&t.grid.length>0)return{image:t.grid[0],path:"/images/gallery/"+l+"/"+t.grid[0]};for(const t of Object.keys(null!=e?e:{}))if("object"==typeof e[t]&&!Array.isArray(e[t])){if(e[t].grid&&e[t].grid.length>0)return{image:e[t].grid[0],path:"/images/gallery/"+a+"/"+t+"/"+e[t].grid[0]};const l=o(e[t],a+"/"+t);if(l)return l}return null},i=o(t,l),s=i?i.path:null;if("img"!==n)return a.createElement("div",{className:r,style:s?{backgroundImage:"url("+s+")",backgroundSize:"cover"}:{}})};var o=e=>{let{games:t}=e;return a.createElement(a.Fragment,null,t.map(((e,t)=>{let[l,o]=e;const i=r[l],s=l;return a.createElement("a",{key:t,href:"/games/"+s,className:"game-thumb"},a.createElement(n,{gameData:i,id:s,className:"img-wrapper",renderTagType:"div"}),a.createElement("small",null,o.title))})))}},2406:function(e,t,l){l.r(t);var a=l(7294),r=l(7306),n=l(9419),o=l(1619),i=l(961),s=l(1936),c=l(4279),m=l(7473),u=l(709),d=l(9357);t.default=()=>{let{showModal:e,setShowModal:t,ModalComponent:l}=(0,i.e)();const{showModal:g,setShowModal:p,ModalComponent:h}=(0,i.e)(),{0:f,1:w}=(0,a.useState)(""),k=Object.entries(s).filter((e=>{let[t,l]=e;return l.title.toLowerCase().includes(f.toLowerCase())||t.toLowerCase().includes(f.toLowerCase())})),S=k.length>0?k:Object.entries(s),{url:b,title:y,fileSize:E}=c.games;return a.createElement("main",{className:"game-page all-games"},a.createElement("section",{id:"hero",className:"games-hero"},a.createElement(r.Z,null),a.createElement("h1",null,"Steam Grid Artwork"),a.createElement("h2",null,"Choose a game to view its SteamOS or Steam Big Picture mode artwork options"),a.createElement("button",{type:"button",onClick:()=>p(!g),className:"cta"},"Download Pack"),a.createElement("button",{type:"button",onClick:()=>t(!e),className:"cta secondary"},"Installation")),a.createElement("input",{type:"text",placeholder:"Search Games...",value:f,className:"search",onChange:e=>w(e.target.value)}),a.createElement("section",{id:"games-list"},a.createElement(n.Z,{games:S})),a.createElement(l,null,a.createElement(m.Z,null)),a.createElement(h,null,a.createElement(u.Z,{downloadLink:b,title:y,fileSize:E})),a.createElement(o.Z,null),a.createElement(d.Z,{title:"Steam Grid Artwork - All Games"}))}},4279:function(e){e.exports=JSON.parse('{"rS":{"title":"MHOnDeck UI Theme","url":"https://www.dropbox.com/scl/fi/uvj2y305tf4ftnlnbyldj/homebrew.zip?rlkey=ephy3vcmzc4nz8udum0lt4sih&dl=1","fileSize":"24.5 MB"},"iv":{"title":"MHOnDeck CSS Theme","url":"https://www.dropbox.com/scl/fi/ioke37637ajw4kqt31aje/MHOnDeck-CSS-Theme.zip?rlkey=o3r0odmq1zl48amf0lnxitgeu&dl=1","fileSize":"23.1 MB"},"x4":{"title":"MHOnDeck SFX Pack","url":"https://www.dropbox.com/scl/fi/i7c92ekrn7w55ozebmvt2/MHOnDeck-SFX-Pack.zip?rlkey=4rsnhjjs5jmm339rcfedcufo5&dl=1","fileSize":"1.32 MB"},"games":{"title":"Steam Grid Artwork","url":"https://www.dropbox.com/scl/fo/ss37zk1a7b2xdqa2ng8w0/APqros5Xgn7GWeNpIlUsNpw?rlkey=oh5k0dml8o39a485lik5pfj2b&st=ggheqpi1&dl=1","fileSize":"111 MB"}}')}}]);
//# sourceMappingURL=component---src-pages-games-index-js-777e538a66972c2e60e5.js.map