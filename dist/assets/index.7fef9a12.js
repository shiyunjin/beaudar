var n=Object.defineProperty;var o=(t,e,u)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u;var a=(t,e,u)=>(o(t,typeof e!="symbol"?e+"":e,u),u);import{P as l,a as r}from"./constant-data.107c4322.js";class p{constructor(){a(this,"element");a(this,"script");a(this,"repo");a(this,"branch");a(this,"label");a(this,"theme");a(this,"keepTheme");a(this,"loading");a(this,"commentOrder");a(this,"inputPosition");this.element=document.createElement("form"),this.element.innerHTML=`
      <h3 id="heading-repository">\u4ED3\u5E93</h3>
      <p>
        \u9009\u62E9 Beaudar \u5C06\u8981\u8FDE\u63A5\u7684\u4ED3\u5E93\u3002
      </p>
      <ol>
        <li>\u786E\u4FDD\u4ED3\u5E93\u662F\u516C\u5F00\u7684\uFF0C\u5426\u5219\u60A8\u7684\u8BFB\u8005\u5C06\u65E0\u6CD5\u67E5\u770B Issue(\u8BC4\u8BBA)\u3002</li>
        <li>\u786E\u4FDD <a href="https://github.com/apps/beaudar" target="_blank">Beaudar app</a>
          \u5DF2\u5728\u4ED3\u5E93\u4E2D\u5B89\u88C5\uFF0C\u5426\u5219\u7528\u6237\u5C06\u65E0\u6CD5\u53D1\u8868\u8BC4\u8BBA\u3002
        </li>
        <li>\u5982\u679C\u4F60\u7684\u4ED3\u5E93\u662F\u4E00\u4E2A\u5206\u53C9\uFF0C\u8BF7\u5230\u8BBE\u7F6E\u4E2D\uFF0C\u786E\u4FDD Issues \u529F\u80FD\u5DF2\u6253\u5F00\u3002</li>
      </ol>
      <fieldset>
        <div>
          <label for="repo">\u4ED3\u5E93:</label><br/>
          <input id="repo" class="form-control" type="text" placeholder="\u4F8B\uFF1Abeaudar/beaudar">
          <p class="note">
            \u4E00\u4E2A <strong>public</strong> \u7684 GitHub \u4ED3\u5E93\u3002\u8FD9\u662F\u5C06\u53D1\u5E03\u535A\u5BA2\u6587\u7AE0 Issue \u548C Issue \u8BC4\u8BBA\u7684\u5730\u65B9\u3002
          </p>
        </div>
        <div>
          <label for="branch">\u5206\u652F (\u53EF\u9009):</label><br/>
          <input id="branch" class="form-control" type="text" placeholder="\u9ED8\u8BA4\uFF1Amaster">
          <p class="note">
            \u4ED3\u5E93\u7684\u5206\u652F\u540D\uFF0C\u7528\u4E8E\u6821\u9A8C\u4ED3\u5E93 beaudar.json \u914D\u7F6E\uFF0C\u4EE5\u4FDD\u8BC1\u8BC4\u8BBA\u4E0D\u4F1A\u968F\u610F\u6DFB\u52A0\u5230\u76EE\u6807\u4ED3\u5E93\u4E2D\u3002
          </p>
        </div>
      </fieldset>

      <h3 id="heading-mapping">\u535A\u5BA2\u6587\u7AE0 \u2194\uFE0F Issue \u6620\u5C04</h3>
      <p>\u9009\u62E9\u535A\u5BA2\u6587\u7AE0\u548C GitHub Issue \u4E4B\u95F4\u7684\u6620\u5C04\u3002</p>
      <fieldset>
        <div class="form-checkbox">
          <label>
            <input type="radio" value="pathname" name="mapping" checked="checked">
              Issue \u6807\u9898\u5305\u542B\u9875\u9762\u8DEF\u5F84\u540D\u3002
            <p class="note">
              Beaudar \u5C06\u641C\u7D22\u6807\u9898\u5305\u542B\u535A\u5BA2\u6587\u7AE0 URL <strong>\u8DEF\u5F84</strong>\u7684 Issue\u3002\u5982\u679C\u672A\u627E\u5230\u5339\u914D\u7684 Issue\uFF0C\u5219\u5F53\u6709\u4EBA\u9996\u6B21\u5BF9\u60A8\u7684\u4FE1\u606F\u53D1\u8868\u8BC4\u8BBA\u65F6\uFF0CBeaudar \u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A Issue\u3002
            </p>
          </label>
        </div>
        <div class="form-checkbox">
          <label>
            <input type="radio" value="url" name="mapping">
              Issue \u6807\u9898\u5305\u542B\u9875\u9762 URL\u3002
            <p class="note">
              Beaudar \u5C06\u641C\u7D22\u6807\u9898\u5305\u542B\u535A\u5BA2\u6587\u7AE0 URL \u7684 Issue\u3002 \u5982\u679C\u672A\u627E\u5230\u5339\u914D\u7684 Issue\uFF0C\u5219\u5F53\u6709\u4EBA\u9996\u6B21\u5BF9\u60A8\u7684\u4FE1\u606F\u53D1\u8868\u8BC4\u8BBA\u65F6\uFF0CBeaudar \u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A Issue\u3002
            </p>
          </label>
        </div>
        <div class="form-checkbox">
          <label>
            <input type="radio" value="title" name="mapping">
              Issue \u6807\u9898\u5305\u542B\u9875\u9762\u6807\u9898
            <p class="note">
              Beaudar \u5C06\u641C\u7D22\u6807\u9898\u5305\u542B\u535A\u5BA2\u6587\u7AE0\u6807\u9898\u7684 Issue\u3002 \u5982\u679C\u672A\u627E\u5230\u5339\u914D\u7684 Issue\uFF0C\u5219\u5F53\u6709\u4EBA\u9996\u6B21\u5BF9\u60A8\u7684\u4FE1\u606F\u53D1\u8868\u8BC4\u8BBA\u65F6\uFF0CBeaudar \u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A Issue\u3002
            </p>
          </label>
        </div>
        <div class="form-checkbox">
          <label>
            <input type="radio" value="og:title" name="mapping">
            Issue \u6807\u9898\u5305\u542B\u9875\u9762 meta \u7684 og:title
            <p class="note">
              Beaudar \u5C06\u641C\u7D22\u6807\u9898\u5305\u542B\u535A\u5BA2\u6587\u7AE0\u9875\u9762 meta \u5143\u7D20 <a href="http://ogp.me/" target="_blank">og:title</a> \u7684 Issue\u3002 \u5982\u679C\u672A\u627E\u5230\u5339\u914D\u7684 Issue\uFF0C\u5219\u5F53\u6709\u4EBA\u9996\u6B21\u5BF9\u60A8\u7684\u4FE1\u606F\u53D1\u8868\u8BC4\u8BBA\u65F6\uFF0CBeaudar \u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A Issue\u3002
            </p>
          </label>
        </div>
        <div class="form-checkbox">
          <label>
            <input type="radio" value="issue-number" name="mapping">
              \u7279\u5B9A\u95EE\u9898\u7F16\u53F7
            <p class="note">
              \u60A8\u53EF\u4EE5\u914D\u7F6E Beaudar \u4EE5\u6309\u7F16\u53F7\u52A0\u8F7D\u7279\u5B9A\u7684 Issue\u3002 \u95EE\u9898\u4E0D\u4F1A\u81EA\u52A8\u521B\u5EFA\u3002
            </p>
          </label>
        </div>
        <div class="form-checkbox">
          <label>
            <input type="radio" value="specific-term" name="mapping">
              \u95EE\u9898\u6807\u9898\u5305\u542B\u7279\u5B9A\u540D\u79F0
            <p class="note">
              \u5C06 Beaudar \u914D\u7F6E\u4E3A\u641C\u7D22\u6807\u9898\u5305\u542B\u60A8\u9009\u62E9\u7684\u7279\u5B9A\u540D\u79F0\u7684\u95EE\u9898\u3002\u5982\u679C\u672A\u627E\u5230\u5339\u914D\u95EE\u9898\uFF0CBeaudar \u5C06\u81EA\u52A8\u521B\u5EFA\u7B2C\u4E00\u6B21\u6709\u4EBA\u8BC4\u8BBA\u60A8\u7684\u5E16\u5B50\u65F6\u3002Issue \u7684\u6807\u9898\u5C06\u662F\u60A8\u9009\u62E9\u7684\u540D\u79F0\u3002
            </p>
          </label>
        </div>
      </fieldset>

      <h3 id="heading-Issue-label">Issue \u6807\u7B7E</h3>
      <p>
        \u9009\u62E9\u5C06\u5206\u914D\u7ED9 Beaudar \u521B\u5EFA\u7684\u95EE\u9898\u7684\u6807\u7B7E\u3002
      </p>
      <fieldset>
        <div>
          <label for="label">\u6807\u7B7E\uFF08\u53EF\u9009\uFF09\uFF1A</label>
          <br />
          <input id="label" class="form-control" type="text" placeholder="\u6807\u7B7E\u540D">
          <p class="note">
          \u6807\u7B7E\u540D\u79F0\u533A\u5206\u5927\u5C0F\u5199\u3002\u8BE5\u6807\u7B7E\u5FC5\u987B\u5B58\u5728\u4E8E\u60A8\u7684\u4ED3\u5E93\u4E2D\uFF0C\u65E0\u6CD5\u9644\u52A0\u4E0D\u5B58\u5728\u7684\u6807\u7B7E\u3002\u6807\u7B7E\u540D\u79F0\u652F\u6301\u6DFB\u52A0\u8868\u60C5\u7B26\u53F7\u3002\u2728\u{1F4AC}\u2728
          </p>
        </div>
      </fieldset>

      <h3 id="heading-theme">\u9009\u62E9\u4E3B\u9898 <span class="g-emoji">\u{1F308}</span></h3>
      <p>
        \u9009\u62E9\u4E0E\u60A8\u7684\u535A\u5BA2\u5339\u914D\u7684 Beaudar \u4E3B\u9898\u3002\u627E\u4E0D\u5230\u4F60\u559C\u6B22\u7684\u4E3B\u9898\uFF1F
        <a href="https://github.com/beaudar/beaudar/blob/master/CONTRIBUTING.md" target="_blank">\u8D21\u732E</a> \u4E00\u4E2A\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002
      </p>

      <select id="theme" class="form-select" value="github-light" aria-label="Theme">
        <option value="github-light">GitHub Light</option>
        <option value="github-dark">GitHub Dark</option>
        <option value="preferred-color-scheme">Preferred Color Scheme</option>
        <option value="github-dark-orange">GitHub Dark Orange</option>
        <option value="hugo-terminal-orange">Hugo Terminal Orange</option>
        <option value="icy-dark">Icy Dark</option>
        <option value="dark-blue">Dark Blue</option>
        <option value="photon-dark">Photon Dark</option>
        <option value="classic-dark">Classic Dark</option>
      </select>
      <h3 id="heading-keep-theme">\u4E3B\u9898\u4FDD\u6301</h3>
      <p>
        \u5C06\u4E3B\u9898\u8BBE\u7F6E\u4FDD\u5B58\u5230\u9875\u9762\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage" target="_blank">sessionStorage</a>\uFF0C\u4FEE\u6539\u4E3B\u9898\u540E\u5237\u65B0\uFF0C\u4E3B\u9898\u8BBE\u7F6E\u4E0D\u4F1A\u4E22\u5931\u3002
        <br />
        \u4F8B\uFF1A\u9875\u9762\u6709\u6DF1\u8272\u6A21\u5F0F\u548C\u6D45\u8272\u6A21\u5F0F\uFF0C\u4F7F\u7528 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage" target="_blank">postMessage</a> \u4FEE\u6539 Beaudar \u4E3B\u9898\u540E\uFF0C\u5237\u65B0\u9875\u9762\uFF0CBeaudar \u4E3B\u9898\u4E0D\u4F1A\u88AB\u91CD\u7F6E\u3002
      </p>
      <fieldset>
        <div>
          <label for="keep-theme">
            <input type="checkbox" id="keep-theme" />
            \u4E0D\u4FDD\u6301\u4E3B\u9898\uFF08\u9ED8\u8BA4\u4FDD\u6301\uFF09
          </label>
        </div>
      </fieldset>
      <h3 id="heading-loading">Loading \u56FE\u6807</h3>
      <p>
        \u70B9\u51FB\u52A0\u8F7D\u56FE\u6807\u53EF\u8DF3\u8F6C\u81F3\u672C\u9875\u3002
      </p>
      <fieldset>
        <div>
          <label for="loading">
            <input type="checkbox" id="loading" />
            \u4E0D\u663E\u793A Loading \u56FE\u6807\uFF08\u9ED8\u8BA4\u663E\u793A\uFF09
          </label>
        </div>
      </fieldset>
      <h3 id="heading-order">\u9009\u62E9\u8BC4\u8BBA\u987A\u5E8F</h3>
      <p>
        \u8BC4\u8BBA\u5448\u73B0\u987A\u5E8F\u6309\u8BC4\u8BBA\u7684\u53D1\u8868\u65F6\u95F4\u6392\u5E8F\u3002
        <br />
        \u5347\u5E8F\uFF1A\u4ECE\u65E9\u5230\u665A\uFF0C\u665A\u53D1\u8868\u7684\u8BC4\u8BBA\u5728\u540E\u9762\uFF1B\u964D\u5E8F\uFF1A\u4ECE\u665A\u5230\u65E9\uFF0C\u665A\u53D1\u8868\u7684\u8BC4\u8BBA\u5728\u524D\u9762\u3002
      </p>
      <fieldset>
        <div>
          <label for="comment-order">
            \u6309\u65F6\u95F4\uFF1A
          </label>
          <br />
          <select id="comment-order" class="form-select" value="asc" aria-label="Comment order">
            <option value="asc">\u5347\u5E8F\uFF08\u9ED8\u8BA4\uFF09</option>
            <option value="desc">\u964D\u5E8F</option>
          </select>
        </div>
      </fieldset>
      <h3 id="heading-input-position">\u9009\u62E9\u8BC4\u8BBA\u6846\u4F4D\u7F6E</h3>
      <p>
        \u5F53\u9009\u62E9\u5C06\u8BC4\u8BBA\u987A\u5E8F\u8BBE\u7F6E\u4E3A\u201C\u964D\u5E8F\u201D\u65F6\uFF0C\u5EFA\u8BAE\u5C06\u8BC4\u8BBA\u6846\u653E\u7F6E\u5728\u201C\u9876\u90E8\u201D\u3002\u56E0\u4E3A\u5F53\u8BC4\u8BBA\u6570\u91CF\u5F88\u591A\u65F6\u5019\uFF0C\u53D1\u8868\u8BC4\u8BBA\u540E\u53EF\u4EE5\u7B2C\u4E00\u65F6\u95F4\u770B\u5230\u8BC4\u8BBA\u53D1\u8868\u6210\u529F\u3002
      </p>
      <fieldset>
        <div>
          <label for="input-position">
            \u8BC4\u8BBA\u6846\u653E\u7F6E\u5728\uFF1A
          </label>
          <br />
          <select id="input-position" class="form-select" value="asc" aria-label="Comment order">
            <option value="bottom">\u5E95\u90E8\uFF08\u9ED8\u8BA4\uFF09</option>
            <option value="top">\u9876\u90E8</option>
          </select>
        </div>
      </fieldset>
      <h3 id="heading-enable">\u4F7F\u7528 Beaudar <span class="g-emoji">\u{1F38A}</span></h3>
      <p>
      &emsp;&emsp;\u5C06\u4EE5\u4E0B\u811A\u672C\u6807\u8BB0\u6DFB\u52A0\u5230\u535A\u5BA2\u7684\u6A21\u677F\u4E2D\u3002 \u5C06\u5176\u653E\u7F6E\u5728\u8981\u663E\u793A\u6CE8\u91CA\u7684\u4F4D\u7F6E\u3002 \u4F7F\u7528<code> .beaudar </code>\u548C<code> .beaudar-frame </code>\u9009\u62E9\u5668\u81EA\u5B9A\u4E49\u5E03\u5C40\u3002
      </p>
      <div class="config-field" id="script" class="highlight highlight-text-html-basic"></div>
      <button id="copy-button" type="button" class="btn btn-blue code-action">\u590D\u5236</button>`,this.element.addEventListener("submit",u=>u.preventDefault()),this.element.action="javascript:",this.script=this.element.querySelector("#script"),this.repo=this.element.querySelector("#repo"),this.branch=this.element.querySelector("#branch"),this.label=this.element.querySelector("#label"),this.theme=this.element.querySelector("#theme"),this.keepTheme=this.element.querySelector("#keep-theme"),this.loading=this.element.querySelector("#loading"),this.commentOrder=this.element.querySelector("#comment-order"),this.inputPosition=this.element.querySelector("#input-position"),sessionStorage.getItem("beaudar-set-theme")&&(this.theme.value=sessionStorage.getItem("beaudar-set-theme"),document.documentElement.setAttribute("theme",this.theme.value)),this.theme.addEventListener("change",()=>{let u=this.theme.value;u===l&&(u=r),document.documentElement.setAttribute("theme",u);const i={type:"set-theme",theme:u};document.querySelector("iframe").contentWindow.postMessage(i,location.origin)}),this.element.querySelector("#copy-button").addEventListener("click",()=>this.copyTextToClipboard(this.script.textContent)),this.element.addEventListener("change",()=>this.outputConfig()),this.element.addEventListener("input",()=>this.outputConfig()),this.outputConfig()}outputConfig(){const e=this.element.querySelector('input[name="mapping"]:checked');let u;e.value==="issue-number"?u=this.makeConfigScriptAttribute("issue-number","\u5728\u6B64\u5904\u8F93\u5165 Issue \u7F16\u53F7"):e.value==="specific-term"?u=this.makeConfigScriptAttribute("issue-term","\u5728\u6B64\u8F93\u5165\u540D\u79F0"):u=this.makeConfigScriptAttribute("issue-term",e.value),this.script.innerHTML=this.makeConfigScript(this.makeConfigScriptAttribute("repo",this.repo.value===""?"\u5728\u6B64\u5904\u8F93\u5165\u4ED3\u5E93":this.repo.value)+`
`+(this.branch.value?this.makeConfigScriptAttribute("branch",this.branch.value)+`
`:"")+u+`
`+(this.label.value?this.makeConfigScriptAttribute("label",this.label.value)+`
`:"")+this.makeConfigScriptAttribute("theme",this.theme.value)+`
`+(this.keepTheme.checked?this.makeConfigScriptAttribute("keep-theme","false")+`
`:"")+(this.loading.checked?this.makeConfigScriptAttribute("loading","false")+`
`:"")+(this.commentOrder.value==="desc"?this.makeConfigScriptAttribute("comment-order",this.commentOrder.value)+`
`:"")+(this.inputPosition.value==="top"?this.makeConfigScriptAttribute("input-position","top")+`
`:"")+this.makeConfigScriptAttribute("crossorigin","anonymous"))}makeConfigScriptAttribute(e,u){return`<span class="pl-s1">        <span class="pl-e">${e}</span>=<span class="pl-s"><span class="pl-pds">"</span>${u}<span class="pl-pds">"</span></span></span>`}makeConfigScript(e){return`<pre><span class="pl-s1">&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://beaudar.lipk.org/client.js<span class="pl-pds">"</span></span></span>
${e}
<span class="pl-s1">        <span class="pl-e">async</span>&gt;</span>
<span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></pre>`}copyTextToClipboard(e){const u=document.createElement("textarea");u.style.cssText="position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;box-shadow:none;background:transparent",u.value=e,document.body.appendChild(u),u.select();try{document.execCommand("copy")}catch{}document.body.removeChild(u)}}document.querySelector("h2#configuration").insertAdjacentElement("afterend",new p().element);const s=document.getElementsByTagName("a");for(let t=0;t<s.length;t++)/^(https?:)?\/\//.test(s[t].getAttribute("href"))&&(s[t].target="_blank");
