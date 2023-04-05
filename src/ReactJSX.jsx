import React from "react";

const ReactJSX  =() => {
    return(
      <>
      <div>
        <h1><b><u>ReactJSX</u></b></h1>
            <h2><b>What is JSX?</b></h2>
                <p>JSX stands for JavaScript XML. It is similar in appearance to HTML, hence provides a way to easily write HTML in react. </p>

            <h2><b>Coding in JSX:</b></h2>
                <p>Earlier we had to make an HTML element or append it into existing ones with methods like createElement() / appendChild()</p>
                <div class="code-toolbar">
                    <pre class="language-javascript" tabindex="0">
                        <code class="language-javascript">
                        <span class="token keyword">const</span>
                        <span class="token operator">&nbsp;</span>
                        <span class="token keyword">elem</span>
                        <span class="token keyword">&nbsp;</span>
                        <span class="token operator">=</span>
                        <span class="token keyword">&nbsp;</span>
                        <span class="token keyword">React</span>
                        <span class="token punctuation">.</span>
                        <span class="token function">createElement</span>
                        <span class="token punctuation">(</span>
                        <span class="token string">'h1'</span>
                        <span class="token punctuation">,</span>
                        <span class="token keyword">&nbsp;</span>
                        <span class="token punctuation">&#10100;</span>
                        <span class="token punctuation">&#10101;</span>
                        <span class="token punctuation">,</span>
                        <span class="token keyword">&nbsp;</span>
                        <span class="token string">'Hello World'</span>
                        <span class="token punctuation">)</span>
                        <span class="token punctuation">;</span>
                        </code>
                    </pre>
                </div>
                <p>Now we can just do it directly, like this:</p>
                <div class="code-toolbar">
                    <pre class="language-javascript" tabindex="0">
                        <code class="language-javascript">
                        <span class="token keyword">const</span>
                        <span class="token operator">&nbsp;</span>
                        <span class="token keyword">elem</span>
                        <span class="token keyword">&nbsp;</span>
                        <span class="token operator">=</span>
                        <span class="token keyword">&nbsp;</span>
                        <span class="token operator">&lt;</span>
                        <span class="token string">h1</span>
                        <span class="token operator">&gt;</span>
                        <span class="token string">Hello World</span>
                        <span class="token operator">!</span>
                        <span class="token operator">&lt;</span>
                        <span class="token operator">/</span>
                        <span class="token string">h1</span>
                        <span class="token operator">&gt;</span>
                        </code>
                    </pre>
                </div>
            <h2><b>Expressions in JSX:</b></h2>
                <p>You can write the expression in {}</p>
                <p>You can write simple mathematical operations to variable to states to complicated operations with ternary operators and it will return the result, like:</p>
                <h3><b>Mathematical Operators:</b></h3>
                <div class="code-toolbar">
                    <pre class="language-javascript" tabindex="0">
                        <code class="language-javascript">
                            <span class="token keyword">const</span>
                            <span class="token operator">&nbsp;</span>
                            <span class="token keyword">elem</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token operator">=</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token operator">&lt;</span>
                            <span class="token string">h1</span>
                            <span class="token operator">&gt;</span>
                            <span class="token operator">React was released </span>
                            <span class="token keyword">in</span>
                            <span class="token punctuation">&#10100;</span>
                            <span class="token number">2010</span>
                            <span class="token operator">+</span>
                            <span class="token number">3</span>
                            <span class="token punctuation">&#10101;</span>
                            <span class="token operator">&lt;</span>
                            <span class="token operator">/</span>
                            <span class="token string">h1</span>
                            <span class="token operator">&gt;</span>
                        </code>
                    </pre>
                </div>
                <h3><b>Variables/States:</b></h3>
                <div class="code-toolbar">
                    <pre class="language-javascript" tabindex="0">
                        <code class="language-javascript">
                            <span class="token keyword">const</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token keyword">name</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token operator">=</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token keyword">"CHW"</span>
                            <br></br>
                            <span class="token keyword">const</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token keyword">elem</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token operator">=</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token operator">&lt;</span>
                            <span class="token keyword">h1</span>
                            <span class="token operator">&gt;</span>
                            <span class="token string">My name is</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token punctuation">&#10100;</span>
                            <span class="token string">name</span>
                            <span class="token punctuation">&#10101;</span>
                            <span class="token operator">&lt;</span>
                            <span class="token operator">/</span>
                            <span class="token keyword">h1</span>
                            <span class="token operator">&gt;</span>
                        </code>
                    </pre>
                </div>
                <h3><b>Variables/States:</b></h3>
                <div class="code-toolbar">
                    <pre class="language-javascript" tabindex="0">
                        <code class="language-javascript">
                            <span class="token keyword">const</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token keyword">elem</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token operator">=</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token operator">&lt;</span>
                            <span class="token keyword">h1</span>
                            <span class="token operator">&gt;</span>
                            <span class="token string">Hello</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token punctuation">&#10100;</span>
                            <span class="token string">name</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token operator">?</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token string">name</span>
                            <span class="token keyword">&nbsp;</span>
                            <span class="token operator">:</span>
                            <span class="token string">'World'</span>
                            <span class="token punctuation">&#10101;</span>
                            <span class="token operator">&lt;</span>
                            <span class="token operator">/</span>
                            <span class="token keyword">h1</span>
                            <span class="token operator">&gt;</span>
                        </code>
                    </pre>
                </div>
      </div>
      </>
      );
    };

export default ReactJSX;