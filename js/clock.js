(function(){ 
	const myNode = document.createElement("div");
	const digitalClock = document.getElementById("digitalClock");
	digitalClock.appendChild(myNode);
	
	const secondHand = document.getElementById("secondHand");
	const minHand = document.getElementById("minHand");
	const hrHand = document.getElementById("hrHand");

	const updateClockHands = (myDate) => {
		const seconds = myDate.getSeconds();
		const rotSeconds = seconds * 6 - 90;
		secondHand.style.transform = `rotate(${rotSeconds}deg)`;

		const minutes = myDate.getMinutes();
		const rotminutes = minutes * 6 - 90;
		minHand.style.transform = `rotate(${rotminutes}deg)`;

		const hours = myDate.getHours();
		const rotHours = hours * 30 - 90;
		hrHand.style.transform = `rotate(${rotHours}deg)`;
	};
	
	const updateTime = () => {
		const myDate = new Date();
		// show only hours, minutes and seconds
		myNode.innerHTML = myDate.toLocaleTimeString([], { timeStyle: "medium" });

		updateClockHands(myDate);
	};

	setInterval(updateTime, 1000);
	updateTime();
})();