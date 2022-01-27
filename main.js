var printval = document.getElementById("selectedval");
var dropdown = document.getElementById('response')
var selectedval = dropdown.value
var finalsend = document.getElementById('finaldisplay')

var slider = document.getElementById("timeSlider");
var output = document.getElementById("demo");

//set variable to value of dropdown, print text at bottom, update text at very bottom with filename and timestamp
function changeVal() {
    selectedval = dropdown.value
    printval.innerText =''
    printval.innerHTML = selectedval;
    update()
    updatePic()
    // finalsend.innerHTML = 'You selected ' + selectedval
}

//
output.innerHTML = "time = " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    update()
    output.innerHTML = "time = " + this.value;

}

function update() {
    finalsend.innerText = '';
    finalsend.innerHTML = "You chose " + selectedval + " @ time = " + slider.value;

}

function updatePic() {
    if(selectedval === 'default') {
        // document.getElementsByClassName("contourplot")[0].alt = 'DEFAULT OPTION'
        // nothing
    }
    else if (selectedval == 'StrainXX') {
        document.getElementsByClassName("contourplot")[0].src = `assets/images/${selectedval}.png`
    }
    else if (selectedval == 'StrainXY') {
        document.getElementsByClassName("contourplot")[0].src = 'assets/images/2.jpg'
    }
    else if (selectedval == 'StressXX') {
        document.getElementsByClassName("contourplot")[0].src = 'assets/images/3.jpg'
    }
}