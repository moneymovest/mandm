document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.querySelector('input[type="submit"]');
  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signInBtn.value = "Signing in...";
    signInBtn.style.boxShadow = "0 0 20px #45f3ff, 0 0 100px #45f3ff";

    // simulate loading animation or transition
    setTimeout(() => {
      signInBtn.value = "Sign in";
      alert("Login submitted (demo)");
    }, 2000);
  });
});
