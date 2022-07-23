
let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let buyBtn = document.getElementById("but-el")
let displayGreeting = document.getElementById("but-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const tabs = [
  {url: "www.scrimba.com"}
]

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
 myLeads = leadsFromLocalStorage
 renderLoads()
}

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLoads()
})

tabBtn.addEventListener("click", function(){
  //console.log(tabs[0].url)
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLoads(myLeads)
})


function renderLoads(){
let listItem = "" 
for (let i = 0; i < myLeads.length; i++){
   listItem += "<li><a href='' target= '_blank'>" + myLeads[i] + "</a></li>"
}
ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  ulEl.innerHTML = ""
})