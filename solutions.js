document.querySelector("#solutions .close").addEventListener('click', closeSolutions);
document.querySelector('#solutions .confirmation button.cancel').addEventListener('click', closeSolutions);
document.querySelector('#solutions .confirmation button.ok').addEventListener('click', () => {
	document.querySelector('#solutions .confirmation').style.display = 'none';
	rememberSelection();
	playSolution();
});

document.querySelector("ul.menu li.solutions").addEventListener('click', (evt) => {
	const el = evt.target;
	if (!el.classList.contains('disabled')) {
		const skipReminder = localStorage.getItem('skip_reminder');
		document.getElementById('dontshow').style.display = skipReminder === undefined || skipReminder === null ? 'none' : 'initial';
		console.log(skipReminder, typeof skipReminder)
		document.getElementById("solutions").style.display = 'block';
		if (skipReminder === 'true') {
			playSolution();
		} else {
			document.querySelector('#solutions .confirmation').style.display = 'block';
		}
	}
});
function rememberSelection(falseOnly) {
	const dontShow = document.querySelector('#dontshow input');
	console.log(dontShow && dontShow.checked)
	if(localStorage.getItem('skip_reminder') !== 'true')
		localStorage.setItem('skip_reminder', falseOnly ? false : dontShow && dontShow.checked);
	if (dontShow)
		dontShow.checked = false;
}
function closeSolutions() {
	rememberSelection(true);
	const player = document.querySelector("iframe");
	if(player)
		player.remove();
	const playerDiv = document.createElement("div");
	playerDiv.setAttribute('id', 'player');
	const solutions = document.getElementById("solutions");
	solutions.appendChild(playerDiv);
	solutions.style.display = 'none';
}
function playSolution() {
	const solution = Levels.getById(Levels.current)[3];
	if(solution) {
		const player = new YT.Player('player', {
			height: '500',
			width: '670',
			videoId: solution.id,
			playerVars: {
				start: solution.start-1,
				end: solution.end,
				controls: 0,
				disablekb: 1,
				modestbranding: 1,
				fs: 0
			},
			events: {
				onReady: onPlayerReady,
			},
		});
	}
	function onPlayerReady(event) {
		const player = event.target;
		player.playVideo();
		setTimeout(() => {player.pauseVideo()}, 1000)
	}

}
