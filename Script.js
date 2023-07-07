// Sample JavaScript code for candidate search functionality
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var location = document.querySelector('input[placeholder="Location"]').value;
  var jobRoles = document.querySelector('input[placeholder="Job Roles"]').value;

  // Perform search based on location and job roles
  // You can make an AJAX request here to fetch candidate data and populate the list dynamically

  var candidates = [
    {
      name: "Ashutosh",
      location: "Prayagraj 1",
      jobRole: "Frontend Developer",
    },
    { name: "Praveen", location: "Delhi", jobRole: "Backend" },
    { name: "Rakesh", location: "Mumbai", jobRole: "Full stack developer" },
  ];

  var candidateList = document.getElementById("candidates");
  candidateList.innerHTML = "";

  candidates.forEach(function (candidate) {
    var li = document.createElement("li");
    li.textContent =
      candidate.name + " | " + candidate.location + " | " + candidate.jobRole;
    candidateList.appendChild(li);
  });

  document.getElementById("candidate-list").style.display = "block";
});
