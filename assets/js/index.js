//1. Функция которая принимает строку и возвращает количество слов в ней
const str = 'Функция которая принимает строку и возвращает количество слов в ней';
const countWords = function(str) {
    return str.split(' ').length;
}
const count = countWords(str);

//2. Функция, которая получает строку и возвращает размер самого большого слова в ней
const str1 = 'Функция, которая получает строку и возвращает размер самого большого слова в ней';
const maxWordLength = function(str1) {
    const newStr = str1.replaceAll(',','');
    const arr = newStr.split(' ');
    arr.sort(function(a,b) {return b.length - a.length});
    return arr[0].length;
}
const maxLength = maxWordLength(str1);