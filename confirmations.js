function closeConfirmation(){
	document.querySelectorAll("#confirmation, #confirmation .syncGame, #confirmation .resetGame")
		.forEach(el => {el.style.display = 'none';})
}
function showConfirmation(){
	document.querySelector('#confirmation').style.display = 'block';

}
document.querySelectorAll("#confirmation .close, #confirmation .syncGame button.cancel, #confirmation .resetGame button.cancel")
	.forEach(el => { el.addEventListener('click', closeConfirmation) });

document.querySelector("ul.menu li.changeprogress").addEventListener('click', function (evt) {
	showConfirmation();
	document.querySelector('#confirmation .syncGame').style.display = 'block';
});
document.querySelector('#confirmation .syncGame button.ok').addEventListener('click', () => {
	const passedLvl = Number(document.querySelector('#confirmation .syncGame input.passed').value);
	const skippedLvls = document.querySelector('#confirmation .syncGame input.skipped').value.split(/\s*,\s*/);
	const passedLevels = {};
	localStorage.setItem('lastlevel', passedLvl);
	for(let i = 0; i <= passedLvl; i++){
		if(skippedLvls.indexOf(i.toString()) === -1)
			passedLevels[i-1] = true;
	}
	localStorage.setItem('passedLevels', JSON.stringify(passedLevels));
	location.reload();
});

document.querySelector("li.resetgame").addEventListener('click', function (evt) {
	showConfirmation();
	document.querySelector('#confirmation .resetGame').style.display = 'block';
});
document.querySelector('#confirmation .resetGame button.ok').addEventListener('click', resetGame);
