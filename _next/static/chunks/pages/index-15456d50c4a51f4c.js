(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4369)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(6495).Z,n=r(2648).Z,o=r(1598).Z,a=r(7273).Z,s=o(r(7294)),l=n(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=n(r(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://daroshi11260.imgix.net/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,n,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentNode){if(null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,a=!1;r.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>a,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){a=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let b=s.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:h,placeholder:g,loading:m,srcString:b,config:v,unoptimized:_,loader:w,onLoadRef:j,onLoadingCompleteRef:x,onLoad:y,onError:E}=e,C=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return m=f?"lazy":m,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},C,r,{width:o,height:n,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:m,style:i({},d,u),ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&p(e,b,j,x,_))},[b,j,x,E,_,t]),onLoad(e){let t=e.currentTarget;p(t,b,j,x,_)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===g&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),E&&E(e)}})))}),v=s.forwardRef((e,t)=>{let r,n;var o,{src:p,sizes:v,unoptimized:_=!1,priority:w=!1,loading:j,className:x,quality:y,width:E,height:C,fill:S,style:k,onLoad:N,onLoadingComplete:z,placeholder:R="empty",blurDataURL:D,layout:O,objectFit:P,objectPosition:A,lazyBoundary:I,lazyRoot:H}=e,L=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=s.useContext(u.ImageConfigContext),M=s.useMemo(()=>{let e=h||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[T]),B=L,G=B.loader||f.default;if(delete B.loader,"__next_img_default"in G){if("custom"===M.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=G;G=e=>{let{config:t}=e,r=a(e,["config"]);return W(r)}}if(O){"fill"===O&&(S=!0);let F={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];F&&(k=i({},k,F));let q={responsive:"100vw",fill:"100vw"}[O];q&&!v&&(v=q)}let U="",Z=m(E),V=m(C);if("object"==typeof(o=p)&&(g(o)||void 0!==o.src)){let J=g(p)?p.default:p;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(r=J.blurWidth,n=J.blurHeight,D=D||J.blurDataURL,U=J.src,!S){if(Z||V){if(Z&&!V){let Q=Z/J.width;V=Math.round(J.height*Q)}else if(!Z&&V){let X=V/J.height;Z=Math.round(J.width*X)}}else Z=J.width,V=J.height}}let K=!w&&("lazy"===j||void 0===j);((p="string"==typeof p?p:U).startsWith("data:")||p.startsWith("blob:"))&&(_=!0,K=!1),M.unoptimized&&(_=!0);let Y=m(y),$=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:A}:{},{color:"transparent"},k),ee="blur"===R&&D?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:V,blurWidth:r,blurHeight:n,blurDataURL:D}),'")')}:{},et=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let s;s=o.exec(r);s)a.push(parseInt(s[2]));if(a.length){let l=.01*Math.min(...a);return{widths:n.filter(e=>e>=i[0]*l),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:c,kind:"x"}}(t,n,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,i)=>"".concat(s({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:s({config:t,src:r,quality:o,width:l[d]})}}({config:M,src:p,unoptimized:_,width:Z,quality:Y,sizes:v,loader:G}),er=p,ei={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:B.crossOrigin},en=s.useRef(N);s.useEffect(()=>{en.current=N},[N]);let eo=s.useRef(z);s.useEffect(()=>{eo.current=z},[z]);let ea=i({isLazy:K,imgAttributes:et,heightInt:V,widthInt:Z,qualityInt:Y,className:x,imgStyle:$,blurStyle:ee,loading:j,config:M,fill:S,unoptimized:_,placeholder:R,loader:G,srcString:er,onLoadRef:en,onLoadingCompleteRef:eo},B);return s.default.createElement(s.default.Fragment,null,s.default.createElement(b,Object.assign({},ea,{ref:t})),w?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},ei))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o}=e,a=i||t,s=n||r,l=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&n?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},4369:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var i=r(5893),n=r(9008),o=r.n(n);r(5675);var a=r(7160),s=r.n(a);function l(){return(0,i.jsxs)("div",{className:s().container,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Roshan Taneja"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:s().main,children:[(0,i.jsxs)("h1",{className:s().title,children:["Hi, im ",(0,i.jsx)("a",{href:"https://roshan.codes",children:"Roshan!"})]}),(0,i.jsxs)("p",{className:s().description,children:["I like"," ",(0,i.jsx)("code",{className:s().code,children:"systems programming"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"^^^ paste in ur cmd pls \uD83D\uDC49\uD83D\uDC48",(0,i.jsx)("br",{}),"(dont actually do that its a fork bomb haha)"]}),(0,i.jsx)("p",{className:s().description,children:"Here are some of the projects i've worked on"}),(0,i.jsxs)("div",{className:s().grid,children:[(0,i.jsxs)("a",{href:"https://github.com/Daroshi11260/APCSA",className:s().card,children:[(0,i.jsx)("h2",{children:"APCSA →"}),(0,i.jsx)("p",{children:"Homework and project folder for my course learning of APCSA at school"})]}),(0,i.jsxs)("a",{href:"https://github.com/Daroshi11260/AdventOfCode",className:s().card,children:[(0,i.jsx)("h2",{children:"Advent Of Code →"}),(0,i.jsx)("p",{children:"Daily puzzle advent calendar and solutions repository"})]}),(0,i.jsxs)("a",{href:"https://github.com/Daroshi11260/School_Notes",className:s().card,children:[(0,i.jsx)("h2",{children:"School Notes →"}),(0,i.jsx)("p",{children:"Markdown based notetaking using github through obsidian"})]}),(0,i.jsxs)("a",{href:"https://github.com/Daroshi11260/spaceinvaders-reinforcementlearning",className:s().card,children:[(0,i.jsx)("h2",{children:"Space Invaders →"}),(0,i.jsx)("p",{children:"Using reinforcement learning to beat space invaders"})]})]})]}),(0,i.jsx)("footer",{className:s().footer,children:(0,i.jsx)("a",{children:"Developed by Roshan Taneja"})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);