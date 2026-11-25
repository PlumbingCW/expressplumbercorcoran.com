(function(){
var d=document,h=d.documentElement;h.classList.add("js");
var burger=d.querySelector(".burger");
function setOpen(o){h.classList.toggle("mob-open",o);h.style.overflow=o?"hidden":"";if(burger){burger.setAttribute("aria-expanded",o?"true":"false");}}
if(burger){burger.addEventListener("click",function(){setOpen(!h.classList.contains("mob-open"));});}
d.addEventListener("click",function(e){var t=e.target;
if(t.closest&&(t.closest(".mob-close")||t.hasAttribute("data-close"))){setOpen(false);}
else if(t.closest&&t.closest(".mob-drawer a")){setOpen(false);}
var q=t.closest&&t.closest(".faq-q");
if(q){var it=q.parentNode;var o=it.classList.toggle("open");q.setAttribute("aria-expanded",o?"true":"false");}});
d.addEventListener("keydown",function(e){if(e.key==="Escape"){setOpen(false);}});
var mq=window.matchMedia("(min-width:769px)");
function onMq(){if(mq.matches){setOpen(false);}}
if(mq.addEventListener){mq.addEventListener("change",onMq);}
})();
