const checkAge = () => {
  let input = document.getElementById("input").value;
  let mainDiv = document.getElementById("main-output");
  let altDiv = document.getElementById("alt-output");

  if (isNaN(input)) {
    mainDiv.style.display = "none";
    altDiv.innerText = "Failed to enter a number.";
    altDiv.style.display = "block";
  } else if (input < 0) {
    mainDiv.style.display = "none";
    altDiv.innerText = "Negative number is not acceptable.";
    altDiv.style.display = "block";
  } else if (input % 1 !== 0) {
    mainDiv.style.display = "none";
    altDiv.innerText = "This is not a valid age.";
    altDiv.style.display = "block";
  } else if (input >= 18 && input <= 120) {
    mainDiv.style.display = "block";
    altDiv.style.display = "none";
  } else {
    mainDiv.style.display = "none";
    altDiv.innerText = "Not allowed to see content";
    altDiv.style.display = "block";
  }
}