let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirmPassword");
let submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    password.value == "" ||
    confirmPassword.value == ""
  ) {
 

    // Set up an interval to flash the border color every 500ms
    let intervalId = setInterval(() => {
      firstName.style.border = "3px solid red";
      lastName.style.border = "3px solid red";
      email.style.border = "3px solid red";
      password.style.border = "3px solid red";
      confirmPassword.style.border = "3px solid red";
    },1000);

    // Use setTimeout to clear the interval after 2 seconds (2000ms)
    setTimeout(() => {
      clearInterval(intervalId);  // Stops the flashing effect
      firstName.style.border = "";
      lastName.style.border = "";
      email.style.border = "";
      password.style.border = "";
      confirmPassword.style.border = "";
    }, 2000);
    
  }else if(password.value !== confirmPassword.value){
    alert("Passwords does not match");
  }else {
    alert("Submitted successfully");
  }
});


// setTimeout(() => {
  
// }, 1000);


// let myFriend = setInterval(() =>{
//   console.log('hello world');
// }, 1000)

// setTimeout(() =>{
//   clearInterval(myFriend);
//   console.log(' i have finished');
// }, 2000)