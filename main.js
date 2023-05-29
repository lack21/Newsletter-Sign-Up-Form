// lear
// Newsletter Sign-Up Form

window.addEventListener("DOMContentLoaded", () => {
  const formBtn = document.querySelector(".form .btn");
  const emailInput = document.querySelector("#email-input");
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorMessage = document.querySelector(".error");
  const mainContent = document.querySelector(".main");
  const articleContent = document.querySelector(".article");

  formBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!emailPattern.test(emailInput.value)) {
      errorMessage.style.display = "block";
      emailInput.value = "";
    } else {
      mainContent.style.display = "none";
      articleContent.style.display = "block";
    }

    console.log(emailPattern.test(emailInput.value));
  });
});
