let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
inputWindow.value = '0';

document.getElementById('btn_1').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '1';
	} else {
		inputWindow.value += '1';
	}
})

document.getElementById('btn_2').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '2';
	} else {
		inputWindow.value += '2';
	}
})

document.getElementById('btn_3').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '3';
	} else {
		inputWindow.value += '3';
	}
})

document.getElementById('btn_4').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '4';
	} else {
		inputWindow.value += '4';
	}
})

document.getElementById('btn_5').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '5';
	} else {
		inputWindow.value += '5';
	}
})

document.getElementById('btn_6').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '6';
	} else {
		inputWindow.value += '6';
	}
})

document.getElementById('btn_7').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '7';
	} else {
		inputWindow.value += '7';
	}
})

document.getElementById('btn_8').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '8';
	} else {
		inputWindow.value += '8';
	}
})

document.getElementById('btn_9').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '9';
	} else {
		inputWindow.value += '9';
	}
})

document.getElementById('btn_0').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '0';
	} else {
		inputWindow.value += '0';
	}
})

document.getElementById('btn_sum').addEventListener('click', function () {
	lastOperand = parseInt(inputWindow.value);
	operation = 'sum';
	inputWindow.value = '';
})

document.getElementById('btn_dif').addEventListener('click', function () {
	lastOperand = parseInt(inputWindow.value);
	operation = 'dif';
	inputWindow.value = '';
})

document.getElementById('btn_div').addEventListener('click', function () {
	lastOperand = parseInt(inputWindow.value);
	operation = 'div';
	inputWindow.value = '';
})

document.getElementById('btn_mult').addEventListener('click', function () {
	lastOperand = parseInt(inputWindow.value);
	operation = 'mult';
	inputWindow.value = '';
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
	lastOperand = parseInt(inputWindow.value);
	operation = 'sqrt';
	inputWindow.value = '';
})

document.getElementById('btn_unm').addEventListener('click', function () {
	lastOperand = parseInt(inputWindow.value);
	operation = 'unm';
	const result = - lastOperand;
	operation = null;
	lastOperand = 0;
	inputWindow.value = result;
})

document.getElementById('btn_calc').addEventListener('click', function () {
	if (operation === 'sum') {
		const result = lastOperand + parseInt(inputWindow.value);
		operation = null;
		lastOperand = 0;
		inputWindow.value = result;
	}
	if (operation === 'dif') {
		const result = lastOperand - parseInt(inputWindow.value);
		operation = null;
		lastOperand = 0;
		inputWindow.value = result;
	}
	if (operation === 'div') {
		const result = lastOperand / parseInt(inputWindow.value);
		operation = null;
		lastOperand = 0;
		inputWindow.value = result;
	}
	if (operation === 'mult') {
		const result = lastOperand * parseInt(inputWindow.value);
		operation = null;
		lastOperand = 0;
		inputWindow.value = result;
	}
	if (operation === 'sqrt') {
		const result = Math.sqrt(lastOperand);
		operation = null;
		lastOperand = 0;
		inputWindow.value = result;
	}
})

document.getElementById('btn_clr').addEventListener('click', function () {
	lastOperand = 0;
	operation = null;
	inputWindow.value = '0';
})