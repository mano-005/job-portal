/* =========================
   LOGIN SYSTEM
========================= */

const msg = document.getElementById("msg");

function signup() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "" || pass === "") {
        msg.innerText = "Enter Username & Password";
        return;
    }

    localStorage.setItem(user, pass);
    msg.innerText = "Signup Success ✅";
}

function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (localStorage.getItem(user) === pass) {
        window.location.href = "dashboard.html";
    } else {
        msg.innerText = "Invalid Login ❌";
    }
}

function logout() {
    window.location.href = "index.html";
}

/* =========================
   JOB DATABASE
========================= */

let jobs = JSON.parse(localStorage.getItem("jobs"));

if (!jobs) {

jobs = [

{
title:"Frontend Developer",
company:"Infosys",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Chennai",
salary:"5 LPA",
type:"Full Time"
},

{
title:"Backend Developer",
company:"TCS",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Bangalore",
salary:"7 LPA",
type:"Full Time"
},

{
title:"Full Stack Developer",
company:"Wipro",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Hyderabad",
salary:"8 LPA",
type:"Hybrid"
}

];

const companies = [
"Infosys",
"TCS",
"Wipro",
"HCL",
"Zoho",
"Freshworks",
"Google",
"Amazon",
"IBM",
"Microsoft",
"Oracle",
"Accenture",
"Capgemini",
"Cognizant",
"Tech Mahindra"
];

const roles = [
"Java Developer",
"Python Developer",
"React Developer",
"Node.js Developer",
"Angular Developer",
"Cloud Engineer",
"AI Engineer",
"DevOps Engineer",
"UI UX Designer",
"Software Tester",
"Data Analyst",
"Cyber Security Analyst",
"Mobile App Developer",
"Full Stack Developer"
];

const locations = [
"Chennai",
"Bangalore",
"Hyderabad",
"Mumbai",
"Pune",
"Coimbatore",
"Madurai",
"Salem",
"Delhi"
];

const types = [
"Full Time",
"Remote",
"Hybrid"
];

for (let i = 0; i < 50; i++) {

jobs.push({
title: roles[Math.floor(Math.random() * roles.length)],
company: companies[Math.floor(Math.random() * companies.length)],
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location: locations[Math.floor(Math.random() * locations.length)],
salary: (4 + Math.floor(Math.random() * 20)) + " LPA",
type: types[Math.floor(Math.random() * types.length)]
});

}

localStorage.setItem("jobs", JSON.stringify(jobs));
}

/* =========================
   DISPLAY JOBS
========================= */

const jobList = document.getElementById("jobList");

if (jobList) {
displayJobs(jobs);
}

function displayJobs(list) {

jobList.innerHTML = "";

list.forEach((job, i) => {

jobList.innerHTML += `
<div class="job-card">

<img src="${job.logo}" width="60">

<h3>${job.title}</h3>

<p><b>${job.company}</b></p>

<p>${job.location}</p>

<p>${job.salary}</p>

<p>${job.type}</p>

<input type="file" onchange="uploadResume(event)">

<br><br>

<button onclick="showDetails(${i})">
View Details
</button>

</div>
`;

});
}

/* =========================
   ADD JOB
========================= */

function addJob() {

let job = {

title: document.getElementById("title").value,

company: document.getElementById("company").value,

logo: document.getElementById("logo").value,

location: document.getElementById("location").value,

salary: document.getElementById("salary").value,

type: document.getElementById("type").value

};

jobs.push(job);

localStorage.setItem("jobs", JSON.stringify(jobs));

alert("Job Added Successfully ✅");

displayJobs(jobs);
}

/* =========================
   JOB DETAILS
========================= */

function showDetails(i) {

let details = document.getElementById("details");

details.style.display = "flex";

details.innerHTML = `

<div class="glass card">

<h2>${jobs[i].title}</h2>

<p><b>${jobs[i].company}</b></p>

<p>${jobs[i].location}</p>

<p>Salary: ${jobs[i].salary}</p>

<p>Type: ${jobs[i].type}</p>

<button onclick="applyJob()">
Apply Now
</button>

<button onclick="closeDetails()">
Close
</button>

</div>

`;
}

function closeDetails() {
document.getElementById("details").style.display = "none";
}

/* =========================
   APPLY JOB
========================= */

function applyJob() {
alert("Application Submitted Successfully ✅");
}

/* =========================
   RESUME UPLOAD
========================= */

function uploadResume(e) {

let file = e.target.files[0];

if(file){
alert("Resume Uploaded Successfully ✅");
}

}

/* =========================
   SEARCH + FILTER
========================= */

const search = document.getElementById("search");
const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");

if(search){

search.addEventListener("input", filterJobs);

if(locationFilter)
locationFilter.addEventListener("change", filterJobs);

if(typeFilter)
typeFilter.addEventListener("change", filterJobs);

}

function filterJobs() {

let text = search ? search.value.toLowerCase() : "";

let filtered = jobs.filter(job => {

let titleMatch =
job.title.toLowerCase().includes(text);

let locationMatch =
!locationFilter ||
locationFilter.value === "" ||
job.location === locationFilter.value;

let typeMatch =
!typeFilter ||
typeFilter.value === "" ||
job.type === typeFilter.value;

return titleMatch &&
locationMatch &&
typeMatch;

});

displayJobs(filtered);
}{
title:"Backend Developer",
company:"AsmiSoft",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Bangalore",
salary:"6 LPA",
type:"Full Time"
},
{
title:"Full Stack Developer",
company:"MTech Soft",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Salem",
salary:"10 LPA",
type:"Full Time"
},
{
title:"Java Developer",
company:"Infosys",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Hyderabad",
salary:"7 LPA",
type:"Full Time"
},
{
title:"Python Developer",
company:"TCS",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Chennai",
salary:"8 LPA",
type:"Full Time"
},
{
title:"UI/UX Designer",
company:"Wipro",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Coimbatore",
salary:"5 LPA",
type:"Full Time"
},
{
title:"Data Analyst",
company:"Accenture",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Pune",
salary:"7 LPA",
type:"Full Time"
},
{
title:"Cloud Engineer",
company:"IBM",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Mumbai",
salary:"12 LPA",
type:"Full Time"
},
{
title:"DevOps Engineer",
company:"Cognizant",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Bangalore",
salary:"9 LPA",
type:"Full Time"
},
{
title:"AI/ML Engineer",
company:"Google",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Hyderabad",
salary:"18 LPA",
type:"Full Time"
},
{
title:"Cyber Security Analyst",
company:"HCL",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Noida",
salary:"10 LPA",
type:"Full Time"
},
{
title:"Mobile App Developer",
company:"Zoho",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Chennai",
salary:"8 LPA",
type:"Full Time"
},
{
title:"Software Testing Engineer",
company:"Capgemini",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Coimbatore",
salary:"6 LPA",
type:"Full Time"
},
{
title:"React Developer",
company:"Freshworks",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Chennai",
salary:"9 LPA",
type:"Remote"
},
{
title:"Node.js Developer",
company:"Amazon",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Bangalore",
salary:"15 LPA",
type:"Hybrid"
}
];/* ---------- DISPLAY JOBS ---------- */

const jobList=document.getElementById("jobList");

if(jobList){
displayJobs(jobs);
}

function displayJobs(list){
jobList.innerHTML="";

list.forEach((job,i)=>{
jobList.innerHTML+=`
<div class="job-card">
<img src="${job.logo}">
<h3>${job.title}</h3>
<p>${job.company}</p>
<p>${job.location}</p>
<p>${job.salary}</p>

<input type="file" onchange="uploadResume(event)">
<button onclick="showDetails(${i})">View</button>
</div>`;
});
}

/* ---------- ADMIN ADD JOB ---------- */

function addJob(){
let job={
title:title.value,
company:company.value,
logo:logo.value,
location:location.value,
salary:salary.value,
type:type.value
};

jobs.push(job);
localStorage.setItem("jobs",JSON.stringify(jobs));
alert("Job Added ✅");
}

/* ---------- JOB DETAILS ---------- */

function showDetails(i){
let d=document.getElementById("details");

d.style.display="flex";
d.innerHTML=`
<div class="glass card">
<h2>${jobs[i].title}</h2>
<p>${jobs[i].company}</p>
<p>${jobs[i].location}</p>
<p>Salary: ${jobs[i].salary}</p>
<button onclick="apply()">Apply</button>
<button onclick="closeDetails()">Close</button>
</div>`;
}

function closeDetails(){
details.style.display="none";
}

/* ---------- RESUME UPLOAD ---------- */

function uploadResume(e){
alert("Resume Uploaded ✅");
}

/* ---------- SEARCH + FILTER ---------- */

const search=document.getElementById("search");

if(search){
search.addEventListener("input",filterJobs);
locationFilter.onchange=filterJobs;
typeFilter.onchange=filterJobs;
}

function filterJobs(){
let text=search.value.toLowerCase();

let filtered=jobs.filter(j=>
(j.title.toLowerCase().includes(text) ||
j.title.includes("வேலை")) &&
(locationFilter.value==""||j.location==locationFilter.value)&&
(typeFilter.value==""||j.type==typeFilter.value)
);

displayJobs(filtered);
}
