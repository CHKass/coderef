// Reduced version of transition.js

// Checks if valid selection made and returns boolean true or false
function validSelection(val1, val2) {
  	return (
    	val1 !== val2 &&
    	val1 !== '' &&
    	val2 !== '' &&
    	val1 !== 'Chord 1' &&
    	val2 !== 'Chord 2'
  	)
}

// Updates button on each click
function changeText() {
  	var elem = document.getElementById('myBtn');
  	if (elem.innerHTML === 'Search Transition') elem.innerHTML = 'Replay';
  	else elem.innerHTML = 'Replay';
}

// Error message if selection not valid 
function setMessage(msg, color) {
  	var message = document.querySelector('.message');
	
  	message.style.display = 'block';
  	message.style.color = color;
  	message.textContent = msg;
  	// Removes setMessage after 3 seconds
  	setTimeout(
  	  	function() {
  	    	message.textContent = '';
  	  	}, 3000
  	);
}

// Method for invalid chord selection and error message alert
function changeTextFalse() {
  	var elem = document.getElementById('myBtn');
  		elem.innerHTML = 'Search Transitions';
	
  	setMessage(`Please select from both chord options and ensure they are different chords`, true, 'red');
}

// Calculates variable 'trans' and creates 'Go' button text
function fetchTrans() {
  	const startChord = document.getElementById('startChord').value;
  	const endChord = document.getElementById('endChord').value;
	
  	let trans = `${startChord}-${endChord}-${startChord}`;

  	if (validSelection(startChord, endChord)) {
    	var chordLink = document.createElement('a')
    	var linkText = document.createTextNode('Go!')
    	var linkButton = document.getElementById('myBtn')
    	let listElemCount = linkButton.childElementCount;

// If else statement to select correct page for a particular transition
	    if (startChord === a || am || a7 || amaj7 || am7) {
        chordLink.setAttribute('href', `./Achords.html/#${trans}`);
      } else if (startChord === b7) {
        chordLink.setAttribute('href', `./Bchords.html/#${trans}`);
      } else if (startChord === c || cmaj7 || c7) {
        chordLink.setAttribute('href', `./Cchords.html/#${trans}`);
      } else if (startChord === d || dm || d7 || dmaj7 || dm7) {
        chordLink.setAttribute('href', `./Dchords.html/#${trans}`);
      } else if (startChord === e || e7 || em || em7) {
        chordLink.setAttribute('href', `./Echords.html/#${trans}`);
      } else if (startChord === f || fmaj7) {
        chordLink.setAttribute('href', `./Fchords.html/#${trans}`);
      } else if (startChord === g || g7) {
        chordLink.setAttribute('href', `./Gchords.html/#${trans}`);
      }
       
    	//chordLink.setAttribute('href', `#${trans}`);  // Remove this line if the previous links work
    	chordLink.appendChild(linkText)
	
    	linkButton.removeChild(linkButton.childNodes[0])
    	linkButton.appendChild(chordLink)
      }

  	} else {
    // Do nothing
    changeTextFalse();
  	}

// If not valid the 'changeTextFalse()' is called
document.getElementById('myBtn').addEventListener('click', function() {
  const startChord = document.getElementById('startChord').value;
  const endChord = document.getElementById('endChord').value;
  	if (validSelection(startChord, endChord)) {
  	  	changeText();
  	} else {
  	  	changeTextFalse();
  	}
});

// Event Listeners that look for chord selection and changes to 'View Transition' if valid
document.getElementById('startChord').addEventListener('change', fetchTrans);
document.getElementById('endChord').addEventListener('change', fetchTrans);
