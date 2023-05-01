export function createLoginPage(): string {
  return `
      <!-- Add your login page HTML here -->
      <div>
      <p>Username</p>
        <input type="text" id="username" name="username" placeholder="Username">
        <p>Password</p>
        <input type="password" id="password" name="password" placeholder="Password">
        <button id="login-btn">Login</button>
        </div>
    `;
}
