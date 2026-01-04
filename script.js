// 1. Dynamic Greeting & Date
const greetingText = document.getElementById('greeting');
const dateText = document.getElementById('current-date');
const now = new Date();
const hour = now.getHours();

if (hour < 12) greetingText.innerText = "Good Morning! ☕";
else if (hour < 18) greetingText.innerText = "Good Afternoon! 🥐";
else greetingText.innerText = "Good Evening! 🌙";

dateText.innerText = `Today is ${now.toDateString()}`;

// 2. Shopping Cart Logic
let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartList = document.getElementById('cart-items-list');
const cartTotalElement = document.getElementById('cart-total');
const sidebar = document.getElementById('cart-sidebar');

// Open/Close Sidebar Logic
cartCountElement.addEventListener('click', () => sidebar.classList.add('active'));
document.getElementById('close-cart').addEventListener('click', () => sidebar.classList.remove('active'));

// Add to Cart Logic
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.parentElement;
        const name = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('.price').innerText.replace('$', ''));

        // Add item to array
        cart.push({ name, price });
        updateCartUI();
    });
});

function updateCartUI() {
    // Update count display
    cartCountElement.innerText = `Cart: ${cart.length}`;

    // Clear and rebuild the list
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    cartTotalElement.innerText = total.toFixed(2);
}
// 3. Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

// 4. Form Validation (For contact.html)
//function validateForm(event) {
  //  const email = document.getElementById('email').value;
    //if (!email.includes('@')) {
      //  alert("Please enter a valid email address.");
        //event.preventDefault();
    //}
//}
// Form Validation Logic
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('form-feedback');

        if (email.includes('@')) {
            feedback.innerText = "Thank you! Your message has been sent.";
            feedback.style.color = "green";
            contactForm.reset();
        } else {
            feedback.innerText = "Please enter a valid email address.";
            feedback.style.color = "red";
        }
    });
}