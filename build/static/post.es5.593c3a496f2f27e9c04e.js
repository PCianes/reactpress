(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[2],{180:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(4),c=n(2),a=n.n(c),i=n(417),l=n(416),s=n(419),u=n(415),b=n(420),f=n(0),p=n(423),j=n(422),d=n(424);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,y(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.html,n=e.post,r=t,c=n.content.rendered,a='<div style="margin-top: 40px;">'.concat(n.acf.code_iframe,"</div>"),i=n.acf.code_zip,l='<iframe width="100%" height="450" style="margin-top: 40px;" src="https://www.youtube-nocookie.com/embed/'.concat(n.acf.video_id,'?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),s=Object(o.a)("button",{target:"e10dy7ul0",label:"PostTabs"})({name:"cglkre",styles:"background:#F8931F;padding:5px 10px;border-radius:50px;color:#fff;cursor:pointer;margin-top:40px;display:flex;justify-content:center;align-items:center;"});return Object(f.jsx)(p.d,null,Object(f.jsx)(f.Global,{styles:Object(f.css)(j.a,";label:PostTabs;")}),Object(f.jsx)(p.b,null,Object(f.jsx)(p.a,null,Object(f.jsx)(d.c,null)),Object(f.jsx)(p.a,null,Object(f.jsx)(d.d,null)),Object(f.jsx)(p.a,null,Object(f.jsx)(d.a,null))),Object(f.jsx)(p.c,null,Object(f.jsx)(r,{html:c})),Object(f.jsx)(p.c,null,l&&Object(f.jsx)(r,{html:l})),Object(f.jsx)(p.c,null,a&&Object(f.jsx)(r,{html:a}),i&&Object(f.jsx)(s,{onClick:function(){window.location.href=i}},Object(f.jsx)(d.b,null)," Descargar código")))}}])&&O(n.prototype,r),c&&O(n,c),t}(a.a.Component);t.default=Object(r.connect)((function(e){var t=e.state,n=e.actions,o=e.libraries,r=t.source.get(t.router.link),a=t.source[r.type][r.id],i=o.html2react.Component,p=t.source.category,j=a.categories&&a.categories.map((function(e){return p[e]})),d=t.source.tag,m=a.tags&&a.tags.map((function(e){return d[e]}));return Object(c.useEffect)((function(){n.source.fetch("/")}),[]),r.isReady?Object(f.jsx)(w,null,Object(f.jsx)(_,null,Object(f.jsx)(l.f,null,a.categories&&Object(f.jsx)(s.a,{categories:j}),Object(f.jsx)(l.e,{as:"h1",className:"heading-size-1",dangerouslySetInnerHTML:{__html:a.title.rendered}}),Object(f.jsx)(u.c,{item:a}))),t.theme.featuredMedia.showOnPost&&Object(f.jsx)(v,{id:a.featured_media,isSinglePost:!0}),a.content&&Object(f.jsx)(l.d,{size:"small"},Object(f.jsx)(l.a,null,Object(f.jsx)(h,{post:a,html:i})),a.tags&&Object(f.jsx)(b.a,{tags:m}))):null}));var _=Object(o.a)(l.c,{target:"e62fgu20",label:"Header"})({name:"1fn4npt",styles:"background-color:#fff;margin:0;padding:4rem 0;@media (min-width:700px){padding:8rem 0;}"}),w=Object(o.a)(l.b,{target:"e62fgu21",label:"PostArticle"})({name:"1kjlpqx",styles:"padding-top:0 !important;"}),v=Object(o.a)(i.a,{target:"e62fgu22",label:"FeaturedImage"})({name:"5gusbm",styles:'margin-top:0 !important;position:relative;> div{position:relative;width:100vw !important;}&:before{background:#fff;content:"";display:block;position:absolute;bottom:50%;left:0;right:0;top:0;}'})}}]);