const submitBtn = document.querySelector("form");
submitBtn.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Hi Nahid")
  const formData = new FormData(submitBtn);
  for( item of formData)
  {
    console.log(item[0],item[1]);
  }

});
