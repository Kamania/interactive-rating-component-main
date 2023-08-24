document.addEventListener("DOMContentLoaded", function () {
    const rateButtons = document.querySelectorAll(".rate-btn");
    const selectedRateElement = document.getElementById("selectedRate");
    const rateSubmitButton = document.getElementById("rate-submit");

    let selectedRate = 5; // Default selected rate

    // Event listener for rate buttons
    rateButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const rateValue = button.getAttribute("data-rate");
            selectedRate = parseInt(rateValue);
            updateSelectedRate();

            // Remove active class from all rate buttons
            rateButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Add active class to the clicked rate button
            button.classList.add("active");
        });
    });

    // Event listener for rate submit button
    rateSubmitButton.addEventListener("click", function () {
        // You can perform any other actions related to submitting the rate here
        // For now, we'll just show the thank you state and update the selected rate
        updateSelectedRate();
        showThankYouState();
    });

    // Function to update the selected rate display
    function updateSelectedRate() {
        selectedRateElement.textContent = selectedRate;
    }

    // Function to show the thank you state
    function showThankYouState() {
        const rateCard = document.getElementById("rate-card");
        const thankYouState = document.getElementById("result");

        rateCard.style.display = "none";
        thankYouState.style.display = "block";
    }
});
