(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,r=n(2648).Z,a=n(1598).Z,o=n(7273).Z,s=a(n(7294)),l=r(n(3121)),c=n(2675),d=n(139),u=n(8730);n(7238);var f=r(n(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://daroshi11260.imgix.net/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,r,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if(null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,o=!1;n.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>o,persist(){},preventDefault(){a=!0,t.preventDefault()},stopPropagation(){o=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let w=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:a,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:h,placeholder:g,loading:m,srcString:w,config:b,unoptimized:_,loader:v,onLoadRef:j,onLoadingCompleteRef:y,onLoad:x,onError:C}=e,E=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return m=f?"lazy":m,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},E,n,{width:a,height:r,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:m,style:i({},d,u),ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,w,j,y,_))},[w,j,y,C,_,t]),onLoad(e){let t=e.currentTarget;p(t,w,j,y,_)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===g&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),C&&C(e)}})))}),b=s.forwardRef((e,t)=>{let n,r;var a,{src:p,sizes:b,unoptimized:_=!1,priority:v=!1,loading:j,className:y,quality:x,width:C,height:E,fill:S,style:k,onLoad:N,onLoadingComplete:z,placeholder:R="empty",blurDataURL:P,layout:D,objectFit:O,objectPosition:I,lazyBoundary:A,lazyRoot:L}=e,H=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=s.useContext(u.ImageConfigContext),M=s.useMemo(()=>{let e=h||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[T]),F=H,G=F.loader||f.default;if(delete F.loader,"__next_img_default"in G){if("custom"===M.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let B=G;G=e=>{let{config:t}=e,n=o(e,["config"]);return B(n)}}if(D){"fill"===D&&(S=!0);let W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[D];W&&(k=i({},k,W));let Z={responsive:"100vw",fill:"100vw"}[D];Z&&!b&&(b=Z)}let q="",U=m(C),K=m(E);if("object"==typeof(a=p)&&(g(a)||void 0!==a.src)){let V=g(p)?p.default:p;if(!V.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(!V.height||!V.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)));if(n=V.blurWidth,r=V.blurHeight,P=P||V.blurDataURL,q=V.src,!S){if(U||K){if(U&&!K){let J=U/V.width;K=Math.round(V.height*J)}else if(!U&&K){let Q=K/V.height;U=Math.round(V.width*Q)}}else U=V.width,K=V.height}}let X=!v&&("lazy"===j||void 0===j);((p="string"==typeof p?p:q).startsWith("data:")||p.startsWith("blob:"))&&(_=!0,X=!1),M.unoptimized&&(_=!0);let Y=m(x),$=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:I}:{},{color:"transparent"},k),ee="blur"===R&&P?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:K,blurWidth:n,blurHeight:r,blurDataURL:P}),'")')}:{},et=function(e){let{config:t,src:n,unoptimized:i,width:r,quality:a,sizes:o,loader:s}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:i,allSizes:r}=e;if(n){let a=/(^|\s)(1?\d?\d)vw/g,o=[];for(let s;s=a.exec(n);s)o.push(parseInt(s[2]));if(o.length){let l=.01*Math.min(...o);return{widths:r.filter(e=>e>=i[0]*l),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:c,kind:"x"}}(t,r,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,i)=>"".concat(s({config:t,src:n,quality:a,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:s({config:t,src:n,quality:a,width:l[d]})}}({config:M,src:p,unoptimized:_,width:U,quality:Y,sizes:b,loader:G}),en=p,ei={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:F.crossOrigin},er=s.useRef(N);s.useEffect(()=>{er.current=N},[N]);let ea=s.useRef(z);s.useEffect(()=>{ea.current=z},[z]);let eo=i({isLazy:X,imgAttributes:et,heightInt:K,widthInt:U,qualityInt:Y,className:y,imgStyle:$,blurStyle:ee,loading:j,config:M,fill:S,unoptimized:_,placeholder:R,loader:G,srcString:en,onLoadRef:er,onLoadingCompleteRef:ea},F);return s.default.createElement(s.default.Fragment,null,s.default.createElement(w,Object.assign({},eo,{ref:t})),v?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},ei))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:r,blurDataURL:a}=e,o=i||t,s=r||n,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&r?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:r}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var i=n(5893),r=n(9008),a=n.n(r);n(5675);var o=n(7160),s=n.n(o),l=n(4298),c=n.n(l);function d(){return(0,i.jsxs)("div",{className:s().container,children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)(c(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=G-6302CZ25FK"}),(0,i.jsx)(c(),{id:"google-analytics",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'G-6302CZ25FK');, {\n              page_path: window.location.pathname,\n              });\n            "}}),(0,i.jsx)("title",{children:"Roshan Taneja"}),(0,i.jsx)("meta",{name:"description",content:"can i puts my bawls in yo jaws"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:s().main,children:[(0,i.jsxs)("h1",{className:s().title,children:["Hi, im ",(0,i.jsx)("a",{href:"./resume/Roshan Taneja Resume.pdf",download:!0,children:"Roshan Taneja!"})]}),(0,i.jsxs)("p",{className:s().description,children:[(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fork_bomb",className:s().code,children:":(){ :|:& };:"})," ","<---"," paste in ur cmd pls \uD83D\uDC49\uD83D\uDC48",(0,i.jsx)("br",{}),"(dont actually do that its a fork bomb haha)"]}),(0,i.jsx)("h2",{className:s().title,children:"Projects"}),(0,i.jsxs)("div",{className:s().grid,children:[(0,i.jsxs)("a",{href:"https://github.com/Daroshi11260/APCSA",className:s().card,children:[(0,i.jsx)("h2",{children:"APCSA →"}),(0,i.jsx)("p",{children:"Homework and project folder for my course learning of APCSA at school"})]}),(0,i.jsxs)("a",{href:"https://github.com/Daroshi11260/AdventOfCode",className:s().card,children:[(0,i.jsx)("h2",{children:"Advent Of Code →"}),(0,i.jsx)("p",{children:"Daily puzzle advent calendar and solutions repository"})]}),(0,i.jsxs)("a",{href:"https://github.com/Daroshi11260/School_Notes",className:s().card,children:[(0,i.jsx)("h2",{children:"School Notes →"}),(0,i.jsx)("p",{children:"Markdown based notetaking using github through obsidian"})]}),(0,i.jsxs)("a",{href:"https://github.com/Daroshi11260/spaceinvaders-reinforcementlearning",className:s().card,children:[(0,i.jsx)("h2",{children:"Space Invaders →"}),(0,i.jsx)("p",{children:"Using reinforcement learning to beat space invaders"})]})]})]}),(0,i.jsx)("footer",{className:s().footer,children:(0,i.jsx)("a",{children:"bing bong your opinion is wrong"})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){n(9749)},4298:function(e,t,n){e.exports=n(3573)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);