window.onload = function () {
  const jobPosterBtn = document.getElementById("job-poster-btn");
  const jobTakerBtn = document.getElementById("job-taker-btn");

  jobPosterBtn.addEventListener("click", () => {
    window.location.href = "../html/job_poster_registration.html";
  });

  jobTakerBtn.addEventListener("click", () => {
    window.location.href = "../html/job_taker_registration.html";
  });
};
