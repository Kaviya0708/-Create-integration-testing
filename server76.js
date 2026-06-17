// Function 1
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Function 2
function applyDiscount(total) {
    return total > 1000 ? total * 0.9 : total;
}

// Function 3
function generateInvoice(price, quantity) {
    const total = calculateTotal(price, quantity);
    const finalAmount = applyDiscount(total);

    return {
        total,
        finalAmount
    };
}

// Integration Test
function runIntegrationTest() {

    const invoice = generateInvoice(250, 5);

    let result = "";

    if (
        invoice.total === 1250 &&
        invoice.finalAmount === 1125
    ) {
        result = "✅ Integration Test Passed";
    } else {
        result = "❌ Integration Test Failed";
    }

    document.getElementById("result").innerHTML = `
        <p>Total: ₹${invoice.total}</p>
        <p>Final Amount: ₹${invoice.finalAmount}</p>
        <h3>${result}</h3>
    `;
}