var se=Object.defineProperty,re=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var S=(t,e,n)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,P=(t,e)=>{for(var n in e||(e={}))ae.call(e,n)&&S(t,n,e[n]);if(N)for(var n of N(e))oe.call(e,n)&&S(t,n,e[n]);return t},H=(t,e)=>re(t,ie(e));var u=(t,e,n)=>(S(t,typeof e!="symbol"?e+"":e,n),n);import{R as ue,T as F,F as le,B as _,G as q,b as w,c as $,d as ce,e as O,A as U,f as y,g as G,h as de,i as J,D as me,N as M,j as he}from"./constant-data.a00a6893.js";import"./vendor.7f937e58.js";let z;const pe=t=>{z=t,addEventListener("resize",h),addEventListener("load",h)};let X=-1;const ge=()=>{const t=document.body.scrollHeight;if(t===X)return;X=t;const e={type:"resize",height:t};parent.postMessage(e,z)};let V=0;const h=()=>{const t=Date.now();t-V>50&&(V=t,setTimeout(ge,50))},be=(t,e)=>{const n=t-e.getTime();if(n<5e3)return" \u521A\u521A";let s=0;for(;s+2<F.length&&n*1.1>F[s+2];)s+=2;const r=F[s],i=F[s+1],a=Math.round(n/r);return a>3&&s===F.length-2?`\u4E8E ${e.toLocaleDateString(void 0,le)}`:a===1?`\u4E8E 1 ${i}\u524D`:`\u4E8E ${a} ${i}\u524D`},K=(t,e,n)=>{document.documentElement.setAttribute("theme",t),addEventListener("message",s=>{JSON.parse(n)&&sessionStorage.setItem("beaudar-set-theme",s.data.theme),s.origin===e&&s.data.type==="set-theme"&&document.documentElement.setAttribute("theme",s.data.theme)})},fe=t=>(t=t.replace(/\s/g,""),decodeURIComponent(window.atob(t))),v=t=>{const e=Object.fromEntries(new URL(t.href).searchParams);let n=null,s=null;if("issue-term"in e){if(n=e["issue-term"],n!==void 0){if(n==="")throw new Error("\u6307\u5B9A\u7684 issue-term \u4E0D\u80FD\u4E3A\u7A7A");if(["title","url","pathname","og:title"].indexOf(n)!==-1){if(!e[n])throw new Error(`\u627E\u4E0D\u5230 "${n}" \u8FD9\u4E2A issue \u7684\u4FE1\u606F`);n=e[n]}}}else if("issue-number"in e){if(s=+e["issue-number"],s.toString(10)!==e["issue-number"])throw new Error(`issue-number \u65E0\u6548\uFF0C${e["issue-number"]}`)}else throw new Error('"issue-term" \u6216 "issue-number" \u662F\u5FC5\u987B\u9879');if(!("repo"in e))throw new Error('\u4ED3\u5E93 "repo" \u662F\u5FC5\u987B\u9879');if(!("origin"in e))throw new Error('\u6765\u6E90 "origin" \u662F\u5FC5\u987B\u9879');const r=ue.exec(e.repo);if(r===null)throw new Error(`\u65E0\u6548\u7684\u4ED3\u5E93 repo: "${e.repo}"`);return{owner:r[1],repo:r[2],branch:e.branch||"master",issueTerm:n,issueNumber:s,origin:e.origin,url:e.url,title:e.title,description:e.description,label:e.label,theme:e.theme||"github-light",keepTheme:e["keep-theme"]||"true",loading:e.loading||"true",commentOrder:e["comment-order"]||"asc",inputPosition:e["input-position"]||"bottom",session:e.session}},Ee=t=>{if(!t)return;let e=JSON.parse(sessionStorage.getItem("commentUserList"));e||(e=[]),e.includes(`@${t}`)||(e.push(`@${t}`),sessionStorage.setItem("commentUserList",JSON.stringify(e)))},Y=t=>{Array.from(t.querySelectorAll(":not(.email-hidden-toggle) > a")).forEach(e=>{e.target="_blank",e.rel="noopener noreferrer"}),Array.from(t.querySelectorAll("img")).forEach(e=>{var r;e.onload=h,e.title=e.alt;const n=(r=e.getAttribute("data-canonical-src"))!=null?r:e.getAttribute("src");e.src=n;const s=e.parentElement;s.nodeName==="A"&&(s.href=n)}),Array.from(t.querySelectorAll("a.commit-tease-sha")).forEach(e=>e.href="https://github.com"+e.pathname)},ve=t=>{if(JSON.parse(t.loading)){const e=document.createElement("div");e.style.cssText=`
      display: flex;
      justify-content: center;
      padding: 40px 0px 60px
      `,e.id="beaudar-box",e.innerHTML=`
      <a href="https://comment.shiyunjin.com" target="_blank">
        <div style="position: relative; margin: auto; background-color: rgb(225, 228, 233); border-radius: 50px; width: 100px; height: 100px;">
          <img
            width="50px"
            height="50px"
            style="position: absolute; top: 25px; left: 25px; z-index: 2;"
            src="https://cdn.jsdelivr.net/gh/beaudar/beaudar/src/icons/Beaudar-240.png"
            alt="Beaudar(\u8868\u8FBE)"
            title="Beaudar(\u8868\u8FBE)"
          />
          <div style="position: absolute; right: 46px; width: 0px; top: 62px; height: 0px; border-top: 49px solid rgb(225, 228, 233); border-right: 33px solid transparent; border-left: 22px solid transparent; transform: rotate(47deg);"></div>
        </div>
      </a>
      `,document.body.appendChild(e),h()}},L=()=>{const t=document.querySelector("#beaudar-box");t==null||t.remove()},W=v(location);class D{constructor(){u(this,"element");u(this,"isTimelineNull");u(this,"beaudarArticle",`
  <article class="timeline-comment">
    <a class="avatar" href="https://github.com/beaudar" target="_blank">
      <img alt="@beaudar" height="40" width="40" src="https://cdn.jsdelivr.net/gh/beaudar/beaudar/src/icons/Beaudar-340.png">
    </a>
    <div class="comment">
      <header class="comment-header">
        <span class="comment-meta">
          <a class="smallAvatar" href="https://github.com/beaudar" target="_blank">
            <img alt="@beaudar" height="20" width="20" src="https://cdn.jsdelivr.net/gh/beaudar/beaudar/src/icons/Beaudar-340.png">
          </a>
          <strong class="comment-author">Beaudar</strong> \u7CFB\u7EDF\u6D88\u606F
        </span>
      </header>
      <article id="beaudarMsg" class="markdown-body">
      </article>
    </div>
  </article>
`);const e=document.querySelector(".timeline");e===null?(this.isTimelineNull=!0,this.element=document.createElement("main"),this.element.classList.add("timeline"),this.element.innerHTML=this.beaudarArticle):(this.isTimelineNull=!1,this.element=e,document.querySelector("#beaudarMsg")===null&&(W.inputPosition==="top"&&this.element.firstElementChild.insertAdjacentHTML("afterend",this.beaudarArticle),W.inputPosition==="bottom"&&this.element.lastElementChild.insertAdjacentHTML("beforebegin",this.beaudarArticle)))}createMsgElement(e,n,s,r){let i="",a="";r&&(i='<button id="reload-button" type="button" class="btn btn-primary" >\u5237\u65B0</button>'),s&&(a=`<p><a href="https://lipk.org/blog/2020/06/08/beauder-qa/${s}" target="_blank">\u83B7\u53D6\u6B64\u95EE\u9898\u7684\u5E2E\u52A9\u4FE1\u606F</a></p>`),this.element.querySelector("#beaudarMsg").insertAdjacentHTML("beforeend",`
    <h3>${e}</h3>
    ${n}
    ${a}
    ${i}`),this.isTimelineNull&&document.body.appendChild(this.element);const l=this.element.querySelector("#reload-button");l&&(l.onclick=()=>{window.location.reload()}),h()}}const x={value:null},Ae=v(location),Z=t=>`${_}/authorize?${new URLSearchParams({redirect_uri:t})}`;async function Be(){const t=`${_}/token`,e=await fetch(t,{method:"POST",mode:"cors",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify(Ae.session)}).catch(n=>{throw new D().createMsgElement("Token \u8BF7\u6C42\u5931\u8D25","\u7F51\u7EDC\u65AD\u5F00\u6216\u7F51\u7EDC\u4E0D\u7A33\u5B9A\uFF0C\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u70B9\u51FB<code>\u5237\u65B0</code>\u91CD\u8BD5\u3002","#qtoken-\u8BF7\u6C42\u5931\u8D25",!0),L(),new Error(`token \u8BF7\u6C42\u5931\u8D25\uFF0C${n}`)});if(e.ok){const n=await e.json();x.value=n}}const o=v(location);let I;const g=(t,e)=>{e=e||{},e.mode="cors",e.cache="no-cache";const n=new Request(q+t,e);return n.headers.set("Accept",w),x.value!==null&&n.headers.set("Authorization",`token ${x.value}`),n},Q={standard:{limit:Number.MAX_VALUE,remaining:Number.MAX_VALUE,reset:0},search:{limit:Number.MAX_VALUE,remaining:Number.MAX_VALUE,reset:0}},Ce=t=>{const e=t.headers.get("X-RateLimit-Limit"),n=t.headers.get("X-RateLimit-Remaining"),s=t.headers.get("X-RateLimit-Reset"),r=/\/search\//.test(t.url),i=r?Q.search:Q.standard;if(i.limit=+e,i.remaining=+n,i.reset=+s,t.status===403&&i.remaining===0){const a=new Date(0);a.setUTCSeconds(i.reset);const l=Math.round((a.getTime()-new Date().getTime())/1e3/60),c=r?"search API":"non-search APIs";new D().createMsgElement("\u83B7\u53D6\u8BC4\u8BBA\u6570\u636E\u5931\u8D25",`<p>\u8D85\u51FA\u4E86 ${c} \u7684\u901F\u7387\u9650\u5236\uFF0C\u5728 ${l} \u5206\u949F\u540E\u91CD\u7F6E</p>`,"",!0)}},p=t=>fetch(t).then(e=>(e.status===401&&(x.value=null),e.status===403&&e.json().then(n=>{n.message==="Resource not accessible by integration"&&window.dispatchEvent(new CustomEvent("not-installed"))}),Ce(e),t.method==="GET"&&[401,403].indexOf(e.status)!==-1&&t.headers.has("Authorization")?(t.headers.delete("Authorization"),p(t)):e)),we=(t,e=!1)=>{const n=g(`repos/${o.owner}/${o.repo}/contents/${t}?ref=${o.branch}`);return e&&n.headers.set("accept",ce),p(n).then(s=>{if(s.status===404)throw new D().createMsgElement(`\u7F3A\u5C11 "${t}" \u914D\u7F6E`,`<p>\u5728\u5B58\u50A8\u5E93 "${o.owner}/${o.repo}" \u4E2D\uFF0C"${o.branch}" \u5206\u652F\u4E0B\u627E\u4E0D\u5230 "${t}"\u3002</p>`,"#q\u7F3A\u5C11-beaudarjson-\u914D\u7F6E-\u6216-\u4E0D\u5141\u8BB8-xxx-\u53D1\u5E03\u5230-xxxxxx"),new Error(`\u5728\u5B58\u50A8\u5E93 "${o.owner}/${o.repo}" \u4E2D\uFF0C"${o.branch}" \u5206\u652F\u4E0B\u627E\u4E0D\u5230 "${t}"`);if(s===void 0||!s.ok)throw new Error(`${t} \u63D0\u53D6\u5931\u8D25`);return e?s.text():s.json()}).then(s=>{if(e)return s;const{content:r}=s,i=fe(r);return JSON.parse(i)})},$e=t=>{const e=`"${t}" type:issue in:title repo:${o.owner}/${o.repo}`,n=g(`search/issues?q=${encodeURIComponent(e)}&sort=created&order=asc`);return p(n).then(s=>{if(s===void 0||!s.ok)throw new Error("\u641C\u7D22 Issues \u5931\u8D25\u3002");return s.json()}).then(s=>{if(s.total_count===0)return null;s.total_count>1&&console.warn(`\u5339\u914D\u5230\u591A\u4E2A\u95EE\u9898 "${e}"`),t=t.toLowerCase();for(const r of s.items)if(r.title.toLowerCase().indexOf(t)!==-1)return r;return console.warn(`Issue \u641C\u7D22\u7ED3\u679C\u4E2D\u6CA1\u6709\u4E0E "${t}" \u6807\u9898\u5339\u914D\u7684\u8BC4\u8BBA\u3002`),null})},xe=t=>{const e=g(`repos/${o.owner}/${o.repo}/issues/${t}`);return p(e).then(n=>{if(n===void 0||!n.ok)throw new Error("\u901A\u8FC7 Issue \u7F16\u53F7\u63D0\u53D6\u8BC4\u8BBA\u65F6\u51FA\u9519");return n.json()})},Fe=(t,e)=>{const n=`repos/${o.owner}/${o.repo}/issues/${t}/comments?page=${e}&per_page=${$}`,s=g(n),r=`${O},${w}`;return s.headers.set("Accept",r),s},f=(t,e)=>{const n=Fe(t,e);return p(n).then(s=>{if(s===void 0||!s.ok)throw new Error("\u63D0\u53D6\u8BC4\u8BBA\u65F6\u51FA\u9519\u3002");return s.json()})},De=()=>x.value===null?Promise.resolve(null):p(g("user")).then(t=>t.ok?t.json():null),ye=(t,e,n,s,r)=>{const i=`${_}/repos/${o.owner}/${o.repo}/issues${r?`?label=${encodeURIComponent(r)}`:""}`,a=new Request(i,{method:"POST",body:JSON.stringify({title:t,body:`# ${n}

${s}

[${e}](${e})`})});return a.headers.set("Accept",w),a.headers.set("Authorization",`token ${x.value}`),fetch(a).then(l=>{if(l===void 0||!l.ok)throw new Error("\u521B\u5EFA\u8BC4\u8BBA issue \u65F6\u51FA\u9519");return l.json()})},Le=(t,e)=>{const n=`repos/${o.owner}/${o.repo}/issues/${t}/comments`,s=JSON.stringify({body:e}),r=g(n,{method:"POST",body:s}),i=`${O},${w}`;return r.headers.set("Accept",i),p(r).then(a=>{if(a===void 0||!a.ok)throw new Error("\u53D1\u5E03\u8BC4\u8BBA\u65F6\u51FA\u9519");return a.json()})};async function ke(t,e){t=t.replace(q,"");const n=JSON.stringify({content:e}),s=g(t,{method:"POST",body:n});s.headers.set("Accept",w);const r=await p(s),i=r.ok?await r.json():null;if(r.status===201)return{reaction:i,deleted:!1};if(r.status!==200)throw new Error("\u9884\u671F\u7684\u201C 201 \u54CD\u5E94\u5DF2\u521B\u5EFA\u201D\u6216\u201C 200 \u54CD\u5E94\u5DF2\u5B58\u5728\u201D");const a=g(`${t}/${i.id}`,{method:"DELETE"});return a.headers.set("Accept",w),await p(a),{reaction:i,deleted:!0}}const Te=t=>{const e=JSON.stringify({text:t,mode:"gfm",context:`${o.owner}/${o.repo}`});return p(g("markdown",{method:"POST",body:e})).then(n=>n.text())};async function Se(){if(!I&&(I=await we("beaudar.json").then(t=>(Array.isArray(t.origins)||(t.origins=[]),t)),I.origins.indexOf(o.origin)===-1))throw L(),new D().createMsgElement(`\u9519\u8BEF: <code>${o.origin}</code> \u8BC4\u8BBA\u4E0D\u5141\u8BB8\u53D1\u5E03\u5230\u4ED3\u5E93 <code>${o.owner}/${o.repo}</code>`,`
    <p>&emsp;&emsp;\u8BF7\u786E\u8BA4 <code>${o.owner}/${o.repo}</code> \u662F\u672C\u7AD9\u70B9\u8BC4\u8BBA\u7684\u6B63\u786E\u4ED3\u5E93\u3002\u5982\u679C\u60A8\u62E5\u6709\u6B64\u4ED3\u5E93\uFF0C
    <a href="https://github.com/${o.owner}/${o.repo}/edit/master/beaudar.json" target="_blank">
      <strong>\u6DFB\u52A0\u6216\u66F4\u65B0 beaudar.json</strong>
    </a>
    \u6DFB\u52A0 <code>${o.origin}</code> \u5230\u6765\u6E90\u5217\u8868\u3002</p>
    <p>\u9700\u8981\u914D\u7F6E\uFF1A</p>
    <pre><code>${JSON.stringify({origins:[o.origin]},null,2)}</code></pre>
    `,"#q\u7F3A\u5C11-beaudarjson-\u914D\u7F6E-\u6216-\u4E0D\u5141\u8BB8-xxx-\u53D1\u5E03\u5230-xxxxxx"),new Error(`\u8BC4\u8BBA\u53D1\u5E03\u88AB\u7981\u6B62\uFF0C<code>${o.origin}</code> \u8BC4\u8BBA\u4E0D\u5141\u8BB8\u53D1\u5E03\u5230\u4ED3\u5E93 <code>${o.owner}/${o.repo}</code>\u3002`)}const _e=v(location),ee=(t,e,n,s)=>`
  <button
    reaction
    type="submit"
    action="javascript:"
    formaction="${t}"
    class="btn BtnGroup-item btn-outline reaction-button"
    value="${e}"
    aria-label="Toggle ${G[e]} reaction"
    reaction-count="${s}"
    ${n?"disabled":""}>
    ${de[e]}
  </button>`,Me=t=>{const e=async n=>{const s=n.target instanceof HTMLElement&&n.target.closest("button");if(!s||!s.hasAttribute("reaction")||(n.preventDefault(),!t))return;s.disabled=!0;const r=s.closest("details");r&&(r.open=!1);const i=s.formAction,a=s.value,{deleted:l}=await ke(i,a),c=`button[reaction][formaction="${i}"][value="${a}"],[reaction-count][reaction-url="${i}"]`,d=Array.from(document.querySelectorAll(c)),b=l?-1:1;for(const E of d)E.setAttribute("reaction-count",(parseInt(E.getAttribute("reaction-count"),10)+b).toString());s.disabled=!1,h()};addEventListener("click",e,!0)},te=(t,e)=>{let n="",s="";e==="center"?n="left: 50%;top: 75%;transform: translateX(-50%)":e==="right"?(s="Popover-message--top-right",n="right:11px"):e==="left"&&(s="Popover-message--bottom-left",n="transform: translateX(-1%) translateY(-133%)");const r=i=>ee(t,i,!1,0)+`<span class="reaction-name" aria-hidden="true">${G[i]}</span>`;return`
  <details class="details-overlay details-popover reactions-popover">
    <summary ${e==="center"?'tabindex="-1"':""}>${U}</summary>
    <div class="Popover" style="${n}">
      <form class="Popover-message ${s} box-shadow-large" action="javascript:">
        <span class="reaction-name">\u9009\u62E9\u4F60\u7684\u8868\u60C5\u7B26\u53F7</span>
        <div class="BtnGroup">
          ${y.slice(0,4).map(r).join("")}
        </div>
        <div class="BtnGroup">
          ${y.slice(4).map(r).join("")}
        </div>
      </form>
    </div>
  </details>`},ne=t=>{let e="",n="";return t==="center"?e="left: 50%;top: 75%;transform: translateX(-50%)":t==="right"?(n="Popover-message--top-right",e="right:11px"):t==="left"&&(n="Popover-message--bottom-left",e="transform: translateX(-1%) translateY(-133%)"),`
  <details class="details-overlay details-popover reactions-popover">
    <summary aria-label="Reactions Menu">${U}</summary>
    <div class="Popover" style="${e}">
      <div class="Popover-message ${n} box-shadow-large" style="padding: 16px">
        <span><a href="${Z(_e.url)}" target="_top">\u767B\u5F55</a> \u540E\u4F60\u53EF\u4EE5\u6DFB\u52A0\u8868\u60C5\u7B26\u53F7</span>
      </div>
    </div>
  </details>`};class Ie{constructor(e,n,s){u(this,"element");this.comment=e,this.currentUser=n;const{user:r,html_url:i,created_at:a,body_html:l,author_association:c,reactions:d}=e;this.element=document.createElement("article"),this.element.classList.add("timeline-comment"),r.login===n&&this.element.classList.add("current-user");const b=me[c],E=y.reduce((C,T)=>C+d[T],0);let A="",B="";s||(n?(A=te(e.reactions.url,"right"),B=te(e.reactions.url,"left")):(A=ne("right"),B=ne("left"))),this.element.innerHTML=`
      <a class="avatar" href="${r.html_url}" target="_blank" title="@${r.login}">
        <img alt="@${r.login}" height="40" width="40"
              src="${r.avatar_url}${J}">
      </a>
      <div class="comment">
        <header class="comment-header">
          <span class="comment-meta">
            <a class="smallAvatar" href="${r.html_url}" target="_blank" title="@${r.login}">
              <img alt="@${r.login}" height="20" width="20" src="${r.avatar_url}${J}">
            </a>
            <a class="text-link comment-author" href="${r.html_url}" target="_blank"><strong>${r.login}</strong></a>
            \u8BC4\u8BBA<a class="text-link" href="${i}" target="_blank">${be(Date.now(),new Date(a))}</a>
          </span>
          <div class="comment-actions">
            ${b?`<span class="author-association-badge">${b}</span>`:""}
            ${A}
          </div>
        </header>
        <div class="markdown-body markdown-body-scrollable">
          ${l}
        </div>
        ${E>0?`<div class="comment-footer" reaction-count="${E}" reaction-url="${d.url}">
              ${B}
              <form class="reaction-list BtnGroup" action="javascript:">
                ${y.map(C=>ee(d.url,C,!n||s,d[C])).join("")}
              </form>
            </div>`:""}
      </div>`;const k=this.element.querySelector(".markdown-body"),j=k.querySelector(".email-hidden-toggle a");if(j){const C=k.querySelector(".email-hidden-reply");j.onclick=T=>{T.preventDefault(),C.classList.toggle("expanded")}}Y(k)}setCurrentUser(e){this.currentUser!==e&&(this.currentUser=e,this.comment.user.login===this.currentUser?this.element.classList.add("current-user"):this.element.classList.remove("current-user"))}}const Re=v(location);class je{constructor(e,n){u(this,"element");u(this,"timeline",[]);u(this,"countAnchor");u(this,"marker");u(this,"count",0);u(this,"isDesc",!1);this.user=e,this.issue=n,this.element=document.createElement("main"),this.element.classList.add("timeline"),this.element.innerHTML=`
      <h1 class="timeline-header">
        <a class="text-link" target="_blank"></a>
      </h1>`,this.countAnchor=this.element.firstElementChild.firstElementChild,this.marker=document.createComment("marker"),this.element.appendChild(this.marker),this.setIssue(this.issue),this.renderCount(),this.isDesc=Re.commentOrder==="desc",sessionStorage.removeItem("commentUserList")}setUser(e){this.user=e;const n=e?e.login:null;for(let s=0;s<this.timeline.length;s++)this.timeline[s].setCurrentUser(n);h()}setIssue(e){this.issue=e,e?(this.count=e.comments,this.countAnchor.href=e.html_url,this.renderCount()):this.countAnchor.removeAttribute("href")}insertComment(e,n){var i,a,l;((i=this.user)==null?void 0:i.login)!==((a=e.user)==null?void 0:a.login)&&Ee((l=e.user)==null?void 0:l.login);const s=new Ie(e,this.user?this.user.login:null,this.issue.locked),r=this.timeline.findIndex(c=>this.isDesc?c.comment.id<=e.id:c.comment.id>=e.id);if(r===-1)this.timeline.push(s),this.element.insertBefore(s.element,this.marker);else{const c=this.timeline[r],d=c.comment.id===e.id;this.element.insertBefore(s.element,c.element),this.timeline.splice(r,d?1:0,s),d&&c.element.remove()}n&&(this.count++,this.renderCount()),h()}insertPageLoader(e,n,s){const{element:r}=this.timeline.find(c=>this.isDesc?c.comment.id<=e.id:c.comment.id>=e.id);r.insertAdjacentHTML("afterend",`
      <div class="page-loader">
        <div class="zigzag"></div>
        <button type="button" class="btn btn-outline btn-large">
          ${n} \u6761\u8BC4\u8BBA\u88AB\u6536\u8D77<br/>
          <span>\u52A0\u8F7D\u66F4\u591A</span>
        </button>
      </div>
    `);const i=r.nextElementSibling,a=i.lastElementChild,l=a.lastElementChild;return a.onclick=s,{setBusy(){l.textContent="\u52A0\u8F7D\u4E2D\u2026",a.disabled=!0},remove(){a.onclick=null,i.remove()}}}renderCount(){this.countAnchor.textContent=`${this.count>=1?`${this.count} \u6761\u8BC4\u8BBA`:"\u8FD8\u6CA1\u6709\u8BC4\u8BBA"}`}}const Ne=v(location);class Pe{constructor(e,n){u(this,"element");u(this,"avatarAnchor");u(this,"avatar");u(this,"form");u(this,"textExpander");u(this,"textarea");u(this,"preview");u(this,"submitButton");u(this,"signInAnchor");u(this,"submitting",!1);u(this,"renderTimeout",setTimeout(()=>{}));u(this,"handleInput",()=>{const e=this.textarea.value,n=/^\s*$/.test(e);this.submitButton.disabled=n,this.textarea.scrollHeight<450&&this.textarea.offsetHeight<this.textarea.scrollHeight&&(this.textarea.style.height=`${this.textarea.scrollHeight}px`,h()),clearTimeout(this.renderTimeout),n?this.preview.textContent=M:(this.preview.textContent="\u52A0\u8F7D\u9884\u89C8\u4E2D\u2026",this.renderTimeout=setTimeout(()=>Te(e).then(s=>this.preview.innerHTML=s).then(()=>Y(this.preview)).then(h),500))});u(this,"textExpand",()=>{this.textExpander.addEventListener("text-expander-change",e=>{const n=e,{key:s,provide:r,text:i}=n.detail;if(s==="@"){const a=document.createElement("ul");a.id="option-userList",a.classList.add("suggester","position-absolute","list-style-none");const l=JSON.parse(sessionStorage.getItem("commentUserList"))||[];if((l==null?void 0:l.length)>0){for(const c of l)if(c.toLowerCase().includes(i.toLowerCase())){const d=document.createElement("li");d.setAttribute("role","option"),d.textContent=c,d.setAttribute("data-value",c.split(" ")[0]),d.id=`option-${c.split(" ")[0]}`,a.append(d)}r(Promise.resolve({matched:!0,fragment:a}))}}}),this.textExpander.addEventListener("text-expander-value",e=>{const n=e,{key:s,item:r}=n.detail;s==="@"&&(n.detail.value=r.getAttribute("data-value")||r.textContent)})});u(this,"handleSubmit",async e=>{e.preventDefault(),!this.submitting&&(this.submitting=!0,this.textarea.disabled=!0,this.submitButton.disabled=!0,await this.submit(this.textarea.value).catch(()=>0),this.submitting=!1,this.textarea.disabled=!this.user,this.textarea.value="",this.submitButton.disabled=!1,this.handleClick(H(P({},e),{target:this.form.querySelector(".tabnav-tab.tab-write")})),this.preview.textContent=M)});u(this,"handleClick",({target:e})=>{if(!(e instanceof HTMLButtonElement)||!e.classList.contains("tabnav-tab")||e.getAttribute("aria-selected")==="true")return;this.form.querySelector('.tabnav-tab[aria-selected="true"]').setAttribute("aria-selected","false"),e.setAttribute("aria-selected","true");const n=e.classList.contains("tab-preview");this.textarea.style.display=n?"none":"",this.preview.style.display=n?"":"none",h()});u(this,"handleKeyDown",({key:e,ctrlKey:n})=>{e==="Enter"&&n&&!this.submitButton.disabled&&this.form.dispatchEvent(new CustomEvent("submit"))});this.user=e,this.submit=n,this.element=document.createElement("article"),this.element.classList.add("timeline-comment"),this.element.innerHTML=`
      <a class="avatar" target="_blank">
        <img height="40" width="40">
      </a>
      <form class="comment" accept-charset="UTF-8" action="javascript:">
        <header class="new-comment-header tabnav">
          <nav class="tabnav-tabs" role="tablist">
            <button type="button" class="tabnav-tab tab-write"
                    role="tab" aria-selected="true">
              \u7F16\u8F91
            </button>
            <button type="button" class="tabnav-tab tab-preview"
                    role="tab">
              \u9884\u89C8
            </button>
          </nav>
        </header>
        <div class="comment-body">
          <text-expander keys="@">
            <textarea class="form-control" aria-label="comment"></textarea>
          </text-expander>
          <div class="markdown-body" style="display: none">
            ${M}
          </div>
        </div>
        <footer class="new-comment-footer">
          <a class="text-link markdown-info" target="_blank"
             href="https://guides.github.com/features/mastering-markdown/">
            <svg class="octicon v-align-bottom" viewBox="0 0 16 16" version="1.1"
              width="16" height="16" aria-hidden="true">
              <path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15
                13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4
                8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z">
              </path>
            </svg>
            <span>\u652F\u6301 Markdown \u683C\u5F0F</span>
          </a>
          <button class="btn btn-primary" type="submit" title="\u53D1\u8868\u8BC4\u8BBA\uFF08Ctrl+Enter\uFF09">\u53D1\u8868\u8BC4\u8BBA</button>
          <a class="btn btn-primary" href="${Z(Ne.url)}" target="_top"><svg class="octicon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          <span class="useGithub">\u4F7F\u7528 </span>GitHub \u767B\u5F55</a>
        </footer>
      </form>`,this.avatarAnchor=this.element.firstElementChild,this.avatar=this.avatarAnchor.firstElementChild,this.form=this.avatarAnchor.nextElementSibling,this.textExpander=this.form.firstElementChild.nextElementSibling.firstElementChild,this.textarea=this.form.firstElementChild.nextElementSibling.firstElementChild.firstElementChild,this.preview=this.form.firstElementChild.nextElementSibling.lastElementChild,this.signInAnchor=this.form.lastElementChild.lastElementChild,this.submitButton=this.signInAnchor.previousElementSibling,this.setUser(e),this.submitButton.disabled=!0,this.textarea.addEventListener("input",this.handleInput),this.form.addEventListener("submit",this.handleSubmit),this.form.addEventListener("click",this.handleClick),this.form.addEventListener("keydown",this.handleKeyDown),He(this.textarea),this.textExpand()}setUser(e){this.user=e,this.submitButton.hidden=!e,this.signInAnchor.hidden=!!e,e?(this.avatarAnchor.href=e.html_url,this.avatar.alt="@"+e.login,this.avatar.src=e.avatar_url+"?v=3&s=88",this.textarea.disabled=!1,this.textarea.placeholder="\u5199\u4E0B\u60A8\u7684\u8BC4\u8BBA"):(this.avatarAnchor.removeAttribute("href"),this.avatar.alt="@beaudar",this.avatar.src=he,this.textarea.disabled=!0,this.textarea.placeholder="\u767B\u5F55\u540E\u8BC4\u8BBA")}clear(){this.textarea.value=""}}const He=t=>{const e=()=>{removeEventListener("mousemove",h),removeEventListener("mouseup",e)},n=()=>{addEventListener("mousemove",h),addEventListener("mouseup",e)};t.addEventListener("mousedown",n)},m=v(location),qe=()=>m.issueNumber!==null?xe(m.issueNumber):$e(m.issueTerm);async function Oe(){pe(m.origin),ve(m),JSON.parse(m.keepTheme)&&sessionStorage.getItem("beaudar-set-theme")?K(sessionStorage.getItem("beaudar-set-theme"),m.origin,m.keepTheme):K(m.theme,m.origin,m.keepTheme);let t,e;await Be();try{[t,e]=await Promise.all([qe(),De()]),L()}catch(i){throw L(),new D().createMsgElement("\u65E0\u6CD5\u4ECE GitHub \u83B7\u53D6\u6570\u636E",`<ol>
        <li>\u70B9\u51FB<code>\u5237\u65B0</code>\u6309\u94AE\uFF0C\u5C1D\u8BD5\u89E3\u51B3\u6B64\u95EE\u9898\u3002</li>
        <li>\u70B9\u51FB
          <a href="https://github.com/${m.owner}/${m.repo}/issues" target="_blank">\u8FD9\u91CC</a>
          \u6D4F\u89C8\u6216\u63D0\u4EA4 Issue\u3002
        </li>
      </ol>`,"#q\u65E0\u6CD5\u4ECE-github-\u83B7\u53D6\u6570\u636E",!0),new Error(`api.github.com \u8BF7\u6C42\u5931\u8D25\u3002${i}`)}const n=new je(e,t);if(document.body.appendChild(n.element),t&&t.comments>0&&Ue(t,n),h(),t&&t.locked)return;Me(!!e);const s=async i=>{await Se(),t||(t=await ye(m.issueTerm,m.url,m.title,m.description||"",m.label),n.setIssue(t));const a=await Le(t.number,i);n.insertComment(a,!0),r.clear()},r=new Pe(e,s);m.inputPosition==="top"?n.element.insertAdjacentElement("afterbegin",r.element):n.element.appendChild(r.element)}Oe();addEventListener("not-installed",function t(){removeEventListener("not-installed",t),document.querySelector(".timeline").insertAdjacentHTML("afterbegin",`
  <div class="flash flash-error">
    \u9519\u8BEF: Beaudar \u6CA1\u6709\u5B89\u88C5\u5728 <code>${m.owner}/${m.repo}</code>\u3002
    \u5982\u679C\u4F60\u62E5\u6709\u8FD9\u4ED3\u5E93\uFF0C
    <a href="https://github.com/apps/beaudar" target="_blank"><strong>\u5B89\u88C5 app</strong></a>\u3002
  </div>`),h()});const R=(t,e)=>t%e<3&&t%e!=0;async function Ue(t,e){const n=d=>{for(const b of d)e.insertComment(b,!1)},s=Math.ceil(t.comments/$);let r=e.isDesc?s-1:2,i=[];e.isDesc?(s>1&&(i.push(f(t.number,s)),s>2&&R(t.comments,$)&&(r=s-2,i.push(f(t.number,s-1)))),i.push(f(t.number,1))):(i=[f(t.number,1)],s>1&&i.push(f(t.number,s)),s>2&&R(t.comments,$)&&(r=2,i.push(f(t.number,s-1))));const a=await Promise.all(i);for(const d of a)n(d);let l=s-i.length;const c=d=>{if(l===0)return;const b=async()=>{A.setBusy();const B=await f(t.number,r);A.remove(),n(B),l--,r=e.isDesc?--r:++r,c(B)},E=e.isDesc?d.shift():d.pop(),A=e.insertPageLoader(E,l*$,b)};e.isDesc&&R(t.comments,$)?c(a[1]):c(a[0])}
