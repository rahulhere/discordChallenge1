// You are more than welcome to read this... lol

let introButton = document.querySelector(".intro-button");
introButton.addEventListener("click", () => {
  gsap.to(".intro", {
    x: "-100%",
    duration: 0.5,
  });
  gsap.fromTo(
    ".login",
    {
      x: "100%",
    },
    {
      x: "0",
      duration: 0.5,
      delay: 0.05,
    }
  );
});

let loginImage = document.querySelector(".login-back-img");
loginImage.addEventListener("click", () => {
  gsap.to(".login", {
    x: "100%",
    duration: 0.5,
  });
  gsap.to(".intro", {
    x: "0",
    duration: 0.5,
    delay: 0.05,
  });
});

let signupLink = document.querySelector(".signupLink");
signupLink.addEventListener("click", () => {
  gsap.to(".login", {
    x: "-100%",
    duration: 0.5,
  });
  gsap.to(".signup", {
    x: "0",
    duration: 0.5,
    delay: 0.05,
  });
});

let signinLink = document.querySelector(".signinLink");
signinLink.addEventListener("click", () => {
  gsap.to(".signup", {
    x: "100%",
    duration: 0.5,
  });
  gsap.to(".login", {
    x: "0",
    duration: 0.5,
    delay: 0.05,
  });
});

let signupImage = document.querySelector(".signup-back-img");
signupImage.addEventListener("click", () => {
  gsap.to(".signup", {
    x: "100%",
    duration: 0.5,
  });
  gsap.to(".intro", {
    x: "0",
    duration: 0.5,
    delay: 0.05,
  });
});

let validateInput = (inputReference) => {
  if (inputReference) {
    if (inputReference.value.trim() === "") {
      inputReference.classList.add("wrong-input");
    } else {
      inputReference.classList.remove("wrong-input");
    }
  }
};

let loginButton = document.querySelector(".login-button");
loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  let loginName = document.querySelector("#login-name");
  let loginPass = document.querySelector("#login-pass");

  validateInput(loginName);
  validateInput(loginPass);
});

let signupButton = document.querySelector(".signup-button");
signupButton.addEventListener("click", (event) => {
  event.preventDefault();

  let signupName = document.querySelector("#signup-name");
  let signupEmail = document.querySelector("#signup-email");
  let signupPass = document.querySelector("#signup-password");
  let signupConfirmPass = document.querySelector("#signup-confirm-pass");

  validateInput(signupName);
  validateInput(signupEmail);
  validateInput(signupPass);
  validateInput(signupConfirmPass);
});
