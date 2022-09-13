'use strict';

// Close card
const cartProducts = document.querySelector('.cart-products');

cartProducts.addEventListener('click', event => {
  if (event.target.closest('.close-card')) {
    event.target.closest('.cart-product').remove();
    removeClearBtn();
  }
});

// Clear cart
const clearBtn = document.querySelector('.cart-btn-clear');
const productsInCart = document.querySelectorAll('.cart-product');

clearBtn.addEventListener('click', () => {
  productsInCart.forEach(card => {
    card.remove();
  });

  removeClearBtn();
});

function removeClearBtn() {
  if (!document.querySelectorAll('.cart-product').length) {
    clearBtn.remove();
  }
}

// Form
const cartInputForm = document.querySelectorAll('.cart-form-input');
const cartForm = document.querySelector('.cart-form-wrapper');

cartForm.addEventListener('submit', () => {
  cartInputForm.forEach(input => {
    if (!input.value) {
      input.classList.add('error');
      event.preventDefault();
    }
  });
});

cartForm.addEventListener('input', event => {
  !event.target.value ? event.target.classList.add('error')
    : event.target.classList.remove('error');
});
