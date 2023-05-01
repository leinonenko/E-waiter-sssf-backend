import "../style.css";

// Get references to the buttons
const registerBtn = document.querySelector<HTMLButtonElement>("#register-btn")!;
const loginBtn = document.querySelector<HTMLButtonElement>("#login-btn")!;

// Add event listeners to the buttons
registerBtn.addEventListener("click", () => {
  // Render the register page HTML
  document.querySelector<HTMLDivElement>("#app")!.innerHTML =
    createRegisterPage();
});

loginBtn.addEventListener("click", () => {
  // Render the login page HTML
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = createLoginPage();
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
    <div>
        <!-- Add your logo image here -->
    </div>
    <div id="btn-container">
        <button id="register-btn">Register</button>
        <button id="login-btn">Login</button>
    </div>
    <div id="app"></div>
    <script type="module" src="/src/script/index.ts"></script>
</div>
`;
