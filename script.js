document.querySelector("#check").addEventListener("click", fun)

function fun() {
    // grab value from input
    let userNum = Number(document.querySelector("input").value)
    if(userNum === 1) {
        document.querySelector("#placeToSee").innerText = "Nothing is impossible to a willing heart";
    } else if(userNum === 2) {
        document.querySelector("#placeToSee").innerText = "Don’t pursue happiness – create it.";
} else if(userNum === 3) {
        document.querySelector("#placeToSee").innerText = "All things are difficult before they are easy.";
} else if(userNum === 4) {
        document.querySelector("#placeToSee").innerText = "A ship in harbor is safe, but that’s not why ships are built.";
} else if(userNum === 5) {
        document.querySelector("#placeToSee").innerText = "Big journeys begin with a single step.";
} else if(userNum === 6) {
        document.querySelector("#placeToSee").innerText = "People learn little from success, but much from failure.";
} else if(userNum === 7) {
        document.querySelector("#placeToSee").innerText = "Keep going! You've got this!";
} else if(userNum === 8) {
        document.querySelector("#placeToSee").innerText = "I hope you believe in yourself as much as I believe in you.";
} else if(userNum === 9) {
        document.querySelector("#placeToSee").innerText = "All of your hard work and dedication will pay off.";
} else if(userNum === 10) {
        document.querySelector("#placeToSee").innerText = "You're so close to everything you dream of.";
} else {
    document.querySelector("#placeToSee").innerText = "Pick a number 1 through 10 please!";
}
}

