/// Intro MODAL ///

const openModalButton = document.querySelector('#openModal');
const modal = document.querySelector('#modal');
const closeModalButton = document.querySelector('#closeModal');

const openModal = () => {
	modal.style.display = 'block';
};
const closeModal = () => {
	modal.style.display = 'none';
};

openModalButton.addEventListener('click', openModal);

closeModalButton.addEventListener('click', closeModal);

// So glad Tabitha went over modals whenever that was, really helpful for this. //

//________________________________________________________________________

/// Question Button ///

const questionButton = document.querySelector('#questionButton');
let questionOne = document.querySelector('#q1');

const revealQuestion = () => {
	questionOne.innerText = triviaArray[0].question;
	// questionOne.style.display = 'block'; // placeholder
	questionButton.style.display = 'none';
};

questionButton.addEventListener('click', revealQuestion);

//________________________________________________________________________

/// Answer field ///

const form = document.querySelector('form');
const answerInput = document.querySelector('input[type=text]');
const answerOne = document.querySelector('#a1');
const rightGif = document.querySelector('#rightGif');
const wrongGif = document.querySelector('#wrongGif');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	answerBox.style.display = 'block';
	if (
		questionOne.innerText === triviaArray[0].question &&
		answerInput.value === triviaArray[0].answer
	) {
		//update to be looped into array with correct answer
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[1].question &&
		answerInput.value === triviaArray[1].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[2].question &&
		answerInput.value === triviaArray[2].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[3].question &&
		answerInput.value === triviaArray[3].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[4].question &&
		answerInput.value === triviaArray[4].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[5].question &&
		answerInput.value === triviaArray[5].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[6].question &&
		answerInput.value === triviaArray[6].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[7].question &&
		answerInput.value === triviaArray[7].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[8].question &&
		answerInput.value === triviaArray[8].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[9].question &&
		answerInput.value === triviaArray[9].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[10].question &&
		answerInput.value === triviaArray[10].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[11].question &&
		answerInput.value === triviaArray[11].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[12].question &&
		answerInput.value === triviaArray[12].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[13].question &&
		answerInput.value === triviaArray[13].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[14].question &&
		answerInput.value === triviaArray[14].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[15].question &&
		answerInput.value === triviaArray[15].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[16].question &&
		answerInput.value === triviaArray[16].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[17].question &&
		answerInput.value === triviaArray[17].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[18].question &&
		answerInput.value === triviaArray[18].answer
	) {
		rightGif.style.display = 'block';
	} else if (
		questionOne.innerText === triviaArray[19].question &&
		answerInput.value === triviaArray[19].answer
	) {
		rightGif.style.display = 'block';
	} else {
		wrongGif.style.display = 'block';

		// answerOne.innerText = triviaArray[].answer;
		// answerOne.style.display = 'block';
	}
});

//________________________________________________________________________

/// Next Question button ///

const nextQuestion = document.querySelector('#nextButton');
const finishButton = document.querySelector('#finishButton');
const answerBox = document.querySelector('#answerBox');
nextQuestion.addEventListener('click', cleanPage);

function cleanPage() {
	rightGif.style.display = 'none';
	wrongGif.style.display = 'none';
	answerBox.style.display = 'none';
	// answerOne.style.display = 'none';
	// questionOne.style.display = 'none';
	answerInput.value = '';
	// for (let i = 1; i < triviaArray.length; i++) {
	// 	questionOne.innerText = triviaArray[i].question;

	// } I KNOW THIS (ABOVE) CAN WORK IM SO CLOSE^^^

	if (questionOne.innerText === triviaArray[0].question) {
		questionOne.innerText = triviaArray[1].question;
	} else if (questionOne.innerText === triviaArray[1].question) {
		questionOne.innerText = triviaArray[2].question;
	} else if (questionOne.innerText === triviaArray[2].question) {
		questionOne.innerText = triviaArray[3].question;
	} else if (questionOne.innerText === triviaArray[3].question) {
		questionOne.innerText = triviaArray[4].question;
	} else if (questionOne.innerText === triviaArray[4].question) {
		questionOne.innerText = triviaArray[5].question;
	} else if (questionOne.innerText === triviaArray[5].question) {
		questionOne.innerText = triviaArray[6].question;
	} else if (questionOne.innerText === triviaArray[6].question) {
		questionOne.innerText = triviaArray[7].question;
	} else if (questionOne.innerText === triviaArray[7].question) {
		questionOne.innerText = triviaArray[8].question;
	} else if (questionOne.innerText === triviaArray[8].question) {
		questionOne.innerText = triviaArray[9].question;
	} else if (questionOne.innerText === triviaArray[9].question) {
		questionOne.innerText = triviaArray[10].question;
	} else if (questionOne.innerText === triviaArray[10].question) {
		questionOne.innerText = triviaArray[11].question;
	} else if (questionOne.innerText === triviaArray[11].question) {
		questionOne.innerText = triviaArray[12].question;
	} else if (questionOne.innerText === triviaArray[12].question) {
		questionOne.innerText = triviaArray[13].question;
	} else if (questionOne.innerText === triviaArray[13].question) {
		questionOne.innerText = triviaArray[14].question;
	} else if (questionOne.innerText === triviaArray[14].question) {
		questionOne.innerText = triviaArray[15].question;
	} else if (questionOne.innerText === triviaArray[15].question) {
		questionOne.innerText = triviaArray[16].question;
	} else if (questionOne.innerText === triviaArray[16].question) {
		questionOne.innerText = triviaArray[17].question;
	} else if (questionOne.innerText === triviaArray[17].question) {
		questionOne.innerText = triviaArray[18].question;
	} else if (questionOne.innerText === triviaArray[18].question) {
		questionOne.innerText = triviaArray[19].question;
	} else if (questionOne.innerText === triviaArray[19].question) {
		nextQuestion.style.display = 'none';
		questionOne.style.display = 'none';
		finishButton.style.display = 'block';
	}
}

// works for now, need to implement loop on array

//________________________________________________________________________

/// Finish Button ///
const thanksModal = document.querySelector('#thanksModal');
const replayButton = document.querySelector('#thanksModalReplay');

const openThanksModal = () => {
	thanksModal.style.display = 'block';
};

const closeThanksModal = () => {
	thanksModal.style.display = 'none';
};

finishButton.addEventListener('click', openThanksModal);
// replayButton.addEventListener('click', closeThanksModal)

//________________________________________________________________________

const triviaArray = [
	{
		question: 'Who was Darth Vader before turning to the dark side?',
		answer: 'Anakin Skywalker',
	},
	{
		question: "What bounty hunter's DNA is the Clone army made from?",
		answer: 'Jango Fett',
	},
	{
		question: 'Who infiltrates Jabba’s palace in disguise to save Han Solo?',
		answer: 'Princess Leia',
	},
	{
		question:
			'Who says: "You can\'t win, Darth. If you strike me down, I shall become more powerful than you could possibly imagine"',
		answer: 'Obi-Wan Kenobi',
	},
	{
		question: "What color is Luke's lightsaber in Return of the Jedi?",
		answer: 'Green',
	},
	{
		question: 'What year did The Empire Strikes Back come out?',
		answer: '1980',
	},
	{
		question: 'On what planet did Anakin see Padme for the last time?',
		answer: 'Mustafar',
	},
	{
		question: "Who was Darth Sidious' master?",
		answer: 'Darth Plagueis',
	},
	{
		question:
			'Which clone trooper served under Jedi Master Plo Koon in the Clone Wars?',
		answer: 'Commander Wolffe',
	},
	{
		question:
			'How many Dewbacks were in the original 1977 theatrical cut of A New Hope?',
		answer: 'Two',
	},
	{
		question: 'Which hand did Luke lose in Empire Strikes Back?',
		answer: 'Right',
	},
	{
		question: "Who became Anakin's padawan?",
		answer: 'Ahsoka Tano',
	},
	{
		question: 'Who Killed Shaak Ti?',
		answer: 'General Grievous',
	},
	{
		question:
			'Which character had the first on-screen double-bladed lightsaber?',
		answer: 'Darth Maul',
	},
	{
		question: 'What planet is Padme from?',
		answer: 'Naboo',
	},
	{
		question: 'Who gets frozen in carbonite in the original trilogy?',
		answer: 'Han Solo',
	},
	{
		question: 'How many sith are there? According to Yoda',
		answer: 'Two',
	},
	{
		question: 'The clones are created on which planet?',
		answer: 'Kamino',
	},
	{
		question: 'Who was played by Kenny Baker?',
		answer: 'R2-D2',
	},
	{
		question:
			'After falling out of favor with Count Dooku, Asajj Ventress became a what?',
		answer: 'Bounty Hunter',
	},
];

// SCORE SOMEWHERE??? //

/*
1. Modal on launch - explaining how the game works
2. Close button on modal and button to reopen it
3. Button to begin the game and brings up the first question
4. Input box to type in answer and button to submit
5. Answer pops up after guess is submitted
6. Button for the next question to come up
7. Different modal to pop up and show score?
*/

// Trivia questions:

/*
1.  Q: Who was Darth Vader before turning to the dark side?
    A: Anakin Skywalker

2.  Q: What bounty hunter's DNA is the Clone army made from?
    A: Jango fett

3.  Q: On what planet did Anakin see Padme for the last time?
    A: Mustafar

4.  Q: Who infiltrates Jabba’s palace in disguise to save Han Solo?
    A: Princess Leia

5.  Q: Who says, "You can't win, Darth. If you strike me down, I shall become more powerful   than you could possibly imagine"
    A: Obi-Wan Kenobi

6.  Q: What color is Luke's lightsaber in Return of the Jedi?
    A: Green

7.  Q: What year did 'The Empire Strikes Back' come out?
    A: 1980

8.  Q: Who was Darth Sidious' master?
    A: Darth Plagueis

9.  Q: Which clone trooper served under Jedi Master Plo Koon in the Clone Wars?
    A: Commander Wolffe

10. Q: How many Dewbacks were in the original 1977 theatrical cut of A New Hope?
    A: 2
*/
