"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4774],{9613:(e,o,a)=>{a.d(o,{Zo:()=>m,kt:()=>u});var n=a(9496);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,n,t=function(e,o){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d=n.createContext({}),l=function(e){var o=n.useContext(d),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},m=function(e){var o=l(e.components);return n.createElement(d.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},c=n.forwardRef((function(e,o){var a=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(a),u=t,v=c["".concat(d,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(v,i(i({ref:o},m),{},{components:a})):n.createElement(v,i({ref:o},m))}));function u(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7507:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(2848),t=a(9213),r=(a(9496),a(9613)),i=["components"],s={id:"motivation",title:"Motiva\xe7\xe3o"},d=void 0,l={unversionedId:"motivation",id:"version-7.x/motivation",title:"Motiva\xe7\xe3o",description:"Economizando espa\xe7o em disco e melhorando a velocidade de instala\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/pt/motivation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"motivation",title:"Motiva\xe7\xe3o"},sidebar:"version-7.x/docs",next:{title:"Instala\xe7\xe3o",permalink:"/pt/installation"}},m={},p=[{value:"Economizando espa\xe7o em disco e melhorando a velocidade de instala\xe7\xe3o",id:"economizando-espa\xe7o-em-disco-e-melhorando-a-velocidade-de-instala\xe7\xe3o",level:2},{value:"Criando um diret\xf3rio node_modules n\xe3o plano",id:"criando-um-diret\xf3rio-node_modules-n\xe3o-plano",level:2}],c={toc:p};function u(e){var o=e.components,s=(0,t.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"economizando-espa\xe7o-em-disco-e-melhorando-a-velocidade-de-instala\xe7\xe3o"},"Economizando espa\xe7o em disco e melhorando a velocidade de instala\xe7\xe3o"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/HemSays/status/1434921646083563525/photo/1"},(0,r.kt)("img",{src:a(4777).Z,width:"2500",height:"1406"}))),(0,r.kt)("p",null,"Ao usar npm ou Yarn, se voc\xea tiver 100 projetos usando uma depend\xeancia, voc\xea ter\xe1 100 c\xf3pias dessa depend\xeancia salvas em disco. Com pnpm, a depend\xeancia ser\xe1 armazenada em um armazenamento de conte\xfado endere\xe7\xe1vel, ent\xe3o:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Se voc\xea depender de diferentes vers\xf5es da depend\xeancia, apenas os arquivos diferentes ser\xe3o armazenados. Por exemplo, se ela tiver 100 arquivos e uma nova vers\xe3o haver uma altera\xe7\xe3o em apenas um desses arquivos, o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm update")," armazenar\xe1 apenas 1 novo arquivo, ao inv\xe9s de clonar toda a depend\xeancia apenas para uma mudan\xe7a \xfanica."),(0,r.kt)("li",{parentName:"ol"},"Todos os arquivos s\xe3o armazenados em um \xfanico local do disco. Quando os pacotes s\xe3o instalados, seus arquivos s\xe3o vinculados a partir desse local \xfanico, n\xe3o consumindo espa\xe7o adicional em disco. Isso permique que voc\xea compartilhe a mesma vers\xe3o de depend\xeancias entre diversos projetos.")),(0,r.kt)("p",null,"Como resultado, voc\xea otimiza muito espa\xe7o em seu disco proporcionalmente ao n\xfamero de projetos e depend\xeancias, tendo assim instala\xe7\xf5es muito mais r\xe1pidas!"),(0,r.kt)("h2",{id:"criando-um-diret\xf3rio-node_modules-n\xe3o-plano"},"Criando um diret\xf3rio node_modules n\xe3o plano"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/xiaokedada/status/1471691763102679041/photo/1"},(0,r.kt)("img",{src:a(5836).Z,width:"2920",height:"1392"}))),(0,r.kt)("p",null,"Ao instalar as depend\xeancias utilizando npm ou o cl\xe1ssico Yarn, todos os pacotes s\xe3o diretamente ligados \xe0 raiz do diret\xf3rio de m\xf3dulos. Como resultado, o c\xf3digo-fonte tem acesso \xe0 depend\xeancias que n\xe3o foram adicionadas ao projeto."),(0,r.kt)("p",null,"Por padr\xe3o, o pnpm utiliza symlinks (links simb\xf3licos) para adicionar apenas as depend\xeancias ligadas diretamente \xe0 raiz do diret\xf3rio de m\xf3dulos. Se voc\xea deseja obter mais detalhes sobre a estrutura \xfanica da ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," que o pnpm cria e por que ela funciona bem com o ecossistema Node.js, leia:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"node_modules planos n\xe3o s\xe3o a \xfanica maneira")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pt/symlinked-node-modules-structure"},"Estrutura da node_modules com links simb\xf3licos (Symlinked)"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Se suas ferramentas n\xe3o funcionarem muito bem com symlinks (links simb\xf3licos), voc\xea ainda pode usar pnpm e definir a configura\xe7\xe3o de ",(0,r.kt)("a",{parentName:"p",href:"npmrc#node-linker"},"node-linker")," para ",(0,r.kt)("inlineCode",{parentName:"p"},"hoisted"),". Isso instruir\xe1 o pnpm a criar um diret\xf3rio da node_modules semelhante aos criados pelo npm e o cl\xe1ssico Yarn."))))}u.isMDXComponent=!0},4777:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg"},5836:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg"}}]);