// Function to calculate BMI
function calculateBMI() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var genderSelect = document.getElementById("gender");
    var resultDiv = document.getElementById("result");
  
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; // Convert height from cm to meters
    var gender = genderSelect.value;
  
    if (weight && height && gender) {
      var bmi = weight / (height * height);
      var category = "";
  
      // Determine BMI category based on gender
      if (gender === "male") {
        if (bmi < 18.5) {
          category = "Kurus";
        } else if (bmi >= 18.5 && bmi < 25) {
          category = "Normal";
        } else if (bmi >= 25 && bmi < 30) {
          category = "Gemuk";
        } else {
          category = "Obesitas";
        }
      } else if (gender === "female") {
        if (bmi < 18.5) {
          category = "Kurus";
        } else if (bmi >= 18.5 && bmi < 24) {
          category = "Normal";
        } else if (bmi >= 24 && bmi < 30) {
          category = "Gemuk";
        } else {
          category = "Obesitas";
        }
      }
  
      // Display the BMI result
      resultDiv.innerHTML = `
        <h3>Hasil BMI:</h3>
        <p>BMI: ${bmi.toFixed(2)}</p>
        <p>Kategori: ${category}</p>
      `;
    } else {
      resultDiv.innerHTML = "Mohon isi semua field dengan benar.";
    }
  }
  