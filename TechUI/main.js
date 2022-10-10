"use strict";
exports.__esModule = true;
var AuthorModel_1 = require("../DAL/Models/AuthorModel");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var menuAuthor = "Меню для Автора:\n" +
    "1 - Посмотреть Посты\n" +
    "2 - Посмотреть Комментарии к Посту\n" +
    "3 - Поставить лайк Посту\n" +
    "4 - Создать Пост\n" +
    "5 - Создать Комментарий к посту\n" +
    "0 - Выйти\n" +
    "Ваш Выбор:";
var menuAdmin = "Меню для Админа:\n" +
    "1 - Посмотреть Посты\n" +
    "2 - Посмотреть Комментарии к Посту\n" +
    "3 - Поставить лайк Посту\n" +
    "4 - Создать Пост\n" +
    "5 - Создать Комментарий к посту\n" +
    "6 - Удалить пост\n" +
    "7 - Удалить Комментарий\n" +
    "8 - Удалить Автора\n" +
    "0 - Выйти\n" +
    "Ваш Выбор:";
/*rl.question('Войти в аккаунт - 1 \nЗарегистрироваться - 2 \nВариант:', (answer) => {
  switch(answer.toLowerCase()) {
    case '1':
      console.log('Super!');
      SingUp();
      break;
    case '2':
      console.log('Sorry! :(');
      console.
      break;
    default:
      console.log('Invalid answer!');
  }
  rl.close();
});*/
function singin() {
    var Author = new AuthorModel_1.AuthorModel("", "", "");
    rl.question("Введите логин: ", function (answer) {
        Author.setLogin(answer.toString());
    });
    rl.close();
    rl.question("Введите пароль: ", function (answer) {
        Author.setPassword(answer.toString());
    });
    rl.close();
    //console.log(Author)
}
singin();
