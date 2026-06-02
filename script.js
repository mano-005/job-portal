/* ---------- LOGIN SYSTEM ---------- */

function signup(){
let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;

localStorage.setItem(user,pass);
msg.innerText="Signup Success ✅";
}

function login(){
let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;

if(localStorage.getItem(user)==pass){
location="dashboard.html";
}else{
msg.innerText="Invalid Login";
}
}

function logout(){
location="index.html";
}

/* ---------- JOB DATABASE ---------- */

let jobs=JSON.parse(localStorage.getItem("jobs"))||[
{
title:"Frontend Developer",
company:"TechSoft",
logo:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
location:"Chennai",
salary:"4 LPA",
type:"Full Time"
}
{
title:"Backend Developer",
company:"AsmiSoft",
logo:"A",
location:"banglour",
salary:" LPA",
type:"Full Time"
}
{
title:"fullstack Developer",
company:"Mtech soft",
logo:"M",
location:"selam",
salary:"10 LPA",
type:"Full Time"
}
];

/* ---------- DISPLAY JOBS ---------- */

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
