//loading the table
document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tableBody = document.getElementById('checkout-table').querySelector('tbody');
    const totalPriceElement = document.getElementById('total-price');

    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${subtotal.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    totalPriceElement.textContent = total.toFixed(2);
});