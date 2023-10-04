
// Massiv - eto struktura dannih, hranyashaya nabor znacheniy, massiv oboznachaetsya kvadratnimi skobkami []

// let a = []
// console.log(typeof a);

/* ********* ********* */

//  Пересление значений в массивах начинается с 0 - это цифра является номером ячейки и ввыводиться переменная[номер ячейки]

// let num = [1,2,3,4,5, 'sardor',6,7,8,9,10];

// console.log(num(6));

/* ********* ********* */

// У массивах есть строенный ключь - length он отдаёт длину массива
// свойство length показывает количество елементов
// length начинает считать с 1 а не с 0

// let num = [1,2,3,4,5,'sardor',6,7,8,9,10];

// console.log(num.length);

/* ********* ********* */

// let str = 'hello world!';
// console.log(str.length);

/* **  ** */

// let str = 'hello world!';
// console.log(str[4]);
/* tak mojno uznat pod etoy yacheykoy kakaya bukva i vse yacheyki uchitivaetsya */

/* ********* ********* */

// const array = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 0; i < array.length; i++) {
	// console.log(answer[i]);
// }


// etot kod pokajet vse nashi sifri potomu chto u nas napisano answer[i]

// const str = 'Hello Gulistan';

// for(let i = 0; i < array.length; i++) {
// console.log(str[i]);

// }

// etot kod toje pokajet vse nashi bukvi potomu chto u nas napisano answer[i]

/* ********* ********* */

// Umnojeniye massiva

// const array = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 0; i < array.length; i++) {
// console.log(answer[i] * 3);

// }


/* ********* ********* */

// Nujno poluchit summu znacheniye vnutri massiva, slojeniye massiva

// const array = [1,2,3,4,5,6,7,8,9,10];
// let answer = 0;

// for(let i = 0; i < array.length; i++) {
// 	answer = array + array[i]
// }
// console.log(answer);


/* ********* ********* */
// even i odd

// const array = [1,2,3,4,5,6,7,8,9,10];
// let answer = 0;

// for(let i = 0; i < array.length; i++) {
// 	answer +=	array[i] % 2 == 1 ? 1 : 0;
// }
// console.log(answer);

/* ********* ********* */

// let names = [ 'Sarvar', 'Ibragim', 'Odil', 'Anvar'];

// for(let key in names) {
// 	// console.log(names[key]);

// 	// Metod splice(nomer yacheyki, kollichestvo yacheyek) - udalayet vibranniye yacheyki c massiva.

// 	// names[key] == 'Sarvar' ? names.splice(key, 2) : ''; tun nachinayet udalit posle pervogo massiva (Ibragim i Odil udalitsya)

// 	names[key] == 'Sarvar' ? names.splice(0, 5) : '';/* '' - eto zaglushka ona stavitsya obyazatelna. Tut nachinayet udalit snachala  */

// }

// metod push() - Dobavlyaet ukazannoe znachenie v kones massiva
// metod unshift() - Dobavlyaet ukazannoe znachenie v nachala massiva
// metod pop() - Udalyaet poslednoy znachenie massiva
// metod shift() - Udalyaet perviy znachenie massiva

// names.push('Zafar');
// names.unshift('Void');
// names.pop();
// names.shift();

// console.log(names);

/* ********* ********* */

// let users = [
// 	{
// 		name: 'HTML',
// 		age: 25
// 	},
// 	{
// 		name: 'CSS',
// 		age: 24
// 	}

// ]

// users.unshift({
// 	name: 'Js',
// 	age: 30
// });

// for(let key in users) {
// 	for (let newKey in users[key]) {
// 		console.log(users[key][newKey]);/* takim obrazom mojno poluchit znacheniye */
// 	}
// }

// for(let key in users) {
// 	console.log(users[key]);
// }

// for in - vozvrashayet kluchi
// for of - vozvrashaet znacheniye. On ispolzuyetsya tolka dlya massiva

// for(let item of users) {
// 	console.log(item);
// }

/* ********* ********* */

// Metod split( Po kakim znacheniyem delat razbivku ) - razbivaet stroku na massiv, imenna rabotaet strokoy

// let str = 'Nikita,Igor,Shuhrat';

// let array = str.split('');
/*let array = str.split(''); - esli sdelat tak to split razdelit nashu stroku po bukvam (kajduyu bukvu razdelit po massivam) */

/*let array = str.split(' '); - esli sdelat tak to split selaet kak budto eto odin element 'Nikita,Igor,Shuhrat'  */

/*let array = str.split(','); - esli postavit zapetuyu to split razdelit nashi imena i posle imena stavit zapetuyu i vnutri massiva budet 3 elementa */
// console.log(array);













