
document.addEventListener("DOMContentLoaded", function () {
    const orderDetailForm = document.getElementById("new-order-detail-form");

    // Event listener for form submission
    orderDetailForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const orderIdInput = document.getElementById("order-id");
        const productIdInput = document.getElementById("product-id");
        const productNameInput = document.getElementById("product-name");

        // Create new order detail row
        const orderDetailTableBody = document.querySelector("#order-detail-table tbody");
        const newRow = orderDetailTableBody.insertRow();
        const orderIdCell = newRow.insertCell();
        const productIdCell = newRow.insertCell();
        const productNameCell = newRow.insertCell();

        // Assign input values to table cells
        orderIdCell.textContent = orderIdInput.value;
        productIdCell.textContent = productIdInput.value;
        productNameCell.textContent = productNameInput.value;

        // Clear form inputs
        orderIdInput.value = "";
        productIdInput.value = "";
        productNameInput.value = "";

        // Display success message (optional)
        alert("Order detail added successfully!");
    });
});
