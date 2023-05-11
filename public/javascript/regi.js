const customerBtn = document.querySelector("#jp-btn");
const sellerBtn = document.querySelector("#jt-btn");
const customerForm = document.querySelector("#jp-form");
const sellerForm = document.querySelector("#jt-form");

// Show the customer form by default
customerForm.style.display = "block";
customerBtn.classList.add("active");

customerBtn.addEventListener("click", function () {
  customerForm.style.display = "block";
  sellerForm.style.display = "none";
  customerBtn.classList.add("active");
  sellerBtn.classList.remove("active");
});

sellerBtn.addEventListener("click", function () {
  sellerForm.style.display = "block";
  customerForm.style.display = "none";
  sellerBtn.classList.add("active");
  customerBtn.classList.remove("active");
});

// Add CSS class to change button color
customerBtn.addEventListener("click", function () {
  customerBtn.classList.add("btn-primary");
  customerBtn.classList.remove("btn-secondary");
  sellerBtn.classList.add("btn-secondary");
  sellerBtn.classList.remove("btn-primary");
});

sellerBtn.addEventListener("click", function () {
  sellerBtn.classList.add("btn-primary");
  sellerBtn.classList.remove("btn-secondary");
  customerBtn.classList.add("btn-secondary");
  customerBtn.classList.remove("btn-primary");
});
