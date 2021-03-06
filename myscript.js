function doshit() {
    let curDisplay = document.getElementById("factorDisplay")
    
    if (curDisplay === null) {
        let factorDisplay = document.createElement("H1")
        factorDisplay.setAttribute("id", "factorDisplay")
        factorDisplay.innerText = "rob has a small cock lmao"
        document.body.appendChild(factorDisplay)
    } else if (curDisplay.innerText.length < 30) {
        curDisplay.innerText += "o"
    } else {
        curDisplay.innerText += "!"
    }
}