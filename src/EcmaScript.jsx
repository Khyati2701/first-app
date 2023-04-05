import React from "react";

const EcmaScript  =() => {
    return(
      <>
      <div>
        <h1><b><u><center>React ES6</center></u></b></h1>
          <h2>What is ES6?</h2>
            <p>es6 stands for ECMAScript 6.</p>
            <p>ECMAScript is a JavaScript standard intended to ensure a common language scross different browsers.</p>
            <p>ES6 is the 6th version of ECMAScript.</p>

          <h2>Why is ES6?</h2>
            <p>React uses ES6 and all of these new features will make your coding experince in react much much better.</p>
            <p>you will be able to do things much more ease and in very less lines!</p>
          
          <h2>Features Like:</h2>
            <h3><b>1. Arrow Functions:</b></h3>
            <h4>syntax:</h4>
            <div class="code-toolbar">
              <pre class="language-javascript" tabindex="0">
                <code class="language-javascript">
                  <span class="token keyword">const</span>
                  <span class="token operator">&nbsp;</span>
                  <span class="token function-variable function">hello</span>
                  <span class="token operator">&nbsp;</span>
                  <span class="token operator">=</span>
                  <span class="token operator">&nbsp;</span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">)</span>
                  <span class="token operator">&nbsp;</span>
                  <span class="token operator">=&gt;</span>
                  <span class="token operator">&nbsp;</span>
                  <span class="token punctuation">&#10100;</span>
                  <br></br>
                  <span class="token operator">&nbsp;&nbsp;</span>
                  <span class="token keyword">return</span>
                  <span class="token operator">&nbsp;</span>
                  <span class="token string">"Hello World!"</span>
                  <span class="token punctuation">;</span>
                  <br></br>
                  <span class="token punctuation">&#10101;</span>
                </code>
              </pre>
            </div>
            {/* <p>const hello= ()=&gt; 
                return "Hello World!";
            &rbrace;</p> */}
            <h3><b>2. .map():</b> </h3>
            <p>.map can be used for alot of thngs, one of it's use case is, we can make any number of cards through loop and just put in jsx, like this:</p>
            <h4>syntax:</h4>
            <div class="code-toolbar">
              <pre class="language-javascript" tabindex="0">
                <code class="language-javascript"></code>
                  <span class="token keyword">const</span>
                  <span class="token operator">&nbsp;</span>
                  <span class="token keyword">data</span>
                  <span class="token operator">=</span>
                  <span class="token punctuation">[</span>
                  <span class="token string">'title1'</span>
                  <span class="token punctuation">,</span>
                  <span class="token string">'title2'</span>
                  <span class="token punctuation">,</span>
                  <span class="token string">'title3'</span>
                  <span class="token punctuation">]</span>
                  <span class="token punctuation">;</span>
                  <br></br>
                  <span class="token keyword">let</span>
                  <span class="token operator">&nbsp;</span>
                  <span class="token operator">cards</span>
                  <span class="token operator">=</span>
                  <span class="token keyword">data</span>
                  <span class="token punctuation">.</span>
                  <span class="token keyword">map</span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">(</span>
                  <span class="token keywords">item</span>
                  <span class="token punctuation">)</span>
                  <span class="token operator">=&gt;</span>
                  <span class="token operator">&nbsp;</span>
                  <span class="token operator">&lt;</span>
                  <span class="token keyword">card</span>
                  <span class="token operator">&gt;</span>
                  <span class="token punctuation">&#10100;</span>
                  <span class="token keyword">item</span>
                  <span class="token punctuation">&#10101;</span>
                  <span class="token operator">&lt;</span>
                  <span class="token operator">/</span>
                  <span class="token keyword">card</span>
                  <span class="token operator">&gt;</span>
                  <span class="token punctuation">)</span>    
              </pre>
            </div>

          <h3><b>3. Destructuring:</b></h3>    
          <h4>Old Way Syntax:</h4>
          <div class="code-toolbar">
            <pre class="language-javascript" tabindex="0">
                <code class="language-javascript"></code>
                <span class="token keyword">const</span>
                <span class="token operator">&nbsp;</span>
                <span class="token keyword">languages</span>
                <span class="token operator">&nbsp;</span>
                <span class="token operators">=</span>
                <span class="token operator">&nbsp;</span>
                <span class="token operator">[</span>
                <span class="token string">'JS'</span>
                <span class="token punctution">,</span>
                <span class="token string">'Python'</span>
                <span class="token punctution">,</span>
                <span class="token string">'Java'</span>
                <span class="token operator">]</span>
                <span class="token punctution">;</span>
                <br></br>
                <span class="token keyword">const</span>
                <span class="token operator">&nbsp;</span>
                <span class="token keyword">js</span>
                <span class="token operator">&nbsp;</span>
                <span class="token operators">=</span>
                <span class="token operator">&nbsp;</span>
                <span class="token keywords">languages</span>
                <span class="token operator">[</span>
                <span class="token number">0</span>
                <span class="token operator">]</span>
                <br></br>
                <span class="token keyword">const</span>
                <span class="token operator">&nbsp;</span>
                <span class="token keyword">python</span>
                <span class="token operator">&nbsp;</span>
                <span class="token operators">=</span>
                <span class="token operator">&nbsp;</span>
                <span class="token keywords">languages</span>
                <span class="token operator">[</span>
                <span class="token number">1</span>
                <span class="token operator">]</span>
                <br></br>
                <span class="token keyword">const</span>
                <span class="token operator">&nbsp;</span>
                <span class="token keyword">java</span>
                <span class="token operator">&nbsp;</span>
                <span class="token operators">=</span>
                <span class="token operator">&nbsp;</span>
                <span class="token keywords">languages</span>
                <span class="token operator">[</span>
                <span class="token number">2</span>
                <span class="token operator">]</span>
            </pre>
          </div>

        <h4>New Way Syntax:</h4>  
        <div class="code-toolbar">
          <pre class="language-javascript" tabindex="0">
            <code class="language-javascript"></code>
              <span class="token keyword">const</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">languages</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operators">=</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">[</span>
              <span class="token string">'JS'</span>
              <span class="token punctution">,</span>
              <span class="token string">'Python'</span>
              <span class="token punctution">,</span>
              <span class="token string">'Java'</span>
              <span class="token operator">]</span>
              <span class="token punctution">;</span>
              <br></br>
              <span class="token keyword">const</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">[</span>
              <span class="token string">JS</span>
              <span class="token punctution">,</span>
              <span class="token operator">&nbsp;</span>
              <span class="token string">Python</span>
              <span class="token punctution">,</span>
              <span class="token operator">&nbsp;</span>
              <span class="token string">Java</span>
              <span class="token operator">]</span>
              <span class="token operator">&nbsp;</span>
              <span class="token opertaor">=</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">languages</span>
          </pre>
        </div>
      
      <h3><b>4. ternary Operator:</b></h3>
        <p>With this, you can write if/esle conditions is one line, it's syntax is fairly simple like this:</p>
        <h4>syntax:</h4>
        <div class="code-toolbar">
            <pre class="language-javascript" tabindex="0">
              <code class="language-javascript"></code>
              <span class="token keyword">condition</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">?</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">&lt;</span>
              <span class="token keyword">expression</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">if</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">ture</span>
              <span class="token operator">&gt;</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">:</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">&lt;</span>
              <span class="token keyword">expression</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">if</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">false</span>
              <span class="token operator">&gt;</span>
            </pre>
          </div>  
        <h4>Example:</h4>  
        <div class="code-toolbar">
            <pre class="language-javascript" tabindex="0">
              <code class="language-javascript"></code>
              <span class="token keyword">let</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">loading</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">=</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">false</span>
              <span class="token punctution">;</span>
              <br></br>
              <span class="token keyword">const</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">data</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">loading</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">?</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">&lt;</span>
              <span class="token keyword">div</span>
              <span class="token punctution">&gt;</span>
              <span class="token keyword">Loading...</span>
              <span class="token operator">&lt;</span>
              <span class="token operator">/</span>
              <span class="token keyword">div</span>
              <span class="token punctution">&gt;</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">:</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">&lt;</span>
              <span class="token keyword">div</span>
              <span class="token punctution">&gt;</span>
              <span class="token keyword">Data</span>
              <span class="token operator">&lt;</span>
              <span class="token operator">/</span>
              <span class="token keyword">div</span>
              <span class="token punctution">&gt;</span>
            </pre>
        </div> 

      <h3><b>4. Spread Operator:</b></h3>
        <h4>Syntax:</h4>
        <div class="code-toolbar">
            <pre class="language-javascript" tabindex="0">
              <code class="language-javascript"></code>
              <span class="token keyword">const</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">languages</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">=</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">[</span>
              <span class="token string">'JS'</span>
              <span class="token punctution">,</span>
              <span class="token string">'Python'</span>
              <span class="token punctution">,</span>
              <span class="token string">'Java'</span>
              <span class="token operator">]</span>
              <span class="token operator">;</span>
              <br></br>
              <span class="token keyword">const</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">morelanguages</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">=</span>
              <span class="token operator">&nbsp;</span>
              <span class="token operator">[</span>
              <span class="token string">'C'</span>
              <span class="token punctution">,</span>
              <span class="token string">'C++'</span>
              <span class="token punctution">,</span>
              <span class="token string">'C#'</span>
              <span class="token operator">]</span>
              <span class="token operator">;</span>
              <br></br><br></br>
              <span class="token keyword">const</span>
              <span class="token operator">&nbsp;</span>
              <span class="token keyword">allLanguages</span>
              <span class="token operator">=</span>
              <span class="token operator">[</span>
              <span class="token string">...languages</span>
              <span class="token punctution">,</span>
              <span class="token operator">&nbsp;</span>
              <span class="token string">...morelanguages</span>
              <span class="token operator">]</span>
            </pre>
        </div>
      
        <h4>Output:</h4>
        <div class="code-toolbar">
            <pre class="language-javascript" tabindex="0">
              <code class="language-javascript"></code>
              <span class="token operator">[</span>
              <span class="token string">"JS"</span>
              <span class="token punctution">,</span>
              <span class="token string">"Python"</span>
              <span class="token punctution">,</span>
              <span class="token string">"Java"</span>
              <span class="token string">"C"</span>
              <span class="token punctution">,</span>
              <span class="token string">"C++"</span>
              <span class="token punctution">,</span>
              <span class="token string">"C#"</span>
              <span class="token operator">]</span>
            </pre>
            <p>and many more like, classes, modules.</p>
        </div>
      </div>
      </>
      )}

export default EcmaScript;