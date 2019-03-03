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

//Must start with something in the 0 index
var roundArr = [0];

var arrayObj;
var seconds_left;
var correctAnswerCount = 0;
var interval;


var easyArr = [{
        question: "What is Andy Dwyer's law enforcement alter ego?",
        answers: ["Burt Macklen", "Johnny Karate", "Kurt Hackman", "Jack Bower"],
        correctAnswer: "Burt Macklen"
    }, {
        question: "What is Ron's musical alter ego?",
        answers: ["Duke Silver", "Terry Silvas", "Ron Silver", "Jack Macklen"],
        correctAnswer: "Duke Silver"
    }, {
        question: "What special day do Donna and Tom celebrate?",
        answers: ["Galentine's Day", "St. Patrick's Day", "Treat Yo Self Day", "Swagger Day"],
        correctAnswer: "Treat Yo Self Day"
    }, {
        question: "What is the most recent name of Andy's band?",
        answers: ["Jet Black Pope", "Everything Rhymes With Orange", "Fourskin", "Mouse Rat"],
        correctAnswer: "Mouse Rat"
    }, {
        question: "Where does Tammy #2 work?",
        answers: ["The sewage dept", "The public works dept", "The library", "Macy's"],
        correctAnswer: "The library"
    }, {
        question: "What is the name of the club Tom co-owns?",
        answers: ["The Snakehole Lounge", "The Glitter Factory", "Tommy's Place", "The Bulge"],
        correctAnswer: "The Snakehole Lounge"
    }, {
        question: "Who is Leslie's arch-nemesis?",
        answers: ["Tammy #2", "Councilman Milton", "Jeremy Jamm", "Catherine Pinewood"],
        correctAnswer: "Jeremy Jamm"
    }, {
        question: "Who is Jean Ralphio's sister?",
        answers: ["Jenny Stone", "Mona Lisa", "Joan", "Kay Hanley"],
        correctAnswer: "Mona Lisa"
    }, {
        question: "What is the name of Ben's board game?",
        answers: ["Pawn-opoly", "Settlers of Pawnee", "Pawnee-demic", "Cones of Dunshire"],
        correctAnswer: "Cones of Dunshire"
    }, {
        question: "What is Andy and April's dog's name?",
        answers: ["Terry", "Spot", "Champion", "Bingo"],
        correctAnswer: "Champion"
    }, {
        question: "What is Ron's favorite food?",
        answers: ["Meat", "Carrots", "Tofu", "Cheese"],
        correctAnswer: "Meat"
    }

];
var mediumArr = [{
    question: "What nocturnal ailment does Ron suffer from?",
    answers: ["Sleep Apnea", "Night terrors", "Night fighting", "Snoring"],
    correctAnswer: "Night fighting"
}, {
    question: "What department did Mark Brandaniwcz work in?",
    answers: ["Architecture", "Public Works", "Registrar's Office", "City Planning"],
    correctAnswer: "City Planning"
}, {
    question: "What is Garry's ideal vacation city?",
    answers: ["Boca Raton, FL", "Muncie, IN", "Pawnee, IN", "Honolulu, HI"],
    correctAnswer: "Muncie, IN"
}, {
    question: "What gift does Leslie give Ben before he moves to Washington D.C?",
    answers: ["Washington Monument", "Guidebook", "A Ring", "Minature of Parliament"],
    correctAnswer: "Washington Monument"
}, {
    question: "What is the name of the pig Ron slaughters for the Dept BBQ?",
    answers: ["Ron", "Jerry", "Porky", "Tom"],
    correctAnswer: "Tom"
}, {
    question: "Who does Leslie hunt down for the Mayor?",
    answers: ["Rocky Racoon", "Fairway Frank", "Councilman Jamm", "His dog, Rufus"],
    correctAnswer: "Fairway Frank"
}, {
    question: "Where is Ben Wyatt from?",
    answers: ["Icetown, IN", "Indianapolis, IN", "Partridge, MN", "Gary, IN"],
    correctAnswer: "Partridge, MN"
}, {
    question: "What is the lot number of the pit next to Ann's house?",
    answers: ["Lot 22", "Lot 44", "Lot 1", "Lot 48"],
    correctAnswer: "Lot 48"
}, {
    question: "Who is The Douche's partner?",
    answers: ["Crazy Ira", "Farts McGee", "Buttface", "Dumb Steve"],
    correctAnswer: "Crazy Ira"
}, {
    question: "What is Ron's favorite restaurant?",
    answers: ["St Elmo's Steakhouse", "Mulligan's Steakhouse", "Food and Stuff", "Tom's Bistro"],
    correctAnswer: "Mulligan's Steakhouse"
}, {
    question: "What is Donna's estranged brother's name?",
    answers: ["LaMarcus", "Tito", "Marshawn", "LaVondrious"],
    correctAnswer: "LaVondrious"
}, {
    question: "What is the name of the gay bar behind Ron's house?",
    answers: ["The Bulge", "Twink's", "Saddlebags", "The Glitter Factory"],
    correctAnswer: "The Bulge"
}];

var chosenDifficultyArr = easyArr;


function difficultySelection(selection) {
    chosenDifficultyArr = selection;
}

function genRandomQuestion() {
    var newItem = (chosenDifficultyArr[(Math.floor(Math.random() * chosenDifficultyArr.length))]);
    if (roundArr.includes(newItem)) {
        genRandomQuestion();
    } else {
        roundArr.push(newItem);
    }
}

function postNewQuestion() {
    //Populate Question and Question Number from Array
    arrayObj = roundArr[roundArr.length - 1];
    var arrayPos = roundArr.indexOf(arrayObj);
    $('#questionNumber').text(arrayPos);
    $('#questionHero').text(arrayObj.question);
    //Populate the answer button text
    $('.answerBtn').each(function (index) {
        $(this).text(arrayObj.answers[index]);
    });
}

function showTimeUpCard() {
    $('.card-text4').show();
    $('.card-text1').hide();
}

function cardCountdown() {
    $('#countdownClock').text('6 sec');
    clearInterval(interval);
    seconds_left = 6;
    // $('#countdownClock').text();
    interval = setInterval(function () {
        $('#countdownClock').text(--seconds_left + ' sec');
        if (seconds_left <= 0) {
            // $('#countdownClock');
            clearInterval(interval);
            showTimeUpCard();
        }
    }, 1000);
}

function roundStart() {
    genRandomQuestion();
    postNewQuestion();
    cardCountdown();
    $('.card-text1').show();
    $('.card-text2').hide();
    $('.card-text3').hide();
    $('.card-text4').hide();
    $('.card-text5').hide();


}

function roundReset() {
    roundArr = [0];
    correctAnswerCount = 0;
    $('#countdownClock').show();
    roundStart();
}

$('.nextQuestion').on('click', function () {
    genRandomQuestion();
    postNewQuestion();
    cardCountdown();
    $('#countdownClock').show();
    $('.gifGoesHere').empty();
    $('.card-text5').hide();
    $('.card-text4').hide();
    $('.card-text3').hide();
    $('.card-text2').hide();
    $('.card-text1').show();
});

$('.easyBtn').on('click', function () {
    chosenDifficultyArr = easyArr;
    $('#mediumPill').addClass('hidden');
    $('#hardPill').addClass('hidden');
    $('#easyPill').removeClass('hidden');
});

$('.mediumBtn').on('click', function () {
    chosenDifficultyArr = mediumArr;
    $('#mediumPill').removeClass('hidden');
    $('#hardPill').addClass('hidden');
    $('#easyPill').addClass('hidden');
});

$('.hardBtn').on('click', function () {
    // chosenDifficultyArr = hardArr;
    $('#mediumPill').addClass('hidden');
    $('#hardPill').removeClass('hidden');
    $('#easyPill').addClass('hidden');
});

$(document).on('click', '.dropdown.dropdown-menu', function (e) {
    e.stopPropagation();
});

// $('body').on('click', function (e) {
//     if (!$('#dropdownMenu2').is(e.target) &&
//         $('#dropdownMenu2').has(e.target).length === 0 &&
//         $('.open').has(e.target).length === 0
//     ) {
//         $('#dropdownMenu2').removeClass('open');
//     }
// });

// $('#dropdownMenu2').on('click', function (event) {
//     $(this).parent().toggleClass('open');
// });

$('.answerBtn').on('click', function () {
    //If user answers CORRECTLY
    clearInterval(interval);
    if ($(this).text() === arrayObj.correctAnswer) {
        $('.card-text1').hide();
        $('.card-text2').show();
        $('#countdownClock').hide();
        ++correctAnswerCount;



        var searchTerm = $(this).text();
        var pandr = "parks and rec ";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + pandr + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
        // Performing our AJAX GET request
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.data;
                // console.log(results);
                // Looping over every result item
                var gifDiv = $("<div>");
                // Creating an image tag
                var celebrationGif = $("<img>");
                // Giving the image tag an src attribute 
                celebrationGif.attr("src", results[0].images.fixed_height.url);
                // Appending the gif to the "gifDiv" div
                $('.gifGoesHere').append(gifDiv);
                gifDiv.append(celebrationGif);
            });
    } else {
        // If user guesses INCORRECTLY
        $('#countdownClock').hide();
        $('.card-text1').hide();
        $('.card-text3').show();
        $('#correctAnswer').text(arrayObj.correctAnswer);
    }

    //End of Game 
    if ($('#questionNumber').text() === '10') {
        $('.card-text2').hide();
        $('.card-text3').hide();
        $('.card-text5').show();
        $('#correctAnswerCount').text(correctAnswerCount);
        clearInterval(interval);


    }
});

$('.reset').on('click', function () {
    roundReset();
});


$(document).ready(function () {
    if (window.location.pathname === '/game.html') {
        roundStart();
    }
});