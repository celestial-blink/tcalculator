(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const styles="",templateCalculator=`<main class="tcalculator" id="tcalculator">\r
    <section class="tcalculator__header">\r
        <h1><span>TC</span>alculator</h1>\r
        <div class="tcalculator__theme-mode">\r
            <input type="checkbox" name="mode" id="mode" value="dark">\r
            <label for="mode">\r
                <i class="fas fa-moon"></i>\r
                <i class="fas fa-sun"></i>\r
            </label>\r
        </div>  \r
    </section>\r
    <section class="tcalculator__screen">\r
        <p id="operation"></p>\r
        <p> <span>=</span><span id="result"></span></p>\r
    </section>\r
    <section class="tcalculator__buttons" id="tcalculator__buttons">\r
        <button class="button-theme" data-op="(">(</button>\r
        <button class="button-theme" data-op=")">)</button>\r
        <button class="button-theme" data-op="c">C</button>\r
        <button class="button-theme" data-op="_"> <i class="fas fa-delete-left"></i> </button>\r
        <button class="button-theme" data-op="%">%</button>\r
        <button class="button-theme" data-op="/">/</button>\r
        <button class="button-theme" data-op="*">*</button>\r
        <button class="button-theme" data-op="-">-</button>\r
        <button data-op="1">1</button>\r
        <button data-op="2">2</button>\r
        <button data-op="3">3</button>\r
        <button class="button-theme" data-op="+">+</button>\r
        <button data-op="4">4</button>\r
        <button data-op="5">5</button>\r
        <button data-op="6">6</button>\r
        <button data-op="7">7</button>\r
        <button data-op="8">8</button>\r
        <button data-op="9">9</button>\r
        <button data-op="=">=</button>\r
        <button data-op="0">0</button>\r
        <button data-op=".">.</button>\r
    </section>\r
</main>`,handleTheme=a=>{const{currentTarget:o}=a,e=document.getElementById("tcalculator");o.checked?(e.classList.add("dark-mode"),window.localStorage.setItem("isDarkMode",1)):(e.classList.remove("dark-mode"),window.localStorage.setItem("isDarkMode",0))},handleStartTheme=a=>{const o=document.getElementById("tcalculator"),e=document.getElementById("mode"),r=window.localStorage.getItem("isDarkMode");let t=!1;r===null?t=!!window.matchMedia("(prefers-color-scheme: dark)").matches:t=!!(r*1),t?(o.classList.add("dark-mode"),e.checked=!0):o.classList.remove("dark-mode")},handleClick=event=>{var a,o;const{target}=event,{tagName,dataset}=target,characterFilter=new RegExp("[0-9()c%/*\\-+._c]","g"),elementResult=document.getElementById("result");if(dataset.op==="=")try{document.getElementById("operation").textContent=elementResult.textContent,elementResult.textContent=eval(elementResult.textContent)}catch(e){elementResult.style.color="red",console.log(e)}finally{return}if(elementResult.getAttribute("style")&&elementResult.removeAttribute("style"),dataset.op==="_"){let e=elementResult.textContent;e&&(elementResult.textContent=e.slice(0,-1));return}if(((o=(a=dataset==null?void 0:dataset.op)==null?void 0:a.toLowerCase())!=null?o:"")==="c"){elementResult.textContent="";return}if(tagName==="BUTTON"&&characterFilter.test(dataset.op)){if(["/",".","*","+","-","%"].includes(dataset.op)&&elementResult.textContent.slice(-1)===dataset.op)return;elementResult.textContent+=dataset.op}},startApp=()=>{document.getElementById("app").innerHTML=templateCalculator,document.getElementById("mode").addEventListener("change",handleTheme),document.getElementById("tcalculator__buttons").addEventListener("click",handleClick),handleStartTheme()};document.addEventListener("DOMContentLoaded",()=>{startApp()});
