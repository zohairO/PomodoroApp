// popup functions 
function openPopup () {
	popup.classList.add("open-popup")
}

function closePopup () {
	popup.classList.remove("open-popup")
}


// set timer function 
function getValue () {
	const inputVal = document.getElementById("time");
	document.getElementById("timer-display").textContent = inputVal.value;
}	


// make a function to start time
let intervalId;

function startTime () {
	// calculate the total time 
	const time = document.getElementById("timer-display").textContent;
	const splitTime = time.split(":");
	const minutes = splitTime[0];
	const seconds = splitTime[1];

	const totalTime = (minutes*60) + seconds;
	if(intervalId) {
		return;
	}

	intervalId = setInterval (() => {

		if(totalTime <= 0) {
			clearInterval(intervalId)
		}
	})


}


// make a function to stop time
function stopTime (){

}


// make a function to update the time
function updateDisplay() {
    
}

