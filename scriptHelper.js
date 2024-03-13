// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if(testInput === "") {
return "Empty"
    } else if (isNaN(testInput)){
        return "Not a Number"
    } else {
        return "Is a Number"
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
               
        // stop the form submission
        // event.preventDefault();
        return  alert("All fields are required!");
    }


    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    // form = document.getElementById("form");

        
            // console.log(fuelLevel);
          
           
            // console.log("Fuel Level:", fuelLevel);

            if (fuelLevel < 10000) {
                faultyItems.style.visibility = "visible";
                document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
                document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
            
                document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is not ready for launch`;
                document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} is  not ready for launch`;
                return;
            } else if (fuelLevel > 10000) {
                document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
                document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is ready for launch`;
                document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} is ready for launch`;
            }
            
            if (cargoLevel > 10000) {
                faultyItems.style.visibility = "visible";
                document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
                document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
            }
            
            if (fuelLevel >= 10000 && cargoLevel <= 10000) {
                document.getElementById("launchStatus").style.color = "green";
                document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
            }
            
        }
//         });
//     });
    
// }

        
    
 
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;

    