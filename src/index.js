const text = document.querySelector(".sec-text");
const textload =() =>{
    setTimeout(()=>{
        text.textContent ="new";
    },0);
    setTimeout(()=>{
        text.textContent ="year all";
    },400);
    setTimeout(()=>{
        text.textContent ="ethiopian";
    },800);

}
textload();
setInterval(textload,1200);