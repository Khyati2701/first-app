import React from "react";
import Idroot from "./id-root.png";

const ReactReander  =() => {
    return(
      <>
      <div>
        <h1><b><u><center>React Render</center></u></b></h1>
            <h2>1. React Render HTML</h2>
                <p>React renders HTML to the webpage by using a function called <b>ReactDOM.render().</b></p>

            <h2>2. ReactDom.render()</h2>
                <p>This function takes two arguments, HTML content which you want to show on page and HTML element where you want to put the HTML content(first argument).</p>
                <p>But where will it find that element? It will find it inside "index.html" located in "public" folder. There you will notice a div with id "root". That is where all this will be rendered!</p>

                <h3>syntax:</h3>
                <div class="code-toolbar">
                    <pre class="language-javascript" tabindex="0">
                        <code class="language-javascript"></code>
                        <span class="token keyword">ReactDOM</span>
                        <span class="token punctuation">.</span>
                        <span class="token function">render</span>
                        <span class="token operator">(</span>
                        <span class="token operator">&lt;</span>
                        <span class="token keyword">p</span>
                        <span class="token operator">&gt;</span>
                        <span class="token sting">Hello</span>
                        <span class="token operator">&lt;</span>
                        <span class="token keyword">/p</span>
                        <span class="token operator">&gt;</span>
                        <span class="token punctution">,</span>
                        <span class="token punctution">&nbsp;</span>
                        <span class="token keyword">document</span>
                        <span class="token punctuation">.</span>
                        <span class="token function">getElementById</span>
                        <span class="token punctution">(</span>
                        <span class="token string">'root'</span>
                        <span class="token punctution">)</span>
                        <span class="token punctution">)</span>
                        <span class="token punctution">;</span>
                    </pre>
                </div>
                <img src={Idroot}width={700}height={250}></img>
      </div>
      </>
      );
    };
      
export default ReactReander;