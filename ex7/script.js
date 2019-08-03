// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp


// this is the first solution to just make the section disappear on click
// var sectionHeaderEl = document.getElementById("sectionHeader")

// sectionHeaderEl.addEventListener('click', function(){
//     var sectionEl = document.getElementById("section")

//     if (sectionEl.style.display === "none"){
//         sectionEl.style.display = "block";
//     }
//     else {
//         sectionEl.style.display = "none";
//     }
// })

// implementing idea from https://css-tricks.com/using-css-transitions-auto-dimensions/


function collapseSection(element) {
    
    // get height of the element's inner content, regardless of actual size
    var sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = '';

    // explicitly set the element height to the current pixel height
    // so we aren't transitioning out of 'auto'
    requestAnimationFrame(function() { 
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;

        // transition element to height: 0
        requestAnimationFrame(function() {
            element.style.height = 0 + 'px';
        })
    })

    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
    // get height of the element's inner content, regardless of actual size
    var sectionHeight = element.scrollHeight;

    // have element transition to height of its inner content
    element.style.height = sectionHeight + 'px';

    element.addEventListener('transitionend', function(e) {
        // removes event listener so it only triggers once
        element.removeEventListener('transitionend', arguments.callee);

        // remove "height" from the element's inline styles, so it can return
        // to initial value
        element.style.height = null;

        // mark section as "currently not collapsed" 
        element.setAttribute('data-collapsed', 'false');
    })
}

document.querySelector('#sectionHeader').addEventListener('click', function(e){
    var section = document.querySelector('#section');
    var isCollapsed = section.getAttribute('data-collapsed') === 'true';

    if(isCollapsed) {
        expandSection(section)
        section.setAttribute('data-collapsed', 'false')
    }
    else {
        collapseSection(section)
    }
})
