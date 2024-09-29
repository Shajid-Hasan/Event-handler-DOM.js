console.log('tjis is separate js file');

// option 2: add onclick function
// Moost uses this
function makeRed(){
    document.body.style.backgroundColor ='red';
}

// option3: 
const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }

// option3 another:
const purpleButton = document.getElementById('make-purple');
        // console.log(purpleButton);
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor ='purple';
        }
