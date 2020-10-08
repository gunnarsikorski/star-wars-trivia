/// MODAL ///

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

//________________________________________________________________________

/// Question Button ///












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
