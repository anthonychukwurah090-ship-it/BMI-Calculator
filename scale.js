const form = document.getElementById("bmi-form");
const result = document.getElementById("result");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const heightCm = Number(document.getElementById("height").value);
  const weightKg = Number(document.getElementById("weight").value);

  if (heightCm <= 0 || weightKg <= 0) {
    showError("Please enter a height and weight greater than zero.");
    return;
  }

  const heightMeters = heightCm / 100;
  const bmi = weightKg / (heightMeters * heightMeters);
  let category = "";
  let explanation = "";
  let advice = [];

  if (bmi < 18.5) {
    category = "Underweight";
    explanation =
      "Your BMI is below 18.5, the adult healthy-weight range starts at this level. A low BMI can have many causes and does not explain your health on its own.";
    advice = [
      "Consider speaking with a healthcare professional, especially if your weight changed unexpectedly.",
      "Choose regular, nourishing meals and snacks with a mix of protein, grains, fruits, and vegetables.",
      "Ask a clinician or dietitian what a safe plan would look like for you."
    ];
  } else if (bmi < 25) {
    category = "Healthy weight";
    explanation =
      "Your BMI is from 18.5 to under 25, which falls in the adult healthy-weight range.";
    advice = [
      "Keep up balanced meals, regular movement, and enough sleep.",
      "Focus on habits that support your overall wellbeing rather than a number on the scale.",
      "Check in with a healthcare professional for personalized health guidance."
    ];
  } else if (bmi < 30) {
    category = "Overweight";
    explanation =
      "Your BMI is from 25 to under 30, which is in the adult overweight range. BMI is only one screening measure and cannot tell the whole story about your health.";
    advice = [
      "If you want to make changes, start with sustainable habits such as regular walks and balanced meals.",
      "Avoid crash diets; gradual, realistic changes are generally easier to maintain.",
      "A healthcare professional can help you choose goals that are safe and appropriate for you."
    ];
  } else {
    category = "Obesity";
    explanation =
      "Your BMI is 30 or higher, which is in the adult obesity range. This is a screening result, not a diagnosis or a judgment about you.";
    advice = [
      "Consider discussing the result with a healthcare professional who can assess your overall health.",
      "Small, sustainable steps—such as adding enjoyable activity and nutritious foods—can support wellbeing.",
      "Ask for individualized support; avoid extreme diets or exercise plans."
    ];
  }

  document.getElementById("bmi-number").textContent = bmi.toFixed(1);
  document.getElementById("bmi-category").textContent = category;
  document.getElementById("bmi-explanation").textContent = explanation;

  const adviceList = document.getElementById("advice-list");
  adviceList.textContent = "";

  advice.forEach(function (tip) {
    const listItem = document.createElement("li");
    listItem.textContent = tip;
    adviceList.appendChild(listItem);
  });

  errorMessage.hidden = true;
  result.hidden = false;
});

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  result.hidden = true;
}