
window.onload = function () {
	const initPerson = personGenerator.getPerson();
	document.getElementById('genderOutput').innerText = initPerson.gender;
	document.getElementById('firstNameOutput').innerText = initPerson.firstName;
	document.getElementById('surnameOutput').innerText = initPerson.surname;
	document.getElementById('birthYearOutput').innerText = `${initPerson.birthYear} г.р.`;
	document.getElementById('PatronymicOutput').innerText = initPerson.patronymic;
	document.getElementById('ProfOutput').innerText = initPerson.prof;
};

