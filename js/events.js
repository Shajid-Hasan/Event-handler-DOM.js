console.log('this is separate js file');

// option: 2 add onclick function
// Most uses this
function makeRed(){
    document.body.style.backgroundColor ='red';
}

// option: 3 
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

// option: 4
const pinkButton = document.getElementById('make-pink');
        // console.log(pinkButton);
        pinkButton.addEventListener('click', makePink);
        function makePink(){
            document.body.style.backgroundColor='pink';
        }

// option: 4 another
const makeGreenButton = document.getElementById('make-green');
        makeGreenButton.addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor='green';
        });

//option: 5 final use [MOST OF TIME USES]
document.getElementById('make-goldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
        // option: 4 final
