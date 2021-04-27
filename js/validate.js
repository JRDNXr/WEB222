// Student ID: 134455203
// Email: jdsouza20@myseneca.ca
// Student: Jordan D'Souza

function validate(event) {
  let latFlag = false;
  let longFlag = false;
  let flag = false;

  lat = parseFloat(document.submitForm.latVal.value);
  long = parseFloat(document.submitForm.longVal.value);
  latError = document.getElementById('latitudeErrorMsg')
  longError = document.getElementById('longitudeErrorMsg')

  if (isNaN(lat) ||lat < -90 || lat > 90) {
    latError.innerText = "must be a valid Latitude (-90 to 90)";
  }
  else {
    latError.innerHTML="";
    latFlag = "true";
  }

  if (isNaN(long) || long < -180 || long > 180) {
      longError.innerText = "must be a valid longitude (-180 to 180)";
  }
  else {
    longError.innerHTML="";
    longFlag = "true";
  }

  if (latFlag == "true" && longFlag == "true") {
    flag = true;
  }
  return flag;
}

window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
