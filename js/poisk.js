const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const filterButton = document.getElementById('filter-button');

filterButton.addEventListener('click', () => {
  const minPrice = parseFloat(minPriceInput.value);
  const maxPrice = parseFloat(maxPriceInput.value);
  
  const filteredProducts = date.filter(product => {
    return product.cost >= minPrice && product.cost <= maxPrice;
  });
  
  
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.innerHTML = '';
  filteredProducts.forEach(i => {
   
    cardHt (i) 
    // :) hesht ev hangist hngers
//     cardsContainer.innerHTML += `
//     <div id="card" id="card-${product.name}" class="product-card">
//     <div class='image'>
//     <img   src=${product.img} class="img-main>
//    </div>
//     <div class="modal-content">
    
//     <h2 class="product-name">${product.name}</h2>
//     <p class="product-price">${product.wheelSize} wheelSize</p>
//     <p style="color:green"><span style="color: brown;">${product.cost}</span>$</p>
  
//     <div class="btns">
//         <button class="btn buy-btn" data-product="${product.name}" id="myBtn" onclick="basketadd(${product.id})">buy</button>
//         <button class="btn">add</button>
//     </div>
//     </div>
// </div>
//     `;

  });
});


