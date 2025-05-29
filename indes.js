let div = document.getElementById('animate');
let img = document.getElementById('img');
let h2 = document.getElementById('h2');
let nav = document.getElementsByClassName('navbar')[0];
window.onload = function(){
    img.classList.remove('start')
    img.classList.add('end')
}

setTimeout(()=>{
    h2.style.opacity = 1
},1200)

setTimeout(()=>{
    h2.style.opacity = 0
},2500)
setTimeout(()=>{
    img.style.cssText = " transition-duration:2s; transform:translate(calc(41px - 50vw), calc(45px - 50vh));;position: absolute;width: 50px;"
},3000)
setTimeout(()=>{
    nav.style.opacity = 1;
    nav.style.pointerEvents = "auto";
},5000)
// setTimeout(()=>{
//     div.style.opacity = 0
//     nav.style.opacity = 1;
// },6000)
//     setTimeout(()=>{
//         div.style.display = "none"
//     },7000)
