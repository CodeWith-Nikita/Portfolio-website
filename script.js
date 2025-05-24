// window.alert("Himanshu_Portfolio_Website");


// Wait until the webpage is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select all navigation links inside buttons
    const buttons = document.querySelectorAll(".nav-options");

    // Select all sections that act as pages
    const pages = document.querySelectorAll(".page");

    // Loop through each button and add a click event
    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Stops the default behavior (page jump)

            // Get the target section ID from the button's ID (removing 'option-' prefix)
            const targetId = button.id.replace("option-", "");

            // Hide all sections first
            pages.forEach(function (page) {
                page.classList.remove("active");
                 setTimeout(() => {
                    page.style.display = "none"; // Fully hide after animation ends
                }, 500); // Delay matches the CSS transition duration
            });

            // Show the selected section smoothly
            const targetPage = document.getElementById(targetId);
            setTimeout(() => {
                targetPage.style.display = "block"; // Make it visible
                setTimeout(() => {
                    targetPage.classList.add("active"); // Start fade animation
                }, 50);
            }, 500);
        });
    });

});
