/* ==========================================
   THREADED CUSTOMER WEBSITE
========================================== */

const products = [
    {
        id: 1,
        name: "Candy Star",
        description: "Chunky pastel beads with tiny stars ♡",
        price: 499,
        color: "pink"
    },
    {
        id: 2,
        name: "Ocean Bloom",
        description: "Soft blue beads for dreamy days ✦",
        price: 549,
        color: "blue"
    },
    {
        id: 3,
        name: "Sunshine Story",
        description: "Warm yellow beads with happy little details",
        price: 449,
        color: "yellow"
    }
];


let cart = JSON.parse(localStorage.getItem("braceletCart")) || [];

let orders =
    JSON.parse(localStorage.getItem("braceletOrders")) || [];


/* ==========================================
   PRODUCTS
========================================== */

function displayProducts() {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = products.map(product => `

        <div class="product-card">

            <div class="product-art ${product.color}">

                <div class="product-mini-bracelet"></div>

            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="product-bottom">

                    <span class="price">
                        ₹${product.price}
                    </span>

                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})"
                    >
                        Add +
                    </button>

                </div>

            </div>

        </div>

    `).join("");
}


/* ==========================================
   CART
========================================== */

function addToCart(id) {

    const product = products.find(p => p.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();

    openCart();
}


function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

}


function saveCart() {

    localStorage.setItem(
        "braceletCart",
        JSON.stringify(cart)
    );

    updateCart();

}


function updateCart() {

    const count =
        cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

    document.getElementById("cartCount").textContent = count;


    const container =
        document.getElementById("cartItems");

    if (cart.length === 0) {

        container.innerHTML =
            `<p class="empty-orders">
                Your bag is feeling a little empty ♡
            </p>`;

    } else {

        container.innerHTML = cart.map(item => `

            <div class="cart-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <p>
                        ${item.quantity} × ₹${item.price}
                    </p>

                </div>

                <button
                    onclick="removeFromCart(${item.id})"
                >
                    ×
                </button>

            </div>

        `).join("");

    }


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );

    document.getElementById("cartTotal").textContent =
        `₹${total}`;

    document.getElementById("checkoutAmount").textContent =
        `₹${total}`;
}


/* ==========================================
   CART PANEL
========================================== */

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("active");

    document
        .getElementById("overlay")
        .classList.add("active");

}


function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("active");

    document
        .getElementById("overlay")
        .classList.remove("active");

}


/* ==========================================
   CHECKOUT
========================================== */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty ♡");

        return;
    }

    closeCart();

    document
        .getElementById("checkoutModal")
        .classList.add("active");

}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("active");

}


/* ==========================================
   PAYMENT + ORDER
========================================== */

document
    .getElementById("checkoutForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("customerName").value;

        const email =
            document.getElementById("customerEmail").value;

        const phone =
            document.getElementById("customerPhone").value;

        const address =
            document.getElementById("customerAddress").value;

        const city =
            document.getElementById("customerCity").value;

        const pincode =
            document.getElementById("customerPincode").value;


        const total =
            cart.reduce(
                (sum, item) =>
                    sum + item.price * item.quantity,
                0
            );


        const orderId =
            "THR-" +
            Date.now().toString().slice(-6);


        const dueDate = new Date();

        dueDate.setDate(
            dueDate.getDate() + 5
        );


        const order = {

            id: orderId,

            customer: {
                name,
                email,
                phone,
                address,
                city,
                pincode
            },

            items: cart,

            total: total,

            paymentStatus: "Paid",

            orderStatus: "Processing",

            dueDate:
                dueDate.toLocaleDateString("en-IN"),

            createdAt:
                new Date().toLocaleString("en-IN"),

            refundStatus: null

        };


        orders.push(order);


        localStorage.setItem(
            "braceletOrders",
            JSON.stringify(orders)
        );


        cart = [];

        saveCart();


        closeCheckout();


        alert(
            `Payment successful! ♡\n\nYour Order ID is ${orderId}`
        );


        displayOrders();


        document
            .getElementById("orders")
            .scrollIntoView({
                behavior: "smooth"
            });

});


/* ==========================================
   MY ORDERS
========================================== */

function displayOrders() {

    const container =
        document.getElementById("ordersList");


    if (orders.length === 0) {

        container.innerHTML =
            `<p class="empty-orders">
                Your orders will appear here after you place one. ♡
            </p>`;

        return;
    }


    container.innerHTML = orders
        .slice()
        .reverse()
        .map(order => `

            <div class="order-card">

                <div class="order-top">

                    <strong>
                        ${order.id}
                    </strong>

                    <span class="order-status">
                        ${order.orderStatus}
                    </span>

                </div>

                <p>
                    ${order.items
                        .map(item => item.name)
                        .join(", ")}
                </p>

                <p>
                    Amount:
                    <strong>₹${order.total}</strong>
                </p>

                <p>
                    Payment:
                    ${order.paymentStatus}
                </p>

                <p>
                    Expected:
                    ${order.dueDate}
                </p>

                ${
                    order.refundStatus
                    ? `<p>Refund: ${order.refundStatus}</p>`
                    : ""
                }

            </div>

        `)
        .join("");
}


/* ==========================================
   OTHER BUTTONS
========================================== */

function scrollToShop() {

    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function openSearch() {

    alert(
        "Search feature can be connected to your product catalogue ♡"
    );

}


function showWishlist() {

    alert(
        "Your wishlist will appear here ♡"
    );

}


/* ==========================================
   START
========================================== */

displayProducts();

updateCart();

displayOrders();

/* =========================================================
   MAGIC PROCESS CAPTION ANIMATION
   ========================================================= */

const magicSteps = document.querySelectorAll(".caption-step");

let magicStep = 0;

setInterval(() => {

    magicSteps.forEach(step => {
        step.classList.remove("active");
    });

    magicSteps[magicStep].classList.add("active");

    magicStep++;

    if (magicStep >= magicSteps.length) {
        magicStep = 0;
    }

}, 2000);