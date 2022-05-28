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
} else if(userNum === 11) {
        document.querySelector("#placeToSee").innerText = "Every new beginning comes from some other beginning's end.";
}else if(userNum === 12) {
        document.querySelector("#placeToSee").innerText = "You are not what you've done. You are what you keep doing.";
}else if(userNum === 13) {
        document.querySelector("#placeToSee").innerText = "Do not let making a living prevent you from making a life.";
}else if(userNum === 14) {
        document.querySelector("#placeToSee").innerText = "Always do your best. What you plant now, you will harvest later.";
}else if(userNum === 15) {
        document.querySelector("#placeToSee").innerText = "About time I got out of that cookie!";
}else if(userNum === 16) {
        document.querySelector("#placeToSee").innerText = "If you eat something & nobody sees you eat it, it has no calories.";
}else if(userNum === 17) {
        document.querySelector("#placeToSee").innerText = "Don't be afraid to take that big step!";
}else if(userNum === 18) {
        document.querySelector("#placeToSee").innerText = "Ignore previous cookie.";
}else if(userNum === 19) {
        document.querySelector("#placeToSee").innerText = "I cannot help you, for I am just a cookie.";
}else if(userNum === 20) {
        document.querySelector("#placeToSee").innerText = "You don't have to be faster than the bear, you just have to be faster than the slowest guy running from it.";
}else if(userNum === 21) {
        document.querySelector("#placeToSee").innerText = "This cookie is never gonna give you up, never gonna let you down.";
} else if(userNum === 22) {
        document.querySelector("#placeToSee").innerText = "That wasn't chicken.";
}else if(userNum === 23) {
        document.querySelector("#placeToSee").innerText = "You are about to finish reading a fortune cookie.";
}else if(userNum === 24) {
        document.querySelector("#placeToSee").innerText = "Some people dream of fortunes, others dream of cookies.";
}else if(userNum === 25) {
        document.querySelector("#placeToSee").innerText = "You will be hungry again in one hour.";
}else {
    document.querySelector("#placeToSee").innerText = "Pick a number 1 through 25 please!";
}
}

