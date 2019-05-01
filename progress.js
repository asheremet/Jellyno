document.querySelector("#confirmation .close").addEventListener('click', closeChangeProgress);
document.querySelector("ul.menu li.changeprogress").addEventListener('click', function (evt) {
	document.querySelector('#confirmation').style.display = 'block';
	document.querySelector('#confirmation .syncGame').style.display = 'block';
});
document.querySelector("#confirmation .syncGame button.cancel").addEventListener('click', closeChangeProgress);
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
function closeChangeProgress() {
	document.querySelector('#confirmation').style.display = 'none';
	document.querySelector('#confirmation .syncGame').style.display = 'none';
}
