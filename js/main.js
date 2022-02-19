// Задание 1. Функция, возвращающая случайное целое число из переданного диапазона включительно. Использован пример из https://learn.javascript.ru/task/random-int-min-max
const getRandom = function (num1, num2) {
  if (num1 >= 0 && num2 > num1) {
    const rand = num1 - 0.5 + Math.random() * (num2 - num1 + 1);
    return Math.round(rand);
  }
  return false;
};

getRandom(8, 8);

// Задание 2. Функция для проверки максимальной длины строки.
const getLengthString = (checkedString, maxLength) => {
  if (checkedString.length <= maxLength) {
    return true;
  }
  return false;
};

getLengthString('Функция для проверки максимальной длины строки', 120);

