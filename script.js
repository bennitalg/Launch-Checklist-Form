// Write your JavaScript code here!  
window.addEventListener("load", function(){
   let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then(function(json){
         console.log(response);
      });  
   });

   const destination = document.getElementById("destination");
   destination.innerHTML = `<h2>Mission Destination ${json[3].name}</h2>`;
      
let launchStatus = document.getElementById("launchStatus");
let faultyItems = document.getElementById("faultyItems");
   faultyItems.style.visibility = "hidden";//hide all the time unless there's an error
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");   

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
   event.preventDefault();

let pilotName = document.querySelector("input[name=pilotName]");
let copilotName = document.querySelector("input[name=copilotName]");
let fuelLevel = document.querySelector("input[name =fuelLevel]");
let fuelLevelValue = Number(fuelLevel.value);
let cargoMass = document.querySelector("input[name=cargoMass]");  
let cargoMassValue = Number(cargoMass.value);

fuelStatus.innerHTML = "There is enough fuel for the journey.";
  
//to get the value of the pilot name field pilotNameField.value
      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!");
      } else if((isNaN(fuelLevel.value))||(isNaN(cargoMass.value))){
         alert("Please enter a number to proceed!");
      } else {
      faultyItems.style.visibility = "visible";
      
      if(fuelLevelValue < 10000){
         fuelStatus.innerHTML = "There is not enough fuel for the journey.";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.style.color = "red";
         console.log("if");

      }else if(cargoMassValue > 10000){
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red"; 
         console.log("else if");
      
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         console.log("else");
       }
   }     
  

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
   });
});