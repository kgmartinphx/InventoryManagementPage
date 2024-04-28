// Function to fetch categories from the server and populate the category list
function fetchCategories() {
    // Make an AJAX request to fetch categories from the server
    // Replace the placeholder URL with the actual endpoint URL for fetching categories
    fetch('api/categories')
        .then(response => response.json())
        .then(categories => {
            const categoryList = document.getElementById('category-list');
            categoryList.innerHTML = ''; // Clear existing list

            categories.forEach(category => {
                const listItem = document.createElement('li');
                listItem.textContent = category.name;
                categoryList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
}

// Function to add a new category
function addCategory(categoryName) {
    // Make an AJAX request to add a new category to the server
    // Replace the placeholder URL with the actual endpoint URL for adding categories
    fetch('api/categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: categoryName })
    })
        .then(response => {
            if (response.ok) {
                // If category added successfully, fetch and update the category list
                fetchCategories();
            } else {
                throw new Error('Failed to add category');
            }
        })
        .catch(error => console.error('Error adding category:', error));
}

// Function to edit an existing category
function editCategory(categoryId, newName) {
    // Make an AJAX request to edit an existing category on the server
    // Replace the placeholder URL with the actual endpoint URL for editing categories
    fetch(`api/categories/${categoryId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newName })
    })
        .then(response => {
            if (response.ok) {
                // If category edited successfully, fetch and update the category list
                fetchCategories();
            } else {
                throw new Error('Failed to edit category');
            }
        })
        .catch(error => console.error('Error editing category:', error));
}

// Function to delete a category
function deleteCategory(categoryId) {
    // Make an AJAX request to delete a category from the server
    // Replace the placeholder URL with the actual endpoint URL for deleting categories
    fetch(`api/categories/${categoryId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                // If category deleted successfully, fetch and update the category list
                fetchCategories();
            } else {
                throw new Error('Failed to delete category');
            }
        })
        .catch(error => console.error('Error deleting category:', error));
}

// Add event listener to form for adding new category
const addCategoryForm = document.getElementById('add-category-form');
addCategoryForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    const categoryName = this.elements['category-name'].value;
    addCategory(categoryName);
    this.reset(); // Reset form fields after adding category
});

// Add event listener to form for editing category
const editCategoryForm = document.getElementById('edit-category-form');
editCategoryForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    const categoryId = /* Get category ID */;
    const newName = this.elements['edit-category-name'].value;
    editCategory(categoryId, newName);
    this.reset(); // Reset form fields after editing category
});

// Add event listener to delete category button
const deleteCategoryButton = document.getElementById('delete-category-button');
deleteCategoryButton.addEventListener('click', function () {
    const categoryId = /* Get selected category ID from select element */;
    deleteCategory(categoryId);
});

// Initial fetch of categories when the page loads
fetchCategories();

