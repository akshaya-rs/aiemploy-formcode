const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const form = document.getElementById("applicationForm");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
    if (formStepsNum === formSteps.length - 1) {
      // Populate review fields
      document.getElementById("reviewFirstName").textContent = document.getElementById("firstName").value;
      document.getElementById("reviewLastName").textContent = document.getElementById("lastName").value;
      document.getElementById("reviewEmail").textContent = document.getElementById("email").value;
      document.getElementById("reviewPhone").textContent = document.getElementById("phone").value;
    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.remove("form-step-active");
  });
  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx <= formStepsNum) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
  // Here you can add code to send form data to the server
});
