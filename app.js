const emailBtn = document.querySelector(".email-btn");
const inputEmail = document.querySelector("#input-email");

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
emailBtn.addEventListener("click", () => {
  if (inputEmail.textContent.match(mailformat)) {
    alert("email is submitted");
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
});
