let minValue0 = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
let maxValue0 = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
(minValue0 < -999) ? minValue = -999 :
(minValue0 > 999) ? minValue = 999 : minValue = minValue0;
(maxValue0 > 999) ? maxValue = 999 :
(maxValue0 < -999) ? maxValue = -999 : maxValue = maxValue0;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
	minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
	maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
	alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
	answerNumber = Math.floor((minValue + maxValue) / 2);
	orderNumber = 1;
	gameRun = true;
	const orderNumberField = document.getElementById('orderNumberField');
	const answerField = document.getElementById('answerField');
	orderNumberField.innerText = orderNumber;
	answerField.innerText = `Вы загадали число ${answerNumber}?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
	if (gameRun) {
		if (minValue === maxValue) {
			const phraseRandom = Math.round(Math.random() * 3);
			const answerPhrase = (phraseRandom === 0) ?
				`Вы загадали неправильное число!\n\u{1F914}` :
				(phraseRandom === 1) ?
					`Я сдаюсь..\n\u{1F92F}` :
					(phraseRandom === 2) ?
						`С меня плохой Нострадамус..\n\u{1F92F}` :
						`Интересно, какое число вы загадали..\n\u{1F92F}`;

			answerField.innerText = answerPhrase;
			gameRun = false;
		} else {
			minValue = answerNumber + 1;
			answerNumber = Math.floor((minValue + maxValue) / 2);
			orderNumber++;
			orderNumberField.innerText = orderNumber;
			const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 0) ?
				`Вы загадали число ${answerNumber}?` :
				(phraseRandom === 1) ?
					`Да это легко! Ты загадал ${answerNumber}` :
					`Наверное, это число ${answerNumber}`;

			answerField.innerText = answerPhrase;
		}
	}
})

document.getElementById('btnEqual').addEventListener('click', function () {
	if (gameRun) {
		const phraseRandom = Math.round(Math.random() * 3);
		const answerPhrase = (phraseRandom === 0) ?
			`Я всегда угадываю!\n\u{1F914}` :
			(phraseRandom === 1) ?
				`Ты разве не знал, что я гений?\n\u{1F92F}` :
				(phraseRandom === 2) ?
					`Я молодец?\n\u{1F92F}` :
					`А вам слабо?\n\u{1F92F}`;

		answerField.innerText = answerPhrase;
		gameRun = false;
	}
})

document.getElementById('btnLess').addEventListener('click', function () {
	if (gameRun) {
		if (minValue === (maxValue - 1)) {
			const phraseRandom = Math.round(Math.random() * 3);
			const answerPhrase = (phraseRandom === 0) ?
				`Вы загадали неправильное число!\n\u{1F914}` :
				(phraseRandom === 1) ?
					`Я сдаюсь..\n\u{1F92F}` :
					(phraseRandom === 2) ?
						`С меня плохой Нострадамус..\n\u{1F92F}` :
						`Интересно, какое число вы загадали..\n\u{1F92F}`;

			answerField.innerText = answerPhrase;
			gameRun = false;
		} else {
			maxValue = answerNumber;
			answerNumber = Math.floor((minValue + maxValue) / 2);
			orderNumber++;
			orderNumberField.innerText = orderNumber;
			const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 0) ?
				`Вы загадали число ${answerNumber}?` :
				(phraseRandom === 1) ?
					`Да это легко! Ты загадал ${answerNumber}` :
					`Наверное, это число ${answerNumber}`;

			answerField.innerText = answerPhrase;
		}
	}
})