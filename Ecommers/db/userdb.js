//*logout
const logout = document.querySelector("#logout");
logout.addEventListener('click', () => {
    localStorage.setItem('user', JSON.stringify({}));
    location.href = '../public/index.html';
});

let count = 0;

const addProducts = () => {
    let userData = JSON.parse(localStorage.getItem('product')) || [];
    const batch = userData.slice(count, count + 6);

    if (batch.length > 0) {
        batch.forEach((item, index) => {
            let productItem = document.createElement('div');
            productItem.classList.add('product-item');

            productItem.innerHTML = `
                <h3>${item.Productname}</h3>
                <p>${item.ProductDes}</p>
                <p>Price: ${item.ProductPrice}</p>
                <img src="${item.productimg}" alt="${item.Productname}" style="width: 80px; height: 80px;">
                <button onclick="addtocart(${index})" class="add-to-cart-button">
                    Add to Cart 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </button>
                <svg onclick="wishButton(${index})" class="wishlist-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
            `;

            document.getElementById('product-list').appendChild(productItem);
        });

        count = count + 6;
    } else {
        alert('No more data in localStorage');
        document.getElementById('btn').setAttribute('class', 'loadmore-button');
    }
};

//* Load 6 initial products
addProducts();



//* Event listener for the "Load More" button
const button = document.querySelector('#btn');
button.addEventListener('click', addProducts);

//*load less...
const loadless = document.querySelector('#load-less');
loadless.addEventListener('click', () => {
    for (let i = 0; i < 6; i++) {
        const productList = document.getElementById('product-list');
        productList.removeChild(productList.lastChild);
    }

    count = count - 6;

    if (count < 0) {
        count = 0;
        alert('Already at the beginning of the list');
    }
});
//*add to cart
let addtocart = (index) => {
    const userall = JSON.parse(localStorage.getItem('user'));

    if (userall) {
        let userData = JSON.parse(localStorage.getItem('product')) || [];

        userData.forEach((item, i) => {
            if (i === index) {
                let addToCart = JSON.parse(localStorage.getItem('addtocart')) || [];

                // Check if the product is already in the cart
                const isAlreadyInCart = addToCart.some(cartItem => cartItem.Productname === item.Productname);

                if (isAlreadyInCart) {
                    alert('Product is already in the cart!');
                } else {
                    addToCart.push({
                        "Productname": item.Productname,
                        "ProductDes": item.ProductDes,
                        "ProductPrice": item.ProductPrice,
                        "productimg": item.productimg
                    });

                    localStorage.setItem('addtocart', JSON.stringify(addToCart));
                    alert('Add to cart done');
                }
            }
        });
    } else {
        location.href = '../public/index.html';
    }
};

//*cart item
const cartitem=document.querySelector('#cart-item');
cartitem.addEventListener('click',()=>{
    const userall = JSON.parse(localStorage.getItem('user'));
    if (userall) {
     location.href='../public/cartitem.html';
    }
    else{
     location.href='../public/index.html';
    }
    
})
//*Scroll Button :
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//*wish button :
function wishButton(){
    alert("wish list");
}