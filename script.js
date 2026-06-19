alert("javascript is working!");
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

if (toggleBtn && password) {
    toggleBtn.addEventListener("click", function () {
        if (password.type === "password") {
           password.type = "text";
           toggleBtn.classList.remove("bx-show");
           toggleBtn.classList.add("bx-hide");
        } else {
            password.type = "password";
            toggleBtn.classList.remove("bx-hide");
            toggleBtn.classList.add("bx-show");
        }
    });
}

function isValidEmail(emailValue) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailValue);

}
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailValue = (email && email.value) ? email.value.trim() : "";

        if (!isValidEmail(emailValue)) {
            if (emailError) {
                emailError.textContent = "Please enter a valid email address.";
                emailError.style.display = "block";
            }
            if (successMessage) successMessage.style.display = "none";
        } else {
            if (emailError) emailError.style.display = "none";
            if (successMessage) successMessage.style.display = "block";
        }
        form.reset();
        setTimeout(function () {
            // hide success message after 3 seconds
            if (successMessage) successMessage.style.display = "none";
        }, 3000);
    });
}
const loginPage  = document.getElementById("loginpage");
const dashboard = document.getElementById("dashboard");
const avatar = document.getElementById("avatar");
const heroText = document.getElementById("herotext");
const welcomeText = document.getElementById("welcomeText");