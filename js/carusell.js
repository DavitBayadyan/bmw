let imgs = [
    "https://i.pinimg.com/originals/b7/b5/ff/b7b5ff8005133e96fd6852467745df3e.jpg",
    "http://veloshelkovo.ru/wp-content/uploads/2020/05/Velo-stinger-shelkovo.jpg",
    "https://www.parkhotelbellacosta.net/wp-content/uploads/2019/02/fotolia_134156712_subscription_monthly_m-2.jpg",
    "https://i.pinimg.com/originals/da/12/1d/da121d24a88564986d4cc84b7f2f8d93.jpg"
    
]
itam_carusel.innerHTML = `<img src=${imgs[0]} alt=""/>`
let num =0 
function x(){
    if( num == imgs.length - 1){ num = 0
        itam_carusel.innerHTML = `<img src=${imgs[++num]} alt=""/>`
 }else if(num < imgs.length - 1){
    itam_carusel.innerHTML = `<img src=${imgs[++num]} alt=""/>`
}}        
 function y(){
    if( num == 0 ){ num = imgs.length - 1
        itam_carusel.innerHTML = `<img src=${imgs[--num]} alt=""/>`

 }else if(num > 0){
    itam_carusel.innerHTML = `<img src=${imgs[--num]} alt=""/>`
}}
 setInterval(function (){
    if( num == 0 ){ num = imgs.length - 1
        itam_carusel.innerHTML = `<img src=${imgs[--num]} alt=""/>`
 }else if(num > 0)itam_carusel.innerHTML = `<img src=${imgs[--num]} alt=""/>`
},4000)


