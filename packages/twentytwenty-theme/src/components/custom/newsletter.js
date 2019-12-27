import React from "react";
import { css } from "frontity";

export class NewsLetter extends React.Component {

  showForm(){
    const js = `
    (function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
      var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
      f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
      var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
      _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
      var ml_account = ml('accounts', '1417442', 'u2m2j6g0u6', 'load');
    `;
    const script = document.createElement("script");
    const scriptText = document.createTextNode(js);
    script.appendChild(scriptText);
    document.body.appendChild(script);
    ml_account('webforms', '1682860', 'd4a3d0', 'show');
  }

  render() {
    return (
      <aside css={css`
        display: flex;
        justify-content: center;
        padding: 0px 0px 25px 0px;
      `}>
        <button css={css`
          background: #F8931F;
          padding: 10px;
          border-radius: 50px;
          color: #fff;
          cursor: pointer;
        `} onClick={ this.showForm }>
          Apúntate al boletín
        </button>
      </aside>
    );
  }
}