"use strict";

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

*/


// 'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');



// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i = 0; i < 2; i++) {
// 	   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//            personalMovieDB.movies[a] = b;
//            console.log('done');
//         } else {
//            console.log('error');
//            i--;
//         }
// }
//       let i = 0;
      
//       while(i < 2) {
//          const a = prompt('Один из последних просмотренных фильмов?', ''),
//                b = prompt('На сколько оцените его?', '');
               
//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//        } else {
//            console.log('error');
//             i--;
//          }
         
//       }
      
// 	if(personalMovieDB.count < 10) {
// 		console.log('Просмотрено довольно мало фильмов');
// 	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log('Вы классический зритель');
// 	}  else if(personalMovieDB.count >= 30) {
// 		console.log('Вы киноман');
// 	} else {
// 		console.log('Произошла ошибка');
// 	}
	
// 		console.log(personalMovieDB);