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

* !      {----------------- Практика ----------------------------} 































*/
























