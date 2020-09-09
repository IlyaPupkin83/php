let minValue = 0;
let maxValue = 100;
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
answerField.innerText = 'Игра еще не началась';

document.getElementById('outputText').innerHTML = "Для начала игры введите минимальное и максимальное числа";

orderNumberField.innerText = orderNumber;

var ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
var tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
var teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семьнадцать', 'восемьнадцать', 'девятнадцать'];
var hungreds = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятсот'];

function convert_hundreds(answerNumber) {
	if (Math.abs(answerNumber) > 99) {
		return hungreds[Math.floor(Math.abs(answerNumber) / 100) - 1] + " " + convert_tens(Math.abs(answerNumber) % 100);
	} else
		return convert_tens(answerNumber);
}

function convert_tens(answerNumber) {
	if ((Math.abs(answerNumber) > 0) && (Math.abs(answerNumber) < 10)) {
		return ones[Math.abs(answerNumber)];
	} else if ((Math.abs(answerNumber) >= 10) && (Math.abs(answerNumber) < 20))
		return teens[Math.abs(answerNumber) - 10];
	else
		return tens[Math.floor(Math.abs(answerNumber) / 10)] + " " + ones[Math.abs(answerNumber) % 10];
}

function convert(answerNumber) {
	if (answerNumber == 0) return 0;
	else if (answerNumber < 0) {
		result = - answerNumber;
		answerNumberInWords = convert_hundreds(result);
		return "минус" + " " + answerNumberInWords;
	} else
		return convert_hundreds(answerNumber);
}

document.getElementById('button-addon1').addEventListener('click', function () {
	inputWindowMin = document.getElementById('inputMin');
	inputMin = inputWindowMin.value;
	minValue0 = parseInt(inputMin) || 0;
})

document.getElementById('button-addon2').addEventListener('click', function () {
	inputWindowMax = document.getElementById('inputMax') || 100;
	inputMax = inputWindowMax.value;
	maxValue0 = (parseInt(inputMax) === 0) ? 0 : parseInt(inputMax) || 100;

	(minValue0 < -999) ? minValue = -999 :
		(minValue0 > 999) ? minValue = 999 : minValue = minValue0;
	(maxValue0 > 999) ? maxValue = 999 :
		(maxValue0 < -999) ? maxValue = -999 : maxValue = maxValue0;
	TextOut = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
	document.getElementById('outputText').innerHTML = TextOut;
	answerNumber = Math.floor((minValue + maxValue) / 2);

	answerNumberInWords0 = convert(answerNumber);
	answerNumberInWords = (answerNumberInWords0.length < 20) ? answerNumberInWords0 :
		(answerNumber < 0) ? (`минус ${- answerNumber}`) : answerNumber;

	answerField.innerText = `Вы загадали число ${answerNumberInWords}?`;
})

document.getElementById('btnRetry').addEventListener('click', function () {
	orderNumber = 1;
	orderNumberField.innerText = orderNumber;
	gameRun = true;

	document.getElementById('outputText').innerHTML = "Для начала игры введите минимальное и максимальное числа";

	inputWindowMax.value = '';
	inputWindowMin.value = '';
	answerField.innerText = 'Игра еще не началась';
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
			answerNumberInWords0 = convert(answerNumber);
			answerNumberInWords = (answerNumberInWords0.length < 20) ? answerNumberInWords0 :
				(answerNumber < 0) ? (`минус ${- answerNumber}`) : answerNumber;
			const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 0) ?
				`Вы загадали число ${answerNumberInWords}?` :
				(phraseRandom === 1) ?
					`Да это легко! Ты загадал ${answerNumberInWords}` :
					`Наверное, это число ${answerNumberInWords}`;

			answerField.innerText = answerPhrase;
		}
	}
})

document.getElementById('btnEqual').addEventListener('click', function () {
	if (gameRun) {
		const phraseRandom = Math.round(Math.random() * 3);
		const answerPhrase = (phraseRandom === 0) ?
			`Я всегда угадываю!` :
			(phraseRandom === 1) ?
				`Ты разве не знал, что я гений?` :
				(phraseRandom === 2) ?
					`Я молодец?` :
					`А вам слабо?`;

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
			answerNumberInWords0 = convert(answerNumber);
			answerNumberInWords = (answerNumberInWords0.length < 20) ? answerNumberInWords0 :
				(answerNumber < 0) ? (`минус ${- answerNumber}`) : answerNumber;
			const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 0) ?
				`Вы загадали число ${answerNumberInWords}?` :
				(phraseRandom === 1) ?
					`Да это легко! Ты загадал ${answerNumberInWords}` :
					`Наверное, это число ${answerNumberInWords}`;

			answerField.innerText = answerPhrase;
		}
	}
})