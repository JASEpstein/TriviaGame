/*
PSEUDOCODE:

1. User loads into page and clicks a start 
2. User has to click on a difficulty option (maybe a modal)
3. Game begins by displaying a question and four clickable answers.
4. Each question has a clock displaying 10 seconds counting down.
5. If player guesses wrong, a fail gif plays for 3 seconds. modal?
6. If player runs out of time, same thing.
7. If player guesses right, a success gif plays for 3 seconds. modal?
8. After 8 questions, the user sees their score report.
9. The user can then click to play again, at the same difficulty.

*/

var gameStart = false;

var easyArr = [{
        question: "What is Andy Dwyer's law enforcement alter ego?",
        answer1: "Burt Macklen",
        answer2: "Johnny Karate",
        answer3: "Kurt Hackman",
        answer4: "Jack Bower"
    }, {
        question: "What is Ron's musical alter ego?",
        answer1: "Duke Silver",
        answer2: "Terry Silvas",
        answer3: "Ron Silver",
        answer4: "Jack Macklen"
    }, {
        question: "What special day do Donna and Tom celebrate?",
        answer1: "Galentine's Day",
        answer2: "St. Patrick's Day",
        answer3: "Treat Yo Self Day",
        answer4: "Swagger Day"
    }, {
        question: "What is the most recent name of Andy's band?",
        answer1: "Jet Black Pope",
        answer2: "Everything Rhymes With Orange",
        answer3: "Fourskin",
        answer4: "Mouse Rat"
    }, {
        question: "Where does Tammy #2 work?",
        answer1: "The sewage dept",
        answer2: "The public works dept",
        answer3: "The library",
        answer4: "Macy's"
    }, {
        question: "What is the name of the club Tom co-owns?",
        answer1: "The Snakehole Lounge",
        answer2: "The Glitter Factory",
        answer3: "Tommy's Place",
        answer4: "The Bulge"
    }

];

function roundStart() {

}




$('#startButton').on('click', function () {
    if (gameStart == true) {
        roundStart();
    } else {
        gameStart = true;
    }
});

$(document).on('ready', function () {});