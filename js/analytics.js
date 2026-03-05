// Google tag (gtag.js)
// load google tag script dynamically
function loadScript(src, async = true) {
    const s = document.createElement("script");
    s.src = src;
    s.async = async;
    document.head.appendChild(s);
}
loadScript("https://www.googletagmanager.com/gtag/js?id=G-44K47CQEKZ")

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-44K47CQEKZ');
// 
// <!-- Clarity tracking code for https://abcroot.xyz/ -->
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vqy58i0lc9");
