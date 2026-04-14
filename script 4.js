let cart = [];
let total = 0;

// LOGIN SYSTEM
function signup() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    document.getElementById("message").textContent = "Signup successful!";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === localStorage.getItem("user") && pass === localStorage.getItem("pass")) {
        document.getElementById("welcome").textContent = "Welcome " + user;
        document.getElementById("message").textContent = "Login successful!";
    } else {
        document.getElementById("message").textContent = "Invalid login!";
    }
}

// CART
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    displayCart();
    updateTotal();
}

function displayCart() {
    let list = document.getElementById("cart");
    list.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        list.appendChild(li);
    });
}

function updateTotal() {
    document.getElementById("total").textContent = total;
}

// ORDER
function placeOrder() {
    if (cart.length === 0) {
        document.getElementById("orderMsg").textContent = "Cart is empty!";
    } else {
        document.getElementById("orderMsg").textContent = "Order placed successfully!";
        clearCart();
    }
}

function clearCart() {
    cart = [];
    total = 0;
    displayCart();
    updateTotal();
}