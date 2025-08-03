let text = prompt("Введіть текст");
let text1 = prompt("Введіть другий текст");

if (text.trim() === "" || text1.trim() === "" ) {
    console.log("Не всі поля заповнені")
} else console.log("Обидва поля заповнені")

let num = Number(prompt("Введіть число"))
let num1 = Number(prompt("Введіть число"))
const result = num + num1

if (result > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

let title = prompt("Введіть текст")
let input = title.toLocaleLowerCase()

if (input.includes("javascript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

let numb = prompt("Введіть число")

if (numb > 10 && numb < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

let yourname = prompt("Введіть ім'я")
let email = prompt("Введіть пошту")
let password = prompt("Введіть пароль")

if (yourname.length >= 3 && email.includes("@") && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку")    
} else {
    console.log("Помилка: неправильне заповнення");
    
}
