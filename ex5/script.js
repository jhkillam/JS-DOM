// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

var buttonEl = document.getElementById("myButton")


buttonEl.addEventListener('click', function(){
    var boxEl = document.createElement("div")
    document.getElementById("boxContainer").appendChild(boxEl)
    boxEl.classList.add("box")
})