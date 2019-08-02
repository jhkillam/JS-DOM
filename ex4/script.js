// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton")
var boxEl = document.querySelectorAll(".box")

button.addEventListener('click', function(){
    boxEl.forEach(function(node){
        node.style.backgroundColor = "blue"
    })
})