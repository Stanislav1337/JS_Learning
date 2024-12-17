/*
 Все операторы довольно просты, наверное, 
 за исключением оператора равенства 
 и оператора тождественности. 
 Они оба сравнивают два значения, 
 но оператор тождественности также 
 принимает во внимание и тип значения. 
 Например:

const income = 100;
const strIncome = "100";
const result = income == strIncome;
console.log(result); //true

Константа result здесь будет равна true, 
так как фактически и income, 
и strIncome представляют число 100.

Но оператор тождественности возвратит 
в этом случае false, 
так как данные имеют разные тип:

const income = 100;
const strIncome = "100";
const result = income === strIncome;
console.log(result); // false



 */