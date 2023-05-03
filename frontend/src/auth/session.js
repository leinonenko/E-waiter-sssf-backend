let currentUserId = undefined;
const isString = (value) => typeof value === "string" && value !== "";
export const sessionStore = {
  state: {
    user: null,
  },
  init() {
    const auth = window.localStorage.getItem("auth");
    if (isString(auth)) {
      const state = JSON.parse(auth);
      this.state = {
        users: state.user ? state.user : null,
      };
    }
  },
  removeUser(id) {
    this.state.user = null;
    this.save();
  },
  setUser(user) {
    this.state.user = user;
    this.save();
  },
  save() {
    if (this.state.user) {
      window.localStorage.setItem("auth", JSON.stringify(this.state));
    } else {
      window.localStorage.removeItem("auth");
    }
  },
};
