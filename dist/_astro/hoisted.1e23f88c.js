import"./hoisted.e520ffe8.js";document.addEventListener("astro:page-load",()=>{const o={root:null,rootMargin:"0px",threshold:.4},r=new IntersectionObserver(function(e,i){e.forEach(function(t){if(t.isIntersecting){const s=t.target.getAttribute("id");document.querySelectorAll("[data-link]")?.forEach(function(n){n.classList.remove("underline")}),document.querySelectorAll(`[data-link="${s}"]`)?.forEach(function(n){n.classList.add("underline")})}})},o);document.querySelectorAll(".observe-link").forEach(e=>{r.observe(e)})});