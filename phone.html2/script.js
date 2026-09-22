let cart = [];
let total = 0;

function addToCart(name, price){

    cart.push({name, price});

    total += parseInt(price);

    document.getElementById("count").innerText = cart.length;

    renderCart();
}

function renderCart(){

    const cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{

        cartItems.innerHTML += `
        <div class="cart-item">

            <span>${item.name}</span>

            <span>${item.price}</span>

            <button onclick="removeItem(${index})">
            Удалить
            </button>

        </div>
        `;

    });

    document.getElementById("total").innerText =
    "Итого: " + total.toLocaleString() + " сом";

}

function removeItem(index){

    total -= parseInt(cart[index].price);

    cart.splice(index,1);

    document.getElementById("count").innerText = cart.length;

    renderCart();

}