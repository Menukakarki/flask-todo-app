console.log("✅ JavaScript is running!");

// Add a pop-up confirmation before deleting
document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll("a[href^='/delete/']");
    
    deleteButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            const confirmDelete = confirm("Are you sure you want to delete this todo?");
            if (!confirmDelete) {
                e.preventDefault();
            }
        });
    });
});
