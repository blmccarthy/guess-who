$(document).ready(readyNow)

console.log('Here are all the available people:', people);

function readyNow() {
console.log('Hello Jquery!')
displayImages();
displayNameToFind();
$( 'body' ).on('click', 'img', clickImageValidation);
}

let counter = 0;
let numberSelected = 0;

function displayImages(){
    for (let student of people){
        let gitUserName = student.githubUsername;
        let gitName = student.name;
        $( 'body' ).append(`<img src="https://github.com/${gitUserName}.png?size=250" alt="Profile image of ${gitName}" data-name="${gitName}" data-number="${counter}">`);
        counter++;
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// run random number function
// display name of student assigned to that data-number

function displayNameToFind() {
    numberSelected = randomNumber(0, 3);
    // console.log(numberSelected);
    let studentSelected = people[numberSelected].name;
    // console.log(studentSelected);
    $('#click-on').empty();
    $('#click-on').append(`Click on: ${studentSelected}`);
}

function clickImageValidation() {
    // take random number, compare to data-number of image
    // check equivalency
    // if statement
    // - if truthy, alert success message
    // - if falsey, alert try again message

    let correctStudentObject = numberSelected;
    let chosenStudentObject = $(this).data('number');

    console.log(correctStudentObject, chosenStudentObject);

    if(correctStudentObject==chosenStudentObject){
        alert('Success!')
        displayNameToFind();
    }
    else {
        alert('Better luck next time loser!')
    }
}
