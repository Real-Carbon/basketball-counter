let homeEl = document.getElementById("home-el")
let sumH = 0

let guestEl = document.getElementById("guest-el")
let sumG = 0



function addH1() {
    sumH += 1
    homeEl.textContent = sumH
}
function addH2() {
    sumH += 2
    homeEl.textContent = sumH
}
function addH3() {
    sumH += 3
    homeEl.textContent = sumH
}



function addG1() {
    sumG += 1
    guestEl.textContent = sumG
}
function addG2() {
    sumG += 2
    guestEl.textContent = sumG
}
function addG3() {
    sumG += 3
    guestEl.textContent = sumG
}

function reset() {
    sumH = 0
    sumG = 0 
    homeEl.textContent = 0
    guestEl.textContent = 0
}