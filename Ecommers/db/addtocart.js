// //* cart.js
document.addEventListener('DOMContentLoaded', displayCart);

function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const addToCart = JSON.parse(localStorage.getItem('addtocart')) || [];

    addToCart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <h3>${item.Productname}</h3>
            <p>${item.ProductDes}</p>
            <p>Price: $<span class="price">${item.ProductPrice}</span></p>
            <img src="${item.productimg}" alt="${item.Productname}" style="max-width: 100%; height: auto;">
            <div class="quantity-buttons">
                <button class="quantity-button" onclick="decreaseQuantity(${index})">-</button>
                <span class="quantity">${item.quantity || 1}</span>
                <button class="quantity-button" onclick="increaseQuantity(${index})">+</button>
                
            </div>
            <button onclick="Buy(${index})">Buy
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
            </button>

            <button class="delete-button" onclick="deleteItem(${index})">Delete
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
            </button>
        `;

        cartItemsDiv.appendChild(cartItem);
    });

}

function increaseQuantity(index) {
    let addToCart = JSON.parse(localStorage.getItem('addtocart')) || [];
    if (index >= 0 && index < addToCart.length) {
        addToCart[index].quantity = (addToCart[index].quantity || 1) + 1;
        addToCart[index].ProductPrice *= addToCart[index].quantity;
        localStorage.setItem('addtocart', JSON.stringify(addToCart));
        //*update the price ..
        const quantitySpan = document.querySelectorAll('.quantity')[index];
        const priceSpan = document.querySelectorAll('.price')[index];
        quantitySpan.textContent = addToCart[index].quantity;
        priceSpan.textContent = addToCart[index].ProductPrice;

        //alert('Quantity increased');
    } else {
        alert('Invalid index');
    }
}

function decreaseQuantity(index) {
    let addToCart = JSON.parse(localStorage.getItem('addtocart')) || [];
    if (index >= 0 && index < addToCart.length) {
        addToCart[index].quantity = Math.max((addToCart[index].quantity || 1) - 1, 1);
        addToCart[index].ProductPrice /= addToCart[index].quantity;
        localStorage.setItem('addtocart', JSON.stringify(addToCart));
        
        const quantitySpan = document.querySelectorAll('.quantity')[index];
        const priceSpan = document.querySelectorAll('.price')[index];
        quantitySpan.textContent = addToCart[index].quantity;
        priceSpan.textContent = addToCart[index].ProductPrice;

        alert('Quantity decreased');
    } else {
        alert('Invalid index');
    }
}

//* Privious page...
const exits = document.querySelector('#exits');
exits.addEventListener('click', () => {
    location.href = '../public/userdashboard.html';
});

//*Delete :
function deleteItem(index) {
    let addToCart = JSON.parse(localStorage.getItem('addtocart')) || [];
    if (index >= 0 && index < addToCart.length) {
        addToCart.splice(index, 1);
        localStorage.setItem('addtocart', JSON.stringify(addToCart));
        // Remove the deleted item from the HTML
        const cartItemsDiv = document.getElementById('cart-items');
        cartItemsDiv.removeChild(cartItemsDiv.childNodes[index]);
        alert('Item deleted from the cart');
    } else {
        alert('Invalid index');
    }
    window.location.reload();
}

function Buy(index){
    const userData=JSON.parse(localStorage.getItem('addtocart'))||[];
    userData.forEach((item,i)=>{
        if(i===index){
            console.log(item);
            localStorage.setItem('orderpage',JSON.stringify(item));
        }
    })
    location.href='../public/Buyoption.html';
}


