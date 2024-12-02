/*Тип String представляет строки. Для определения строк 
применяются кавычки, причем, 
можно использовать как двойные, так одинарные, 
так и косые кавычки. 

Единственно ограничение: тип закрывающей 
кавычки должен быть тот же, что и тип открывающей, 
то есть либо обе двойные, либо обе одинарные.

const user = "Tom";
const company = 'Microsoft';
const language = `JavaScript`;
 
console.log(user);
console.log(company);
console.log(language);*/

/*const company = "Бюро \"Рога и копыта\"";

const company1 = "Бюро 'Рога и копыта'";
const company2 = 'Бюро "Рога и копыта"';*/

/* Также строка может содержать специальные символы 
- управляющие последовательности, 
которые интерпретируются определенным образом. 
Самые распространенные последовательности 
- это "\n" (перевод на другую строку) 
и "\t" (табуляция). Например:
*/

const text = "Hello METANIT.COM\nHello\tWorld";
console.log(text); 
