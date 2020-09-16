const personGenerator = {
	surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
	firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
	 }`,
	firstNameFemaleJson: `{
		"count": 10,
		"list": {     
			 "id_1": "Александра",
			 "id_2": "Ольга",
			 "id_3": "Кристина",
			 "id_4": "Виктория",
			 "id_5": "Марина",
			 "id_6": "Галина",
			 "id_7": "Валентина",
			 "id_8": "Анастасия",
			 "id_9": "Стефания",
			 "id_10": "Надежда"
		}
  }`,
	ProfFemaleJson: `{
	"count": 10,
	"list": {     
		 "id_1": "Воспитатель",
		 "id_2": "Продавец",
		 "id_3": "Кассир",
		 "id_4": "Бухгалтер",
		 "id_5": "Повар",
		 "id_6": "HR-менеджер",
		 "id_7": "Врач",
		 "id_8": "Медсестра",
		 "id_9": "Дизайнер",
		 "id_10": "Психолог"
	}
}`,
	ProfMaleJson: `{
	"count": 10,
	"list": {     
		 "id_1": "Слесарь",
		 "id_2": "Солдат",
		 "id_3": "Шахтер",
		 "id_4": "Инженер",
		 "id_5": "Водолаз",
		 "id_6": "Дворник",
		 "id_7": "Строитель",
		 "id_8": "Преподователь",
		 "id_9": "Директор",
		 "id_10": "Летчик"
	}
}`,

	GENDER_MALE: 'Мужчина',
	GENDER_FEMALE: 'Женщина',

	randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

	randomValue: function (json) {
		const obj = JSON.parse(json);
		const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
		return obj.list[prop];
	},

	randomGender: function () {
		(this.randomIntNumber(2, 1) === 1) ? (gend = this.GENDER_MALE) : (gend = this.GENDER_FEMALE);
		return gend;
	},

	randomPatronymic: function () {
		const obj = JSON.parse(this.firstNameMaleJson);
		const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
		randNameForPatron = obj.list[prop];
		switch (this.person.gender) {
			case this.GENDER_MALE:
				(randNameForPatron.slice(-1) === 'й') ?
					(patron = `${randNameForPatron.replace('й', 'е')}вич`) :
					(randNameForPatron.slice(-1) === 'а') ?
						(patron = `${randNameForPatron.replace('а', 'ич')}`) :
						(patron = `${randNameForPatron}ович`);
				break;
			case this.GENDER_FEMALE:
				(randNameForPatron.slice(-1) === 'й') ?
					(patron = `${randNameForPatron.replace('й', 'е')}вна`) :
					(randNameForPatron.slice(-1) === 'а') ?
						(patron = `${randNameForPatron.replace('а', 'ична')}`) :
						(patron = `${randNameForPatron}овна`);
				break;
		}

		return patron;
	},

	randomFirstName: function () {
		(this.person.gender === this.GENDER_MALE) ? (name = this.randomValue(this.firstNameMaleJson)) :
			(name = this.randomValue(this.firstNameFemaleJson));
		return name;
	},

	randomSurname: function () {
		(this.person.gender === this.GENDER_MALE) ? (surn = this.randomValue(this.surnameJson)) : (surn = `${this.randomValue(this.surnameJson)}а`);
		return surn;
	},

	randomBirthYear: function () {
		const byear = this.randomIntNumber(2020, 1900);
		return byear;
	},

	randomProf: function () {
		(this.person.gender === this.GENDER_MALE) ? (prof = this.randomValue(this.ProfMaleJson)) :
			(prof = this.randomValue(this.ProfFemaleJson));
		return prof;
	},

	randomBirthDate: function (date1, date2) {
		let date11 = date1 || '01-01-1980';
		let date22 = date2 || new Date().toLocaleDateString();
		date11 = new Date(date11).getTime();
		date22 = new Date(date22).getTime();
		if (date11 > date22) {
			return new Date(this.randomIntNumber(date22, date11)).toLocaleDateString();
		} else {
			return new Date(this.randomIntNumber(date11, date22)).toLocaleDateString();
		}
	},



	getPerson: function () {
		this.person = {};
		this.person.gender = this.randomGender();
		this.person.firstName = this.randomFirstName();
		this.person.surname = this.randomSurname();
		this.person.birthYear = this.randomBirthDate('01-01-1900', '01-01-2020');
		this.person.patronymic = this.randomPatronymic();
		this.person.prof = this.randomProf();
		return this.person;
	}
};