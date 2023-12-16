let minCard = 0
let maxCard = 24
let h =0
let manu = []
let ejer =   date.length / 25
const baskerCards = []
function cardHt (i){
    document.querySelector('.cards').innerHTML +=`
    <div class="card">
    <img style="width:100%; height:200px;"  src=${i.img}>
    <h2 class="product-name">${i.name}</h2>
    <p class="size">${i.wheelSize} wheelSize</p>
    <p style="color:green"><span style="color:green;">${i.cost}</span>$</p>
    <div class="btns">
        <button class="btn"  onclick="basketadd(${i.id})">buy</button>
        <button class="btn">add</button>
    </div>
</div> `
}

const searchInput = document.getElementById('search');


searchInput.addEventListener('input', (event) => {

 const searchValue = event.target.value.toLowerCase();

const productCards = document.querySelectorAll('.card');

productCards.forEach((productCard) => {

const productName = productCard.querySelector('.product-name').textContent.toLowerCase();
const productSize = productCard.querySelector('.size').textContent;

  if (productName.includes(searchValue)) {

      productCard.style.display = 'block';
    } 
  else  if (productSize.includes(searchValue)) {

      productCard.style.display = 'block';
    } 
    else {
      productCard.style.display = 'none';
      
}
   
  });
 

});




function base(){ 
    date.slice(0,25).forEach(e=>{
    if(search.value == ''){cardHt (e)}})}
base()
function basel(){
    document.querySelector('.cards').innerHTML =""
    date.slice(0,25).forEach(e=>{
    cardHt (e)})}
function carderiks(){
    document.querySelector('.cards').innerHTML = ""
//     date.forEach(e=>{
// if(search.value === e.name){ 
//     cardHt (e)}
// })
}
date.forEach(e=>{
    manu.push(e.name)
})
function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);}}
    return result;
  }
unique(manu).forEach((e,i)=>{
    if(i<5){
        document.querySelector('.burger').style.display = "none"
        menu.innerHTML +=`
        <li onclick="sortbacick(${i})")>${e}</li>
        `
    }else if(i>4){
        document.querySelector('.burger').style.display = "block"
        manMenu.innerHTML +=`
        <li onclick="sortbacick(${i})")>${e}</li>
        `
    }})
function sortbacick(i){
    document.querySelector('.cards').innerHTML = ""
    date.forEach(e=>{
        if(e.name === unique(manu)[i]){
            cardHt (e)
    }})}
function burger() {
    manMenu.style.display == "flex" ? manMenu.style.display = "none" :manMenu.style.display = "flex"
    manMenu.style.justifyContent="space-between"
}
function pages() {
    pag.innerHTML += `
        <button id="${++h}" onclick="qsanhing(${h})">${h}</button>
    `
   if(maxCard < date.length){
    date.slice(minCard,maxCard)
    minCard = maxCard + 1
    maxCard +=  25
    pages()
   }}
pages()
function qsanhing(i) {
  let num = i*25
  document.querySelector('.cards').innerHTML = ""
  // console.log( date.slice(num-25,num));
  date.slice(num-25,num).forEach(e=>{cardHt (e)})
}

// function basketadd(e){

//     baskerCards.innerHTML +=`
//     <div class="card " >
//     <img width="100%" src=${e.img}>
//     <h2>${e.name}</h2>
//     <p>${e.wheelSize} wheelSize</p>
//     <div class="btns">
//         <button class="btn">delete</button>
//     </div>
// </div> `
    
//     basketSum.innerHTML = baskerCards.length
// }





let baskerCardss = []
let nextBasketItemId = 1; 
const basketSum = document.getElementById('basketSum');
const baskerCard = document.getElementById('baskerCard');
const totalPrice = document.getElementById('totalPrice');

function basketadd(e) {
  
  const item = date[e - 1];
  const existingItem = baskerCardss.find(i => i.id === item.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    item.basketId = nextBasketItemId++;
    item.quantity = 1;
    baskerCardss.push(item);
  }


 
   renderBasketItems();
calculateTotalPrice()
  basketSum.innerHTML = parseInt(basketSum.innerHTML) + 1;
}

function basketdelete(basketId) {

  const index = baskerCardss.findIndex(item => item.basketId === basketId);
  if (index !== -1) {
    const item = baskerCardss[index];
    item.quantity--;

    if (item.quantity === 0) {
      baskerCardss.splice(index, 1);
    }
  }

 
     renderBasketItems();
calculateTotalPrice()

  basketSum.innerHTML = parseInt(basketSum.innerHTML) - 1;
}
function renderBasketItems() {
  baskerCard.innerHTML = "";
  baskerCardss.forEach(i => {
    
    baskerCard.innerHTML += 
    // cardHt (i)
    `
      
   
    <div id="cardKarzina"  class="product-card">
    
      <div class="cardbasket" id="basketItem${i.basketId}">
      <div class='image2'>
      <img class="imgKorzina" src=${i.img}>
      </div>
      <h2>${i.name}</h2>
      <hr>
        <p>${i.wheelSize}wheelSize</p>
        <div class="pro">
    <p  class="product-id">id:${i.id} </p>
    <p style="color:rgb(10, 107, 76)" class="cost"><span style="color: green;">${i.cost }</span>$</p> 
    </div>
        <p>Quantity: ${i.quantity}</p>
        <button class="btnKarzina" onclick="basketdelete(${i.basketId})">delete</button>
      </div>

      </div>
     
     
     `;
  });
}


function calculateTotalPrice() {
  let total = 0;
  baskerCardss.forEach(item => {
    total += parseInt(item.cost )* item.quantity  ;
  });
  totalPrice.innerHTML = total +"$";
  if (total==0) {
    console.log(0);
  }
}



//=====         MODAL   ==============================================

var modal2 = document.getElementById("myModalq");

var btn2 = document.getElementById("myBtnmy");

var span2 = document.getElementsByClassName("close22")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }

}

