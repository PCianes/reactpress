(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{414:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return m}));var a=n(3),r=n(4),i=(n(2),n(417)),l=n(33),s=n(0);var c=Object(a.a)("div",{target:"e1f4xj5v0",label:"PostMetaWrapper"})({name:"186zl3k",styles:"margin-top:2rem;@media (min-width:700px){margin-top:3rem;}"}),m=Object(a.a)("ul",{target:"e1f4xj5v1",label:"PostMetaList"})({name:"kwb0wz",styles:"justify-content:center;color:#6d6d6d;display:flex;flex-wrap:wrap;font-size:1.5rem;font-weight:500;list-style:none;margin:-1rem 0 0 -2rem;svg{fill:currentColor;}@media (min-width:700px){font-size:1.6rem;margin:-1.4rem 0 0 -3rem;}"});t.c=Object(r.connect)((function(e){var t=e.state,n=e.item,a=t.source.author[n.author],r=new Date(n.date);return Object(s.jsx)(c,null,Object(s.jsx)(m,null,a&&Object(s.jsx)(i.a,{icon:l.f,label:"Post Author",link:a.link},a.name),Object(s.jsx)(i.a,{icon:l.a,label:"Post Date"},r.toLocaleDateString())))}))},415:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return g})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return h}));var a=n(3),r=(n(2),n(4)),i=n(38),l=n(416),s=n(414),c=n(418),m=n(419),o=n(0);t.g=Object(r.connect)((function(e){var t=e.state,n=e.item,a=e.libraries,r=e.showExcerpt,i=e.showMedia,b=void 0===i||i,O=t.source.category,p=n.categories&&n.categories.map((function(e){return O[e]})),w=t.source.tag,y=n.tags&&n.tags.map((function(e){return w[e]})),v=r?n.excerpt:n.content,z=a.html2react.Component;return Object(o.jsx)(u,null,Object(o.jsx)(d,null,Object(o.jsx)(j,null,n.categories&&Object(o.jsx)(c.a,{categories:p}),Object(o.jsx)(x,{link:n.link},Object(o.jsx)(g,{className:"heading-size-1",dangerouslySetInnerHTML:{__html:n.title.rendered}})),Object(o.jsx)(s.c,{item:n}))),t.theme.featuredMedia.showOnArchive&&b&&Object(o.jsx)(l.a,{id:n.featured_media}),v&&Object(o.jsx)(f,{size:"small"},Object(o.jsx)(h,null,Object(o.jsx)(z,{html:v.rendered})),n.tags&&Object(o.jsx)(m.a,{tags:y})))}));var u=Object(a.a)("article",{target:"e7lz0qr0",label:"Post"})({name:"1w1m9iu",styles:"&:first-of-type{padding:4rem 0 0;}@media (min-width:700px){&:first-of-type{padding:8rem 0 0;}}"}),d=Object(a.a)("header",{target:"e7lz0qr1",label:"PostHeader"})({name:"xi606m",styles:"text-align:center;"}),b={thin:"58rem",small:"80rem",medium:"100rem"},j=Object(a.a)("div",{target:"e7lz0qr2",label:"SectionContainer"})("margin-left:auto;margin-right:auto;width:calc(100% - 4rem);max-width:",(function(e){return b[e.size]||b.medium}),";@media (min-width:700px){width:calc(100% - 8rem);}"),g=Object(a.a)("h1",{target:"e7lz0qr3",label:"PostTitle"})({name:"3o51ig",styles:"margin:0;@media (min-width:700px){font-size:6.4rem !important;}"}),x=Object(a.a)(i.a,{target:"e7lz0qr4",label:"PostLink"})({name:"6un5p1",styles:"color:#000000;text-decoration:none;display:inline-block;&:hover{text-decoration:underline;}"}),f=Object(a.a)(j,{target:"e7lz0qr5",label:"PostInner"})({name:"2wfmr",styles:"padding-top:1rem;@media (min-width:700px){padding-top:1rem;}"}),h=Object(a.a)("div",{target:"e7lz0qr6",label:"EntryContent"})({name:"xu1ef6",styles:'line-height:1.5;max-width:80rem;font-family:"Hoefler Text",Garamond,"Times New Roman",serif;letter-spacing:normal;@media (min-width:700px){font-size:2.1rem;}> *:first-of-type{margin-top:0;}figure{margin:2em 0;max-width:100%;}'})},416:function(e,t,n){"use strict";var a=n(3),r=(n(2),n(4)),i=n(115),l=n(28),s=n(0);t.a=Object(r.connect)((function(e){var t=e.state,n=e.id,a=e.className,r=t.source.attachment[n];if(!r)return null;var i=Object.values(r.media_details.sizes).map((function(e){return[e.source_url,e.width]})).reduce((function(e,t,n,a){return e.concat("".concat(t.join(" "),"w").concat(n!==a.length-1?", ":""))}),"")||null;return Object(s.jsx)(c,{className:a},Object(s.jsx)(l.a,{size:"medium"},Object(s.jsx)(m,{alt:r.title.rendered,src:r.source_url,srcSet:i})))}));var c=Object(a.a)("figure",{target:"edgxlej0",label:"Figure"})({name:"abxdg",styles:"margin-top:5rem;position:relative;min-height:300px;@media (min-width:700px){margin-top:6rem;}"}),m=Object(a.a)(i.a,{target:"edgxlej1",label:"Image"})({name:"3r6t0a",styles:"margin:0 auto;max-width:100%;display:block;height:auto;max-height:440px;"})},417:function(e,t,n){"use strict";var a=n(3),r=(n(2),n(38)),i=n(57),l=n(0);var s=Object(a.a)("span",{target:"enbhvbr0",label:"MetaIcon"})({name:"150iyvg",styles:"flex-shrink:0;margin-right:1rem;"}),c=Object(a.a)("span",{target:"enbhvbr1",label:"MetaText"})({name:"igv9kg",styles:"a{color:inherit;text-decoration:none;}"}),m=Object(a.a)("li",{target:"enbhvbr2",label:"ListItem"})({name:"h96qih",styles:"align-items:center;display:flex;flex-wrap:nowrap;flex-shrink:0;letter-spacing:-0.016875em;margin:1rem 0 0 2rem;max-width:calc(100% - 2rem);text-transform:capitalize;@media (min-width:700px){margin:1.4rem 0 0 3rem;max-width:calc(100% - 3rem);}"});t.a=function(e){var t=e.icon,n=e.label,a=e.link,o=e.children;return Object(l.jsx)(m,null,Object(l.jsx)(s,null,Object(l.jsx)(i.a,null,n),Object(l.jsx)(t,null)),Object(l.jsx)(c,null,a?Object(l.jsx)(r.a,{link:a},o):o))}},418:function(e,t,n){"use strict";var a=n(3),r=n(4),i=(n(2),n(57)),l=n(38),s=n(0);t.a=Object(r.connect)((function(e){var t=e.categories.filter(Boolean);return 0===t.length?null:Object(s.jsx)(c,null,Object(s.jsx)(i.a,null,"Categories"),Object(s.jsx)(m,null,t.map((function(e){return Object(s.jsx)(o,{key:e.id,link:e.link},e.name)}))))}));var c=Object(a.a)("div",{target:"e13btr6x0",label:"EntryCategories"})({name:"rcqg3e",styles:"line-height:1.25;margin-bottom:2rem;@media (min-width:700px){margin-bottom:3rem;}"}),m=Object(a.a)("div",{target:"e13btr6x1",label:"EntryCategoriesInner"})({name:"dsztb8",styles:"justify-content:center;display:flex;flex-wrap:wrap;margin:-0.5rem 0 0 -1rem;@media (min-width:700px){margin:-1rem 0 0 -2rem;}"}),o=Object(a.a)(l.a,{target:"e13btr6x2",label:"CategoryTag"})({name:"18938dt",styles:"border-bottom:0.15rem solid currentColor;font-size:1.4rem;font-weight:700;letter-spacing:0.036666667em;margin:0.5rem 0 0 1rem;text-decoration:none;text-transform:uppercase;@media (min-width:700px){font-size:1.5rem;margin:1rem 0 0 2rem;}"})},419:function(e,t,n){"use strict";var a=n(4),r=n(2),i=n.n(r),l=n(33),s=n(38),c=n(414),m=n(417),o=n(0);t.a=Object(a.connect)((function(e){var t=e.tags.filter(Boolean);return 0===t.length?null:Object(o.jsx)(c.b,null,Object(o.jsx)(c.a,{style:{justifyContent:"flex-start"}},Object(o.jsx)(m.a,{icon:l.d,label:"Post Tags"},t.map((function(e,n){var a=n===t.length-1;return Object(o.jsx)(r.Fragment,{key:e.id},Object(o.jsx)(s.a,{link:e.link},e.name),!a&&Object(o.jsx)(i.a.Fragment,null,", "))})))))}))}}]);