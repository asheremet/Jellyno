document.querySelector("#confirmation .close").addEventListener('click', closeSolutions);
document.querySelector('#confirmation .solutions button.cancel').addEventListener('click', closeSolutions);
document.querySelector('#confirmation .solutions button.ok').addEventListener('click', () => {
	document.querySelector('#confirmation .solutions').style.display = 'none';
	rememberSelection();
	playSolution();
});

document.querySelector("ul.menu li.solutions").addEventListener('click', (evt) => {
	document.querySelector("#confirmation .close").classList.add('close-solutions');
	const el = evt.target;
	if (!el.classList.contains('disabled')) {
		const skipReminder = localStorage.getItem('skipReminder');
		document.getElementById('dontshow').style.display = skipReminder === undefined || skipReminder === null ? 'none' : 'initial';
		document.getElementById("confirmation").style.display = 'block';
		if (skipReminder === 'true') {
			playSolution();
		} else {
			document.querySelector('#confirmation .solutions').style.display = 'block';
		}
	}
});
function rememberSelection(falseOnly) {
	const dontShow = document.querySelector('#dontshow input');
	if(localStorage.getItem('skipReminder') !== 'true')
		localStorage.setItem('skipReminder', falseOnly ? false : dontShow && dontShow.checked);
	if (dontShow)
		dontShow.checked = false;
}
function closeSolutions() {
	const closeBtn = document.querySelector("#confirmation .close");
	if (closeBtn.classList.contains('close-solutions')) {
		rememberSelection(true);
		const player = document.querySelector("iframe");
		if (player)
			player.remove();
		const playerDiv = document.createElement("div");
		playerDiv.setAttribute('id', 'player');
		const solutions = document.getElementById("confirmation");
		solutions.appendChild(playerDiv);
		solutions.style.display = 'none';
		document.querySelector('#confirmation .solutions').style.display = 'none';
		closeBtn.classList.remove('close-solutions');
	}
}
function playSolution() {
	const solution = Levels.getById(Levels.current)[3];
	if(solution) {
		const player = new YT.Player('player', {
			height: '500',
			width: '670',
			videoId: solution.id,
			playerVars: {
				start: parseInt(solution.start),
				end: solution.end,
				controls: 0,
				disablekb: 1,
				modestbranding: 1,
				fs: 0
			},
			events: {
				onReady: onPlayerReady.bind(null, ((parseFloat(solution.start)-parseInt(solution.start))*1000)),
			},
		});
	}
	function onPlayerReady(delay, event) {
		const player = event.target;
		player.playVideo();
		setTimeout(() => {player.pauseVideo()}, delay+1000)
	}

}
