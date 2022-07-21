'use strict';

/** 
* !   {----------------- Переменные Variables -------------------}

* ?	  const(unchangeable option) leftBorderWidth = 1;
* ?	  var(old option) count = 20;
* ?	  let(changeable option) number = 5;
* ?	  number = 10;
* ?	  console.log(number);
* ?	  const name = 'Ivan';
* ?	  console.log(name);

* !   {----------------- Типы данных ----------------------------}

* *   1.Числа
* ?	      let number = 5.6;
* ?				console.log(-4/0);
* ?				console.log('string' * 9);

* *   2.Строка
* ?			const person = "Alex";

* *   3.Буллевые значение
* ?			const bool = true/false

* *   4.Несуществующие значение(null, NaN)
* ?			   console.log

* *   5.Пустое значение(undefined)
* ?			let und;
* ?				console.log(und)

* *   6.Symbol

* *	7.BigInt

* *	8.Объект   
* ?			const obj = {
* ?				name: 'Ivan',
* ?				age: 18,
* ?            isMarried: false
* ?			};
* ?			   1)console.log(obj.name)
* ?		      2)console.log(obj['name'])

* *	9.Массив 
* ?         let arr = ['plum.png', 'orange.png', 6,  {}, []];
* ?            console.log(arr[1])

* !   {----------------- Общение с пользователем ----------------------------}

* *	1. alert
* ?			alert('Hello World');

* *	2. Confirm
* ?			const result = confirm("Are you here");

* *   3. Prompt
* ?			const answer = prompt('Вам есть 18?', '')
* ?            console.log(typeof(answer)) - typeof() показывает тип содержимого
* ?         
* ?		   const answers = [];
* ?			answers[0] = prompt('Как ваше имя?', '');
* ?			answers[1] = prompt('Как ваше фамилия?', '');
* ?			answers[2] = prompt('Сколько вам лет?', '');
* ?
* ?         document.write(answers);

* !   {----------------- Интерполяция(ES6) ----------------------------}

* ?         const category = 'toys';

* ?            console.log('https://someurl.com/' + category = '/' + '4'); - старый вариант.

* ?            console.log(`https://someurl.com/${category}/5`); - новый вариант ES6.
* ?         const user = 'Ivan'
	* ?      alert(`Привет${user}`);

* !   {----------------- Операторы JS ----------------------------}

* *   1.Инкремент и дикремент - (++) (--)

* ?         let incr = 10, 
* ?             decr = 10;
* ?
* !         incr++; - постфиксный варриантf
* !			decr--;
* ?					или
* ?            console.log(incr++)
* ?            console.log(decr--)
* ?
* !         ++incr; - префиксный варриант
* !			--decr;
* ?					или
* ?            console.log(++incr)
* ?            console.log(--decr)

* *   2.Процент - %

* ?            console.log(5%2); - получим остаток - 1

* *   3.Строгое и не строгое равенство - (===), (==)

* !         = - присваивание
* !			== - нестрогое равенство(сравнение значение, а не типы данных)
* !			=== - строгое равенство(сравнение типы данных, number = number)

* ?				console.log(2*4 == '8') - не строгое равенство, получим true
* ?            console.log(2*4 === '8') - строгое равенство, получим false

* *   4. Логические операторы && и || 
			
* !     && - возваращает true, только когда два выражение правдивые
* !     || - возваращает true, если хотя бы одно выражение правдивое
* !     ! - делает противоположное действие	
* ?			const isChecked = true,
* ?				   isClose = false;
* ?
* ?            console.log(isChecked && isClose); получаем false
* ?            console.log(isChecked || isClose); получаем true
* ?				console.log(!isChecked || isClose); получаем false из-за оператора !
* ?

* !      {----------------- Практика #1 ----------------------------}  

	
* ?			 Задание на урок:
* ?		1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
* ?		'Сколько фильмов вы уже посмотрели?'
* ?		2) Создать объект personalMovieDB и в него поместить такие свойства:
* ?         - count - сюда передается ответ на первый вопрос
* ?         - movies - в это свойство поместить пустой объект
* ?         - actors - тоже поместить пустой объект
* ?         - genres - сюда поместить пустой массив
* ?         - privat - в это свойство поместить boolean(логическое) значение false
* ?		3) Задайте пользователю по два раза вопросы:
* ?         - 'Один из последних просмотренных фильмов?'
* ?         - 'На сколько оцените его?'
* ?		Ответы стоит поместить в отдельные переменные
* ?		Записать ответы в объект movies в формате: 
* ?         movies: {
* ?           'logan': '8.1'
* ?         }
* ?		Проверить, чтобы все работало без ошибок в консоли 
* ?
* ?      let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
* ?	
* ?	let personalMovieDB = {
* ?		count: numberOfFilms,
* ?		movies: {},
* ?		actors: {},
* ?		genres: [],
* ?		privat: false
* ?	};
* ?	
* ?	let lastMovie = prompt("Один из последних просмотренных фильмов?", "");
* ?	let estimateMovie = prompt("На сколько оцените его?", "");

* ?	personalMovieDB.movies[lastMovie] = estimateMovie;

* ?	console.log(personalMovieDB);
	
	
* !      {----------------- Условие ----------------------------}
		
			
			
* ?			if(num > 101) {
* ?				console.log('больше');
* ?			} else if (num < 100) {
* ?				console.log('меньше');
* ?			} else {
* ?				console.log('В точку');
* ?			}
			
* ?			(num == 100) ? console.log("Верно") : console.log("Не верно");
			
* ?			let num = 100;
			
* ?			switch(num) {
* ?				case 101:
* ?					console.log('Больше');
* ?					break;
* ?				case 99:
* ?					console.log('Меньше');
* ?					break;
* ?				case 100:
* ?					console.log('В точку');
* ?					break;
* ?				default:
* ?					console.log('А хуй вам');
* ?					break;
* ?			}
	
* !      {----------------- Логические операторы --------------------------------}
	
* ?		&& - возвращает true, если все учасники операции правдивы
* ?      || - возвращает true, если хотябы одно значение true
* ?	
* ?	   {-------------------------------  && -----------------------------------}

* ?      const hamburger = true;
* ?      const fries = true;
* ?
* ?      if (hamburger && fries) {
* ?				console.log("Я сыт");
* ?			}
* ?		      console.log(hamburger && fries) - вернёт true, потому что два значение верны(hamburger и fries)
* ?		      
* ?		{-----------------------------------------------------------------------}

* ?		const hamburger = true;
* ?      const fries = false;
* ?
* ?      if (hamburger && fries) {
* ?				console.log("Я сыт");
* ?			}
* ?		      console.log(hamburger && fries) - вернёт false, потому что есть хотя бы одно ложное значение
* ?
* !      NaN, 0, undefined, Null, "" - всегда будут false
* ?		const hamburger = 2;
* ?      let cola = 0;
* ?      const fries = 1;   
* ?   
* ?		console.log(hamburger === 3 && cola && fries) - вернёт значение cola (0),
* ?		                                            потому что оператор && выводит первое ложное значение 
* ?			
* ?		console.log(1 && 0) - вернёт 0
* ?		console.log(1 && 5) - вернёт 5
* ?		console.log(null && 5) - вернёт null
* ?		console.log(0 && 'random string') - вернёт 0
* ?			
* ?      if (hamburger === 3 && fries === 1) {
* ?            console.log('Все сыты');
* ?		    } else {
* ?			   console.log('Мы уходим');
* ?			 }
* ?	  {-------------------------------  || -------------------------------------}

* ?		const hamburger = 3;
* ?      const cola = 0;
* ?      const fries = 3;
* ?		const nuggets = 2;

* ?      if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
* ?            console.log('Все довольно');
* ?		    } else {
* ?			   console.log('Мы уходим');
* ?			 }
* ?
				
* ?			let johnReport,
* ?				 alexreport,
* ?			    samReport,
* ?				 mariaReport = 'done';

* ?				 console.log(johnReport || alexreport || samReport || mariaReport); - вернёт значение(mariareport),
* ?				                           потому что || проверяет все значение, если не нашло верное значение,
* ?													вернёт последнее ложное
* ?			
* ?			
* !      {----------------- Циклы --------------------------------}

* *     1ий вариант:

* ?      let num = 50;

* ?      while (num <= 55) {
* ?				console.log(num);
* ?				num++;
* ?			}

* *     2ой вариант:

* ?      do {
* ?			   console.log(num)
* ?			   num++;
* ?			}

* ?      while (num < 55);

* *     3ой вариант:

* ?      for(let i = 1; i < 10; i++) {
* ?			if(i === 6) {
* ?					break; - прерывает цикл на значение(6) 
* ?					continue; - удалят значение(6), и идет дальше
* ?			   }
* ?				console.log(i);
* ?			}



* ?			 for (let i = 0; i < 3; i++) {
* ?				 console.log(i);
* ?				 for (let j = 0; j < 3; j++) {
* ?					console.log(j);
* ?				}
* ?			 }
			 
* *     Задача по вложенности циклов:

* ?		let result = "";
* ?		let length = 7;
		
* ?		for(let i = 1; i < length; i++) {
* ?			for(let j = 0; j < i; j++) {
* ?				result += '*';
* ?			}
* ?			result += "\n";
* ?		}
* ?		console.log(result);


* ?			first: for (let i = 0; i < 3; i++) {
* ?				 console.log(`First level: ${i}`);
* ?			 for (let j = 0; j < 3; j++) {
* ?				  console.log(`Second level: ${j}`);
* ?                 for (let k = 0; k < 3; k++) {
* ?								if(k === 2) continue first;
* ?				        console.log(`Third level: ${k}`);
* ?				  }
* ?				}
* ?			 }
* ?			 
* ?		
* ?	for(let i = 20; i >= 10; i--) {
* ?		if(i === 13) break;
* ?		console.log(i);
* ?	}
* ?
* ?	for (let i = 2; i <=16; i++) {
* ?		if(i % 2 === 0) {
* ?			continue;
* ?		} else {
* ?			console.log(i)
* ?		}
* ?	}
	
* ?	let i = 2
	
* ?	while (i <= 16) {
* ?		if(i % 2 === 0) {
* ?			i++;
* ?			continue;
* ?		} else {
* ?			console.log(i)
* ?		}
* ?		i++;
* ?	}
	
* ?	const arrayOfNumbers = [];

* ?	for (let i = 10; i < 21; i++) {
* ?		 arrayOfNumbers[i - 10] = i;
* ?	}
* ?	console.log(arrayOfNumbers);
* ?	return arrayOfNumbers;
	

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');
         
         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
         } else {
            console.log('error');
            i--;
         }
      
      
}
	
	if(personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	}  else if(personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
	
		console.log(personalMovieDB);




'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
	   const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
           personalMovieDB.movies[a] = b;
           console.log('done');
        } else {
           console.log('error');
           i--;
        }
}
      let i = 0;
      
      while(i < 2) {
         const a = prompt('Один из последних просмотренных фильмов?', ''),
               b = prompt('На сколько оцените его?', '');
               
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
       } else {
           console.log('error');
            i--;
         }
         
      }
      
	if(personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	}  else if(personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
	
		console.log(personalMovieDB);

	let firstNum = +prompt('Напиши первое число!', '');
	let secondNum = +prompt('Напиши второе число!', '');
	

	function calc(a, b) {
		let num = a + b;
		if(num < 10) {
		alert('Ваш ответ меньше 10')
			console.log('Ваш ответ меньше 10');
		} else if(num === 10) {
			alert('Ваш ответ - 10')
			console.log('Ваш ответ - 10');
		} else if(num > 10) {
			alert('Ваш ответ больше 10')
			console.log('Ваш ответ больше 10')
		}
		return;
	}
	calc(firstNum, secondNum);

	const usdCurr = 28;
	const eurCurr = 32;
	const discount = 0.9;
	
	function convert(amount, curr) {
		return curr * amount;
	}
	
	function promotion(result) {
		console.log(result * discount);
	}
	
	const res = convert(500, usdCurr);
	promotion(res);
	
* !      {----------------- Задача №7 на вычесление обьёма и площи -----------------------------}

* *	function calculateVolumeAndArea(length) {
* *		if(typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
* *			return 'При вычисление произошла ошибка';
* *		}
		
* *		let volume = 0;
* *		let area = 0;
		
* *		volume = length * length * length;
* *		area = 6 * (length * length);
		
* *		return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
* *	}
														
	
* *	 console.log(calculateVolumeAndArea(5));     

	 * !      {----------------- Задача №7 2)на вычесление места в вагоне -----------------------------}

* *	 function getCoupeNumber(seatPlace) {
* *		if(typeof(seatPlace) !== 'number' || seatPlace < 0 || !Number.isInteger(seatPlace)) {
* *			 return "Ошибка.Проверьте правильность введеннного номера места";
* *		} else if(seatPlace === 0 || seatPlace > 36) {
* *			return 'Таких мест в вагоне не существует';
* *	  };
		
* *		for(let i = 4; i <= 36; i = i + 4) {
* *			 if(seatPlace <= i) {
* *				  return Math.ceil(i / 4);
* *			 }
* *     };
* *	 }
* *  console.log(getCoupeNumber(5));

  * !      {----------------- Задача №8 1)на вычесление времени -----------------------------}

	
* *	function getTimeFromMinutes(userMinutes) {
* *		if(typeof(userMinutes) !== 'number' || tiuserMinutesme < 0 || !Number.isInteger(userMinutes)) {
* *			return 'Ошибка, проверьте данные'
* *		}
* *		const hours = Math.floor((userMinutes / 60));
* *		const minutes = userMinutes % 60
		
* *		let hoursStr = '';
		
* *		switch(hours) {
* *			case 0:
* *				hoursStr = 'часов';
* *				break;
* *			case 1:
* *				hoursStr = 'час';
* *			case 2:
* *			case 3:
* *			case 4: 
* *				hoursStr = 'часа';
* *				break;
* *			default:
* *				hoursStr = 'часов'
* *		}
* *		return `Это ${hours} ${hoursStr} и ${minutes} минут`
* *	}
* *	getTimeFromMinutes(130)
	
	* !      {----------------- Задача №8 2)на вычесление большего числа -----------------------------}
	
* *	function findMaxNumber(a, b, c, d) {
* *		if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
* *			  return 0;
* *		} else {
* *				return Math.max(a, b, c, d)
* *			 }
* *	}
	
	
* *	console.log(findMaxNumber(3, 1, 5, 10.5));
	
		* !      {----------------- Задача №9 1)на числа Фибоначчи -----------------------------}
	
* *	function fibonacci(num) {
* *		const result = [0, 1];
		
* *		for(let i = 2; i <=num; i++) {
* *			const prevNum1 = result[i - 1];
* *			const prevNum2 = result[i - 2];
* *			result.push(prevNum1 + prevNum2);
* *		}
* *		return result[num];
* *	}
	
* *	console.log(fibonacci(7));

		* !      {----------------- Задача №9 2)на числа Фибоначчи -----------------------------}
	
* *	  function fibonacci(num) {
* *      if(typeof(num) !== 'number' || )
* *		let a = 1,
* *			 b = 1;

* *		for(let i = 3; i <=num; i++) {
* *			let c = a + b,
* *			    a = b,
* *			    b = c;
* *		}
* *		return b;
* *	}
			
* *	console.log(fibonacci(10));
	
	
* !      {----------------- Практика № - callback функции -----------------------------}	
	
	//1ый вариант  callback функции(с использыванием анонимной функции)
	
* ?	function learnJS(lang, callback) {
* ?		console.log(`Я учу ${lang}`);
* ?		callback();
* ?	}
	
* ?	learnJS('JavaScript', function() {
* ?		console.log('Я прошел этот урок!');
* ?	});
* ?	learnJS('JavaScript')
	
	//2ой вариант  callback функции(стандартный)	
	
* ?	function learnJS(lang, callback) {
* ?		console.log(`Я учу ${lang}`);
* ?		callback();
* ?	};
* ?	function done() {
* ?		console.log('Я прошел этот урок!');
* ?	}
* ?	learnJS('JavaScript', done);

* !      {----------------- Практика № - Объекты, деструктуризация объектов (ES6) -----------------------------}

* ?	const options = {
* ?		name: 'test',
* ?		width: 1024,
* ?		height: 1024,
* ?		colors: {
* ?			border: 'black',
* ?			bg: 'red'
* ?		}
* ?	};
	
* !	//	delete options.name //Удаляем обьект
	
* !	//Чтобы обратиться к name нужно прописать - key
* !	//Чтобы обратиться к значению name нужно прописать - название обьекта[name]
* !	//Чтобы обратиться к значением в обьекте color нужно прописать - название обьекта['colors']['border']
	
* ?	for(let key in options) {
* ?		if(typeof(options[key]) === 'object') {
* ?			for(let i in options[key]) {
* ?				console.log(`Свойство ${i} имеет значениe ${options[key][i]}`)
* ?			}
* ?		} else {
* ?			console.log(`Свойство ${key} имеет значениe ${options[key]}`)
* ?		};
* ?	};
	{-----------------------------------------------------------------------------------------------}
	
* ?	const options = {
* ?		name: 'test',
* ?		width: 1024,
* ?		height: 1024,
* ?		colors: {
* ?			border: 'black',
* ?			bg: 'red'
* ?		},
* ?		makeTest: function() {
* ?			console.log('Test')
* ?		}
* ?	};
* ?	options.makeTest();
	
* ?	const {border, bg} = options.colors; - деструктуризация объектов
* ?	console.log(border)
	
* ?	//console.log(Object.keys(options).length);
* ?	// let counter = 0;
* ?	// for(let key in options) {
* ?	// 	if(typeof(options[key]) === 'object') {
* ?	// 		for(let i in options[key]) {
* ?	// 			console.log(`Свойство ${i} имеет значениe ${options[key][i]}`)
* ?	// 			counter++;
* ?	// 		}
* ?	// 	} else {
* ?	// 		console.log(`Свойство ${key} имеет значениe ${options[key]}`);
* ?	// 		counter++;
* ?	// 	};
* ?	// };
* ?	// console.log(counter)
* !	{-----------------------------------------------------------------------------------------------}
	
	
* *	const options = {
* *		name: 'test',
* *		width: 1024,
* *		height: 1024,
* *		colors: {
* *			border: 'black',
* *			bg: 'red'
* *		},
* *	};
* *	function lengthObj(obj, item) {
	
* *	let firstKey = Object.keys(obj).length;
* *	let secondKey = Object.keys(item).length;
* *	console.log(firstKey + secondKey);
* *	console.log(firstKey);
* *	}
* *	lengthObj(options, options.colors);

* !      {----------------- Задача №9 2)на роботу с обьектами ------------------------------------}

* *   const personalPlanPeter = {
* *	name: "Peter",
* *	age: "29",
* *	skills: {
* *		 languages: ['ru', 'eng'],
* *		 programmingLangs: {
* *			  js: '20%',
* *			  php: '10%'
* *		 },
* *		 exp: '1 month'
* *	},
* *	showAgeAndLangs: function(plan) {
* *		const {age} = plan;
* *		const {languages} = plan.skills;
* *		let str = `Мне ${age} и я владею языками: `
		
* *		languages.forEach(function(lang) {
* *			str += `${lang.toUpperCase()} `;
* *		});
* *		return str;
* *	}
* *};
* *console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

* *function showExperience(plan) {
* *	const {exp} = plan.skills;
* *	return exp;
* *}
* *showExperience(personalPlanPeter);

* *function showProgrammingLangs(plan) {
* *	let str = '';
* *	const {programmingLangs} = plan.skills;
* *	for(let key in programmingLangs) {
* *		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
* *	}
	
* *	return str;
* *}
* *console.log(showProgrammingLangs(personalPlanPeter));

* !      {----------------- Практика № - Массивы и псевдомассивы -----------------------------}


* ?	const arr = [2, 13, 26, 8, 10];
* ?	arr.sort(compareNum);
* ?	console.log(arr);
	
* ?	function compareNum(a, b) {
* ?		return a - b;
* ?	}

* ?	arr[99] = 0;
* ?	console.log(arr.length);
* ?	console.log(arr);
	
* ?	arr.forEach(function(item, i, arr) { - 3ый способ перебора массива
* ?		console.log(`${i}: ${item} внутри массива ${arr}`);
* ?	});

* ?	arr.pop(); - удаляет последнее значение массива
* ?	arr.push(значение); - добавляет значени в конец

* ?	console.log(arr);
	
* ?	for(let i = 0; i < arr.length; i++) { - 2ый спопоб перебора массива
* ?		console.log(arr[i])
* ?	};
	
* ?	for(let value of arr) { - 1ый способ перебора массива 
* ?		console.log(value);
* ?	};
	
* ?	const str = prompt("", "");
* ?	const products = str.split(", ") - со строки делает массив данных
* ?	console.log(products.join(': ')) - с массива данных делает строку

* !      {----------------- Практика № - Передача файлов ссылке и по значению, Spread оператор(ES6-ES9) -----------}
	
* ?	let a = 5,
* ?		 b = a;
		 
* ?	b = b + 5;
	
* ?	console.log(b, a)

	
* ?	const obj = {
* ?		a: 5,
* ?		b: 1
* ?	}

* !	const copy = obj; // Передает ссылку
	
* ?	copy.a = 10; 
* !	// Когда мы обращаемся по ссылку в копию мы меняем и копию и главный обьект
	
* ?	console.log(copy)
* ?	console.log(obj)

* ?	//Работа с поверхносной копией(Вариант через циклы)
	
* ?	function copy(mainObj) {
* ?		let objCopy = {};
		
* ?		let key;
* ?		for(key in mainObj) {
* ?			objCopy[key] = mainObj[key];
* ?		}
* ?		return objCopy;
* ?	}
* ?	const numbers = {
* ?		a: 2,
* ?		b: 5,
* ?		c: {
* ?			x: 7,
* ?			y: 4
* ?		}
* ?	}
* ?	const newNumbers = copy(numbers);

* ?	newNumbers.a = 10;
* ?	newNumbers.c.x = 10;

* ?	//console.log(newNumbers);
* ?	//console.log(numbers);

* ?	const add = {    
* ?		d: 17,
* ?		e: 20
* ?	};         
	
* ?	const clone = Object.assign({}, add); //Используем такую запись, если хотим создать клона обьекта add

* ?	clone.d = 20;
	
* ?	// console.log(add)
* ?	// console.log(clone);
	
* ?  //{----Копирование массива-----}
* ?	const oldArray = ['a', 'b', 'c'];
* ?	const newArray = oldArray.slice();
	
* ?	newArray[2] = 'adidas'
* ?	console.log(newArray);
* ?	console.log(oldArray);

* ?  //	{----Робота с оператором spread-----}
	
* ?	const video = ['YouTube', 'vimeo', 'rutube'],
* ?			blogs = ['wordpress', 'livejournal', 'blogger'],
* ?			internet = [...video, ...blogs, 'vk', 'facebook']
	
* ?	console.log(internet);
	
* ?   //	{----Робота частой конструкцией, из массива данных перекидуем данные в функцию-----}

* ?	function log(a, b, c) {
* ?		console.log(a)
* ?		console.log(b)
* ?		console.log(c)
* ?	}

* ?	const num = [2, 5, 7];
	
* ?	log(...num);
	
* ?	//	{----4ый вариант роботы spraed c обьектом-----}

* ?	const array = ['a', 'b'];

* ?	const newArray = [...array];

* ?	const q = {
* ?		one: 1,
* ?		two: 2
* ?	}

* ?	const newObj = {...q};

* !      {----------------- Задача №10 1)на роботу с массивами ------------------------------------}

* *	const family = ['Peter', 'Ann', 'Alex', 'Linda'];

* *	function showFamily(arr) {
* *		if(arr.length == 0) {
* *			return 'Семья пуста'
* *		} else {
* *			let str = `Семья состоит из: ${arr.join(" ")}`;
* *			return str;
* *		}
* *	}
* *	console.log(showFamily(family));
	
* *	const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

* *	function standardizeStrings(arr) {
* *     let arrayStr = arr.join("\n")
* *     let lowerStr = arrayStr.toLowerCase(arrayStr);
* *     return lowerStr;
* *	}
* *	console.log(standardizeStrings(favoriteCities));


* *	const family = ['Peter', 'Ann', 'Alex', 'Linda'];

* *	function showFamily(arr) {
* *		 let str = '';
	
* *		 arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
	
* *		 arr.forEach(member => {
* *			  str += `${member} `
* *		 });
	
* *		 return str;
* *	}
	
* *	showFamily(family);
	
* !      {----------------- Задача №10 2)на роботу с массивами ------------------------------------}

// Первая задача на разворачивание строки
* *	const someString = 'This is some strange string';

* *	function reverse(str) {
* *	if(typeof(str === 'string')) {
* *		let splitString = str.split('');
* *		let reverseString = splitString.reverse();
* *		let joinString = reverseString.join('');
* *		return joinString;
* *	} else {
* *		return 'Ошибка'
* *	}
* * }
* *	reverse(someString);
	
	
// Вторая задача с валютами
* *	const baseCurrencies = ['USD', 'EUR'];
* *  const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

* *	function availableCurr(arr, missingCurr) {
* *		if(arr.length === 0) {
* *			 return 'Нет доступных валют';
* *		} else {
* *			let str = 'Доступные валюты:\n';		
* *			arr.forEach((curr, i) => {
* *				if(curr !== missingCurr) {
* *					str += `${curr}\n`;
* *				}
* *			});
* *			return str;
* *		}
* *	}
* *	console.log(availableCurr(baseCurrencies, additionalCurrencies));

* !      {----------------- Практика № - ООП - прототипно-оперативное наследование -----------------------------}
	
* ?	let str = 'some';
* ?	let strObj = new String(str);
	
* ?	console.log(typeof(str))
* ?	console.log(typeof(strObj))
	
* ?	console.dir([1, 2, 3]); // - в коносли можно увидеть прототипно-оперативное наследование
	
	
* ?	//Прототип в данном случае обьект soldier, а john это уже наследники которые копирует его значение
* ?	const soldier = {
* ?		health: 400,
* ?		armor: 100,
* ?		sayHello: function() {
* ?			console.log('Hello')
* ?		}
* ?	};
	
* ?	const john = {
* ?		health: 100
* ?	};
	
* ?	//Устаревший варриант установки наследника прототипа
* ?	john.__proto__ = soldier;
	
* ?	console.dir(john.sayHello);
	
* ?	//Новый варриант установки наследника прототипа
	
* ?	//Прототно наследовали john к soldiers
* ?	Object.setPrototypeOf(john, soldier);
* ?	//Создает наследство к прототипу soldier
* ?	const Ivan = Object.create(soldier);


* !      {----------------- Моё приложение -----------------------------}

* *	'use strict';

* *const personalMovieDB = {
* *    count: 0,
* *    movies: {},
* *    actors: {},
* *    genres: [],
* *    privat: false,
* *    start: 	function() {
* *		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
* *	while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count))
* *		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
* *	},
* *	detectPersonalLevel: function() {
* *		if(personalMovieDB.count < 10) {
* *		console.log('Просмотрено довольно мало фильмов');
* *	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
* *		console.log('Вы классический зритель');
* *	}  else if(personalMovieDB.count >= 30) {
* *		console.log('Вы киноман');
* *	} else {
* *		console.log('Произошла ошибка');
* *	}
* *	},
* *	writeyourGenres: 	function() {
* *		for(let i = 1; i < 4; i++) {
* *			let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
* *			
* *			if(genre === '' || genre == null) {
* *				console.log('Вы ввели некоректные данные или не ввели их вообще');
* *				i--;
* *			} else {
* *				personalMovieDB.genres[i - 1] = genre;
* *			}	
* *		}
* *			personalMovieDB.genres.forEach((item, i) => {
* *				console.log(`Любимый жанр ${i + 1} - это ${item}`)
* *		});
* *	},
* *	showMyDB: function (hidden) {
* *		if(hidden !== true) {
* *			console.log(personalMovieDB)
* *		};
* *	},
* *	toggleVisibleMyDB: function() {
* *		if(personalMovieDB.privat === false) {
* *			return personalMovieDB.privat = true;
* *		} else if(personalMovieDB.privat === true){
* *			return personalMovieDB.privat = false;
* *		}
* *	},
	
* *};

* !      {----------------- Задача №13 продвинутая задача на роботу с обьектами и массивами  -------------------}


* *const shoppingMallData = {
* *    shops: [{width: 10, length: 5},
* *            {width: 15, length: 7},
* *            {width: 20, length: 5},
* *           {width: 8, length: 10}],
* *   height: 0,
* *    moneyPer1m3: 0,
* *    budget: 0,
* *    start: function() {
* *      shoppingMallData.height = +prompt('Сколько у вас высота помещение?', '');
* *      shoppingMallData.moneyPer1m3 = +prompt('Сколько вы платите за метр кубический?', '');
* *      shoppingMallData.budget = +prompt('Какой у вас бюджет на месяц?', '');
* *    },
* *    isBudgetEnough: function() {
* *		let area = 0;
* *		let volume = 0;
* *		
* *		isBudgetEnough.shops.forEach(shop =>{
* *			area =+ shop.width * shop.length;
* *		});
* *		
* *		volume = shoppingMallData.height * area;
* *		
* *		if(shoppingMallData.budget - (volume * shoppingMallData.moneyPer1m3) >= 0) {
* *			return 'Бюджета достаточно';
* *		} else {
* *			return 'Бюджета не достаточно'
* *		}
* *	 }
* *};
	
* !      {----------------- Задача №14 продвинутая задача на роботу с обьектами и массивами  ------------------}
	
	
* * const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

* * function sortStudentsByGroups(arr) {
* *   arr.sort();
* *    const a = [], b = [], c = [], rest = [];

* *    for (let i = 0; i < arr.length; i++) {
* *        if (i < 3) {
* *            a.push(arr[i]);
* *        } else if (i < 6) {
* *            b.push(arr[i]);
* *        } else if (i < 9) {
* *            c.push(arr[i]);
* *       } else {
* *            rest.push(arr[i]);
* *        }
* *    }
* *    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
* * }

* * sortStudentsByGroups(students);

* !      {----------------- Практика №  - динамическая типизация  ------------------------------------}

* !	Динамическая типизация - это возможность одного типа данных превращатся в другой

* ?	// To String
	
* ?	//1) Самый старый и не используемый варриант
* ?	console.log(typeof(String(null)));// получим строку

* !   Конкатенация = это сложение строки со строкой или строки с чем-то
* ?	//2) Способ называется конкатенация. 
* ?	console.log(typeof(null + ''))// получим строку

* ?	const num = 5;
	
* ?	console.log("https://vk.com/catalog/" + num);
	
* ?	const fontSize = 26 + 'px';
	
* ?	console.log(typeof(fontSize));// получим строку

* ?	// To Number
	
* ?	//1) Самый старый и не используемый варриант

* ?	console.log(typeof(Number('4')))// получим число

* ?	//2) Унарный плюс
* ?	console.lol(typeof(+'5'))// получим число

* ?	//3) C помощью метода parseInt
* ?	console.lol(typeof(parseInt('15px', 10)))// получим число

* ?	let answ = +prompt('Hello', "");
	
* !   Всё что мы получаем от пользователя всегда - будет типом данных строка

* ?	// To Boolean
	
* !   0, "", null, undefined, NaN - всегда будут false
	
* ?	//1) Нативный и новый варриант преобразование
* ?	let switcher = null; - //Условие ниже не выполнится потому что, switcher = null;
	
* ?	if(switcher) {
* ?		console.log('Working...')
* ?	};
	
* ?	switcher = 1; - //Условие ниже выполнится потому что, switcher = 1;

* ?	if(switcher) {
* ?		console.log('Working...')
* ?	};

* ?	//2) Устаневший варриант преобразование
* ?	console.log(typeof(Boolean('4')))// получим булин
	
* ?	//3) Очень редкий варриант преобразование
* ?	console.log(typeof(!!'4'))// получим булин


* !      {----------------- Практика №  - замыкание и лексическое окружение  ------------------------------------}

* ?	let number = 5; debugger;
	
* ?	function logNumber() {
* ?		let number = 4; debugger;
* ?		console.log(number);
* ?	};

* ?	number = 6;
	
* ?	logNumber(); debugger; // - выведется 6 - потому что функция берёт новейшое значение в коде

* ?	function createCounter() {
* ?		let counter = 0;
		
* ?		const myFunction = function() {
* ?			counter = counter + 1;
* ?			return counter;
* ?		}
* ?		return myFunction;
* ?	} 
	
* ?	const increment = createCounter();
* ?	const c1 = increment();
* ?	const c2 = increment();
* ?	const c3 = increment();

* ?console.log(c1, c2, c3)

* !      {----------------- Задача на вычисление ролонов обоев в помещение  ------------------------------------}


let rollOfWallpaperDB = {
   widthRoom: 0,
   lengthRoom: 0,
   widthRoll: 0,
   heightRoll: 0,
   start: function() {
      rollOfWallpaperDB.widthRoom = +prompt("Укажите пожалуйста ширину помещение в сантиметрах", '');
      rollOfWallpaperDB.lengthRoom = +prompt("Также укажите длину помещение в сантиметрах", '');
      rollOfWallpaperDB.widthRoll = +prompt("И ещё ширину рулона в сантиметрах", '');
      rollOfWallpaperDB.heightRoll = +prompt("А как же высота рулона?Указывать в метрах", '');
   },
   sumCounter: function() {
      let totalSum = (rollOfWallpaperDB.widthRoom + rollOfWallpaperDB.lengthRoom) * 2;
      let partsOfPlace = (totalSum / rollOfWallpaperDB.widthRoll);//Количество частей мест, там где нужно наклеить рулон
      let countOfRoll = Math.round((partsOfPlace / 3));
      return countOfRoll;
   },
 }

   rollOfWallpaperDB.start();
   console.log(rollOfWallpaperDB.sumCounter());
   


let obj = {
	num: 0,
	start: function() {
		obj.num = +prompt("Введите число", "");
		
		while(obj.num == "" || obj.num == null || isNaN(obj.num)) {
			obj.num = +prompt("Введите число", "");
		}
	}
}
console.log(obj.start());


* !      {----------------- Задача с собеседование для понимание основ  ------------------------------------}

* ?		1) let x = 5; alert( x++ ); 
* !	  Вывидется 5, потому что знак инкремента стоит после числа, поэтому, число сначала выведетса потом увеличится

* ?		2) [ ] + false - null + true
* !     Вывидется NaN		
* ?		console.log([] + false - null + true) // "false"
	   
* ?		3) let y = 1;let x = y = 2;alert(x);
* !     Выведется 2

* ?		4) console.log([] + 1 + 2)
* !     Выведется 12, потому что [] делает из чисел строки, поэтому '1' + '2' выйдет '12'

* ?		5) alert( "1"[0])
* !	  Выведется 1, потому что [0] - тут мы обратились к первому елементу, то есть к "1"

* ?		6) console.log(2 && 1 && null && 0 && undefined)
* !     Выведется null, потому что && запинается на лжи

* ?		7) console.log(!!( 1 && 2) === ( 1 && 2 ))
* !	  Выведется false, потому что !! превратило первое выражение в буллиновое, boolean === ( 1 && 2)		

* ?		8) console.log( null || 2 && 3 || 4);
* !	  Выведется 3, потому что || запинается на правде
		
* ?		9)const a = [1, 2, 3], b = [1, 2, 3]; console.log( a == b );
* !	  Выведется false, потому что єто не один и тот же массив, они просто имеют одинаковые данные
		
* ?		10) console.log( +'Infinity' )		
* !	  Выведется Infinity, но тип данных будет число - (-_-)P.S. Странно и прикольно
	
* ?		11) console.log( 'Ёжик' > 'яблоко');
* !     Выведется false
		
* ?		12) console.log( 0 || '' || undefined || true || false);
* !	  Выведется true, потому что || запинается на  правде

* !      {----------------- Задача 15)  - задание на поиск ошибок в коде  ------------------------------------}
		
* * const restorantData = {
* *	menu: [
* *		 {
* *			  name: 'Salad Caesar',
* *			  price: '14$'
* *		 },
* *		 {
* *			  name: 'Pizza Diavola',
* *			  price: '9$'
* *		 },
* *		 {
* *			  name: 'Beefsteak',
* *			  price: '17$'
* *		 },
* *		 {
* *			  name: 'Napoleon',
* *			  price: '7$'
* *		 }
* *	],
* *	waitors: [
* *		 {name: 'Alice', age: 22}, {name: 'John', age: 24}
* *	],

* * };


* * function transferWaitors(data) {
* *	const copy = Object.assign({}, data);

* *	copy.waitors = {name: 'Mike', age: 32};
* *	return copy;
* *}

* * console.log(transferWaitors(restorantData));		

* !      {----------------- Теория №  - получение элементов со страницы  ------------------------------------}
		
* ?	1) по айди. пишется в ковычках. шарп указывать не надо т.к. и так ясно из названия что мы ищем по id.
* ?   const box = document.getElementById('айди');
 
* ?	2) по классу. пишется в ковычках. точку селектора указывать не надо т.к. и так ясно что из названия что мы 
* ?		ищем по классовому
* ?      селектору.
* ?	const box = document.getElementsByClassName('селектор');


* ?	3) по обычному тэгу. пишется в ковычках. просто указать имя тэга, НО, их возьмет ВСЕ тэги с таким имемен 
* ?      на странице и вернет в переменную псевдомассив состоящий из коллекции одинаковых тегов.
* ?	const box = document.getElementsByTagName('тэг');
	
	
* ?	// что бы забрать таким способом только один элемент по тэгу(два способа):
* ?	1 способ) надо создать всевдомассив(как выше) со всеми тегами, вывести его в консоль, посчитать под каким
* ?      индексом нужный элемент(например, в коллекции он 4, значит индекс 5), и переписать вот так: 
* ?	const box = document.getElementsByTagName('тэг')[5];
	
* ?	// возьмет только 4 элемень из коллекции всевдомассива под этим тэгом.
* ?	2 способ) получить коллекцию псевдомассива, НО, при использовании в коде везде подставлять индекс нужного
* ?      элемента к которому хотим обратиться. пример получения и использования:
* ?	const box = document.getElementsByTagName('тэг');
* ?	console.log(box[5]);
* ?	//получили весь псевдомассив, но в работу даем только элемент с 5 индексом из этого массива.


* ?  // более актуальные методы //

* ?   4) всех и любого
* ?	const box = document.querySelectorAll('');
* ?	// так же возвращает в переменную псевдомассив, но уже не коллекцию, а Nodelist. что дает нам возможность 
* ?     использовать метод forEach() к этому всевдомассиву.


* ?   5) только первый
* ?	const box = document.querySelector('');

* TODO:     {----------------- Теория №  - действие с єлементами на странице  ------------------------------------}


* !	const box = document.getElementById('box'),
* !			btns = document.getElementsByTagName('button'),
* !			circles = document.getElementsByClassName('circle'),
* !			wrapper = document.querySelector('.wrapper'),
* !			hearts = wrapper.querySelectorAll('.heart'),
* !			oneHeart = wrapper.querySelector('.heart');


* !			box.style.backgroundColor = 'blue';
* !			box.style.width = '500px';

* !			btns[1].style.borderRadius = '100%';
* !			circles[0].style.backgroundColor = 'red';  //нельзя circles использывать без []
			
* ?	  {--- Работа над несколькими елементами ---}
* ?			1) - Обычныек варрианты
* ?				1ый варриант)
* !					box.style.cssText = 'background-color: blue; width: 500px';
* ?				1ый варриант)
* !					let num = 500;
* !					box.style.cssText = `background-color: blue; width: ${num}px`;
* ?			2)	- с помощью цыклов		
* !					for(let i = 0; i < hearts.length; i++) {
* !						hearts[i].style.backgroundColor = 'blue';
* !					}
* ?			3)	- с помощью forEach	
* !					hearts.forEach(item => {
* !						item.style.backgroundColor = 'blue';
* !					});

* ?	  {--- Методы для роботы с елементами страницы ---}

* ?		1) - Создали блок div, он существует только в js
* !				const div = document.createElement('div');
* !				const text = document.createTextNode('Тут был я');

* ?		2) - Добавили этому блоку div блок с классом black
* !				div.classList.add('black');


* ?		3) - Теперь мы закинули наш блок div на страницу
* ?				1ый варриант) - новый варриант
* !				document.body.append(div);

* ?				2ой варриант) - устаревший варриант
* !				wrapper.appendChild(div);

* ?				3ий варриант) - мы сначала вытянули wrapper с HTML а потом присвоили наш div в конец wrapper.
* ?				Этот варриант подходит в том случае, если мы будет wrapper использывать один раз
* !				document.querySelector('.wrapper').append(div);
* !				wrapper.append(div);


* ?		4) - Перенос нашего блока div в начало wrapper
* !				wrapper.prepend(div);	
		  
* ?		5) - Перенос нашего блока div в начало и в конец hearts, с помошью before и after
* !				hearts[0].before(div); - в начало
* !				hearts[0].after(div); - в конец
					
* ?		6) - Устаревший варриант со присваивание блока div в wrapper  в  начало 
* !				wrapper.insertBefore(div, hearts[0] (перед каким элементом мы вст этот div))

* ?		7) - Удаление елемента
* ?			1ый варриант - новый
* !				circles[0].remove();
* ?		   2ой варриант - старый 
* !				wrapper.removeChild(hearts[1]);

* ?		8) - Заменяем первый елемент в hearts на circles
* ?			1ый варриант - новый	
* !				hearts[0].replaceWith(circles[0]);
* ?         2ой варриант - старый
* !		      wrapper.replaceChild(circles[0](на что нужно поменять), hearts[0](что нужно поменять))

* ?		{----- Метода работы с нашем divом -----} 
			
* ?		1) - Передаём в div HTML-структуру
* !				div.innerHTML = '<h1>Hello World</h1>'

* ?		2) - Передаём в div текст(textContent не работает с HTML-структурами)
* !				div.textContent = 'Hello World'


* ?		{----- Комбинацея всего изученого -----} 
			
* ?		1) - Более-функциональная работа с блоками
* ?			1ый варриант - добавление "<h2>Hello</h2>" перед нашим DIVом
* !				div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>")

* ?			2ой варриант - добавление "<h2>Hello</h2>" в начало нашего DIVа
* !				div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>")

* ?			3ий варриант - добавление "<h2>Hello</h2>" в конец нашего DIVа
* !				div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>")

* ?			4ий варриант - добавление "<h2>Hello</h2>" после нашего DIVa
* !				div.insertAdjacentHTML("afterend", "<h2>Hello</h2>")
*/
