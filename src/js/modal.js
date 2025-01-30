document.addEventListener('DOMContentLoaded',()=>{

    let btn1 = document.createElement("button");
    btn1.innerText = "Atvērt logu";
    btn1.classList.add("btn","btn-danger");
    btn1.onclick = ()=>{
        window.open("https://www.mozilla.org/", "mozillaTab,width=500");

    }
    document.body.appendChild(btn1);
    console.log(btn1);
})