
let modal = document.getElementById("myModal");
let modal1 = document.getElementById("myModalq");
let modal3 = document.getElementById("myModal3");
let btn = document.getElementById("myBtn");
let btn3 = document.getElementById("myBtnLog");
let btn1 = document.getElementById("myBtn1");
let span = document.getElementsByClassName("close")[0];
let span3 = document.getElementsByClassName("close3")[0];
let span1 = document.getElementsByClassName("close22")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

// btn1.onclick = function() {
//     modal1.style.display = "block";
//   }
  btn3.onclick = function() {
    modal3.style.display = "block";
  }
// span1.onclick = function() {
//   modal1.style.display = "none";
// }
span.onclick = function() {
    modal.style.display = "none";
  }
  span3.onclick = function() {
    modal3.style.display = "none";
  }
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

