let hours=document.getElementById("hour");
let mint=document.getElementById("minit");
let sec=document.getElementById("second");

setInterval(() => {
    let currentdate=new Date();
hours.innerHTML=currentdate.getHours();
mint.innerHTML=currentdate.getMinutes();
sec.innerHTML=currentdate.getSeconds();

},1000);
