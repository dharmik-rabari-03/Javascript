document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let currentPassword = "123456";

  let oldPassword = document.getElementById("oldPassword").value;
  let newPassword = document.getElementById("newPassword").value;

  let result = document.getElementById("result");

  if (oldPassword.length < 6) {
    result.innerHTML = "password must be 6 letter";
  }
   else if (oldPassword !== currentPassword) {
    result.innerHTML = "old password is not matched with current password";
  } 
  else if (newPassword === currentPassword) {
    result.innerHTML =
      "new password is same as old password you have to change";
  }
   else {
    currentPassword = newPassword;
    result.innerHTML = "password update";
  }
});
