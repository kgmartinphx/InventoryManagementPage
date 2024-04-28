// Function to fetch vendors from the server and populate the vendor list
function fetchVendors() {
    // Make an AJAX request to fetch vendors from the server
    // Replace the placeholder URL with the actual endpoint URL for fetching vendors
    fetch('api/vendors')
        .then(response => response.json())
        .then(vendors => {
            const vendorList = document.getElementById('vendor-list');
            vendorList.innerHTML = ''; // Clear existing list

            vendors.forEach(vendor => {
                const listItem = document.createElement('li');
                listItem.textContent = vendor.name;
                vendorList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching vendors:', error));
}

// Function to add a new vendor
function addVendor(vendorName) {
    // Make an AJAX request to add a new vendor to the server
    // Replace the placeholder URL with the actual endpoint URL for adding vendors
    fetch('api/vendors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: vendorName })
    })
        .then(response => {
            if (response.ok) {
                // If vendor added successfully, fetch and update the vendor list
                fetchVendors();
            } else {
                throw new Error('Failed to add vendor');
            }
        })
        .catch(error => console.error('Error adding vendor:', error));
}

// Function to edit an existing vendor
function editVendor(vendorId, newName) {
    // Make an AJAX request to edit an existing vendor on the server
    // Replace the placeholder URL with the actual endpoint URL for editing vendors
    fetch(`api/vendors/${vendorId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newName })
    })
        .then(response => {
            if (response.ok) {
                // If vendor edited successfully, fetch and update the vendor list
                fetchVendors();
            } else {
                throw new Error('Failed to edit vendor');
            }
        })
        .catch(error => console.error('Error editing vendor:', error));
}

// Function to delete a vendor
function deleteVendor(vendorId) {
    // Make an AJAX request to delete a vendor from the server
    // Replace the placeholder URL with the actual endpoint URL for deleting vendors
    fetch(`api/vendors/${vendorId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                // If vendor deleted successfully, fetch and update the vendor list
                fetchVendors();
            } else {
                throw new Error('Failed to delete vendor');
            }
        })
        .catch(error => console.error('Error deleting vendor:', error));
}

// Add event listener to form for adding new vendor
const addVendorForm = document.getElementById('add-vendor-form');
addVendorForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    const vendorName = this.elements['vendor-name'].value;
    addVendor(vendorName);
    this.reset(); // Reset form fields after adding vendor
});

// Add event listener to form for editing vendor
const editVendorForm = document.getElementById('edit-vendor-form');
editVendorForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    const vendorId = /* Get vendor ID */;
    const newName = this.elements['edit-vendor-name'].value;
    editVendor(vendorId, newName);
    this.reset(); // Reset form fields after editing vendor
});

// Add event listener to delete vendor button
const deleteVendorButton = document.getElementById('delete-vendor-button');
deleteVendorButton.addEventListener('click', function () {
    const vendorId = /* Get selected vendor ID from select element */;
    deleteVendor(vendorId);
});

// Initial fetch of vendors when the page loads
fetchVendors();

