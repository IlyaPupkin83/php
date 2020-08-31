let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
inputWindow.value = '0';

document.getElementById('btn_1').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '1';
		outputWindow.value += '1';
	} else {
		inputWindow.value += '1';
		outputWindow.value += '1';
	}
})

document.getElementById('btn_2').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '2';
		outputWindow.value += '2';
	} else {
		inputWindow.value += '2';
		outputWindow.value += '2';
	}
})

document.getElementById('btn_3').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '3';
		outputWindow.value += '3';
	} else {
		inputWindow.value += '3';
		outputWindow.value += '3';
	}
})

document.getElementById('btn_4').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '4';
		outputWindow.value += '4';
	} else {
		inputWindow.value += '4';
		outputWindow.value += '4';
	}
})

document.getElementById('btn_5').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '5';
		outputWindow.value += '5';
	} else {
		inputWindow.value += '5';
		outputWindow.value += '5';
	}
})

document.getElementById('btn_6').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '6';
		outputWindow.value += '6';
	} else {
		inputWindow.value += '6';
		outputWindow.value += '6';
	}
})

document.getElementById('btn_7').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '7';
		outputWindow.value += '7';
	} else {
		inputWindow.value += '7';
		outputWindow.value += '7';
	}
})

document.getElementById('btn_8').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '8';
		outputWindow.value += '8';
	} else {
		inputWindow.value += '8';
		outputWindow.value += '8';
	}
})

document.getElementById('btn_9').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '';
		inputWindow.value += '9';
		outputWindow.value += '9';
	} else {
		inputWindow.value += '9';
		outputWindow.value += '9';
	}
})

document.getElementById('btn_0').addEventListener('click', function () {
	if (inputWindow.value === '0') {
		inputWindow.value = '0';
		outputWindow.value += '0';
	} else {
		inputWindow.value += '0';
		outputWindow.value += '0';
	}
})

document.getElementById('btn_sum').addEventListener('click', function () {
	lastOperand = parseFloat(inputWindow.value.replace(/,/, '.'));
	operation = 'sum';
	inputWindow.value = '';
	outputWindow.value += '+';
})

document.getElementById('btn_dif').addEventListener('click', function () {
	lastOperand = parseFloat(inputWindow.value.replace(/,/, '.'));
	operation = 'dif';
	inputWindow.value = '';
	outputWindow.value += '-';
})

document.getElementById('btn_div').addEventListener('click', function () {
	lastOperand = parseFloat(inputWindow.value.replace(/,/, '.'));
	operation = 'div';
	inputWindow.value = '';
	outputWindow.value += '/';
})

document.getElementById('btn_mult').addEventListener('click', function () {
	lastOperand = parseFloat(inputWindow.value.replace(/,/, '.'));
	operation = 'mult';
	inputWindow.value = '';
	outputWindow.value += '*';
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
	lastOperand = parseFloat(inputWindow.value.replace(/,/, '.'));
	const result = Math.sqrt(lastOperand);
	inputWindow.value = result.toFixed(14).replace(/\./g, ',').replace(/0*$/, "").replace(/,0*$/, "");
	outputWindow.value += '√=' + inputWindow.value;
	operation = null;
	lastOperand = 0;
})

document.getElementById('btn_unm').addEventListener('click', function () {
	lastOperand = parseFloat(inputWindow.value.replace(/,/, '.'));
	operation = 'unm';
	const result = - lastOperand;
	inputWindow.value = result.toString().replace(/\./g, ',');
	outputWindow.value += '±=' + inputWindow.value;
	operation = null;
	lastOperand = 0;
})

document.getElementById('btn_com').addEventListener('click', function () {
	inputWindow.value += ',';
	outputWindow.value += ',';
})

document.getElementById('btn_calc').addEventListener('click', function () {
	if (operation === 'sum') {
		const result = lastOperand + parseFloat(inputWindow.value.replace(/,/, '.'));
		inputWindow.value = result.toFixed(14).replace(/\./g, ',').replace(/0*$/, "").replace(/,0*$/, "");
		outputWindow.value += '=' + inputWindow.value;
		operation = null;
		lastOperand = 0;
	}
	if (operation === 'dif') {
		const result = lastOperand - parseFloat(inputWindow.value.replace(/,/, '.'));
		inputWindow.value = result.toFixed(14).replace(/\./g, ',').replace(/0*$/, "").replace(/,0*$/, "");
		outputWindow.value += '=' + inputWindow.value;
		operation = null;
		lastOperand = 0;
	}
	if (operation === 'div') {
		const result = lastOperand / parseFloat(inputWindow.value.replace(/,/, '.'));
		inputWindow.value = result.toFixed(14).replace(/\./g, ',').replace(/0*$/, "").replace(/,0*$/, "");
		outputWindow.value += '=' + inputWindow.value;
		operation = null;
		lastOperand = 0;
	}
	if (operation === 'mult') {
		const result = lastOperand * parseFloat(inputWindow.value.replace(/,/, '.'));
		inputWindow.value = result.toFixed(14).replace(/\./g, ',').replace(/0*$/, "").replace(/,0*$/, "");
		outputWindow.value += '=' + inputWindow.value;
		operation = null;
		lastOperand = 0;
	}
})

document.getElementById('btn_clr').addEventListener('click', function () {
	lastOperand = 0;
	operation = null;
	inputWindow.value = '0';
	outputWindow.value += '; ';
})