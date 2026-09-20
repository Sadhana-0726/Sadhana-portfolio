"use strict";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Sadhana's portfolio loaded successfully.");

    const themeToggle = document.getElementById("theme-toggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    if (themeToggle) {
        updateButton();

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");

            const isLight =
                document.body.classList.contains("light-theme");

            localStorage.setItem(
                "theme",
                isLight ? "light" : "dark"
            );

            updateButton();
        });
    }

    function updateButton() {
        const isLight =
            document.body.classList.contains("light-theme");

        themeToggle.textContent = isLight
            ? "☾ Dark Mode"
            : "☀ Light Mode";

        themeToggle.setAttribute(
            "aria-label",
            isLight
                ? "Switch to dark theme"
                : "Switch to light theme"
        );
    }
});