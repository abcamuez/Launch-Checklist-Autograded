// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    

    //add event listener for button
    let form = document.querySelector('[data-testid="testForm"]');

    form.addEventListener("submit", function(event) {
        pilot = document.querySelector("input[name=pilotName]").value;
        copilot = document.querySelector("input[name=copilotName]").value;
        fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        cargoLevel = document.querySelector("input[name=cargoMass]").value;
        list = document.querySelector("ol");
        faultyItems = document.getElementById("faultyItems")
        launchStatus = document.getElementById("launchStatus")
    });
    // call 
 });