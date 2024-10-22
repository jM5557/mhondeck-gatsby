"use strict";(self.webpackChunkMHOnDeck=self.webpackChunkMHOnDeck||[]).push([[53],{3051:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var l=t(7294),n=t(9357),r=t(5877),o=t(1936),i=JSON.parse('{"ps2":{"fullname":"PlayStation 2","abbreviation":"PS2"},"psp":{"fullname":"PlayStation Portable","abbreviation":"PSP"},"ps3":{"fullname":"PlayStation 3","abbreviation":"PS3"},"wii":{"fullname":"Nintendo Wii","abbreviation":"Wii"},"3ds":{"fullname":"Nintendo 3DS","abbreviation":"3DS"},"wiiu":{"fullname":"Nintendo Wii U","abbreviation":"Wii U"},"switch":{"fullname":"Nintendo Switch","abbreviation":"Switch"},"pc":{"fullname":"PC/Steam","abbreviation":"PC"},"ios":{"fullname":"iOS","abbreviation":"iOS"},"android":{"fullname":"Android","abbreviation":"Android"}}');var m=e=>{let{gameId:a}=e;const t=o[a].platforms;return t&&0!==t.length?l.createElement("div",{className:"platform-info"},l.createElement("h3",null,"Platforms"),l.createElement("div",{className:"platforms-container"},t.map((e=>{const a=i[e];return a?l.createElement("div",{key:e,className:"platform-box"},l.createElement("h4",null,a.fullname)):null})))):l.createElement("p",null,"No platforms available for this game.")},c=t(961);var s=e=>{let{groupName:a,images:t,folderPath:n}=e;const{0:r,1:o}=(0,l.useState)(null),{showModal:i,setShowModal:m,ModalComponent:s}=(0,c.e)();return l.createElement("div",{className:"group"},l.createElement("h3",null,a.charAt(0).toUpperCase()+a.slice(1)),l.createElement("div",{className:"images-grid"},t.map(((e,t)=>l.createElement(l.Fragment,null,l.createElement("img",{key:a+t,className:a,src:"/images/gallery/"+n+"/"+e,alt:e,onClick:()=>{o("/images/gallery/"+n+"/"+e),m(!i)}}))))),l.createElement(s,{className:"image-modal"},l.createElement(l.Fragment,null,l.createElement("div",{className:"image-wrapper flex align-c space-c"},l.createElement("img",{className:"modal-image "+a,src:r,alt:r})))))};const u=e=>{let{data:a,folderPath:t}=e;return l.createElement(l.Fragment,null,Object.keys(a).map((e=>{const n=a[e],r=Object.keys(i).includes(e)?i[e].fullname:e.charAt(0).toUpperCase()+e.slice(1);return Array.isArray(n)&&n.length>0?l.createElement(s,{key:e,groupName:e,images:n,folderPath:t}):Array.isArray(n)&&0===n.length?l.createElement(l.Fragment,null):"object"==typeof n&&null!==n?l.createElement("div",{key:e,className:e+" box"},l.createElement("h3",null,r),l.createElement("div",{className:"subfolder-images"},l.createElement(u,{data:n,folderPath:t+"/"+e}))):null})))};var d=u,h=t(7306),f=t(1619),g=t(7473),E=t(709);var p=e=>{let{params:a}=e;const{id:t}=a,i=r[t],{showModal:s,setShowModal:u,ModalComponent:p}=(0,c.e)(),{showModal:b,setShowModal:k,ModalComponent:v}=(0,c.e)();if(!i)return l.createElement("p",null,"Game not found");const y=(e,a)=>{if(i.hero&&i.hero.length>0)return{image:i.hero[0],path:"/images/gallery/"+t+"/"+i.hero[0]};for(const t of Object.keys(e))if("object"==typeof e[t]&&!Array.isArray(e[t])){if(e[t].hero&&e[t].hero.length>0)return{image:e[t].hero[0],path:"/images/gallery/"+a+"/"+t+"/"+e[t].hero[0]};const l=y(e[t],a+"/"+t);if(l)return l}return null},w=y(i,t),N=w?w.path:null;return l.createElement("main",{className:"game-page"},l.createElement("section",{id:"hero",style:{backgroundImage:N?"url("+N+")":"none",backgroundSize:"cover"}},l.createElement(h.Z,null),l.createElement("h1",null,o[t].title),l.createElement(m,{gameId:t}),l.createElement("button",{type:"button",onClick:()=>u(!s),className:"cta secondary"},"Installation")),l.createElement("div",{className:"artwork"},l.createElement("div",{className:"artwork-text"},l.createElement("div",null,l.createElement("h2",null,"Steam Grid Artwork"),l.createElement("h3",null,"Use with the SteamGridDB Plugin for Decky Loader on Steam Deck")),o[t].artwork&&l.createElement("button",{type:"button",className:"cta",onClick:()=>k(!0)},"Download Pack")),l.createElement(d,{data:i,folderPath:t})),l.createElement(p,null,l.createElement(g.Z,null)),o[t].artwork&&l.createElement(v,null,l.createElement(E.Z,{downloadLink:o[t].artwork.url,title:o[t].title,fileSize:o[t].artwork.fileSize})),l.createElement(f.Z,null),l.createElement(n.Z,{title:o[t].title}))}}}]);
//# sourceMappingURL=component---src-pages-games-[id]-js-6ae87b2ee45697eaaeea.js.map