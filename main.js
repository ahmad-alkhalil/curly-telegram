let el= document.querySelector(".scroller");
hieght = document.documentElement.scrollHeight-document.documentElement.clientHeight;
window.addEventListener(("scroll"), () => {
    scrollTop=document.documentElement.scrollTop
    el.style.width=`${(scrollTop/hieght)*100}%`

})
