const submit = document.getElementById("submit");
const ratingButtons = document.querySelectorAll("button");
const rate = document.getElementById("rate");
const thanks = document.getElementById("thanks");
const rating = document.getElementById("rating");
let selectedRating = 0;

// Change active button and set rating
ratingButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    selectedRating = btn.textContent;

    ratingButtons.forEach((btn) => {
      if (e.currentTarget.textContent == btn.textContent) {
        btn.classList.add("active-button");
      } else {
        btn.classList.remove("active-button");
      }
    });
  });
});

// Show/hide the rating and thank you boxes
submit.addEventListener("click", () => {
  if (selectedRating == 0) {
    alert("No rating selected");
  } else {
    rate.style.display = "none";
    thanks.style.display = "block";
    rating.innerText = `You selected ${selectedRating} out of 5`;
  }
});
