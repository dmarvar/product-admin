export default {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 500); // Fake Async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 500); // Fake Async
  }
};
