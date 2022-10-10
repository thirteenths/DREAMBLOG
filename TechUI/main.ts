import {AuthorModel} from "../DAL/Models/AuthorModel"

import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



let menuAuthor: string = "Меню для Автора:\n" + 
                         "1 - Посмотреть Посты\n" +
                         "2 - Посмотреть Комментарии к Посту\n" +
                         "3 - Поставить лайк Посту\n" +
                         "4 - Создать Пост\n" +
                         "5 - Создать Комментарий к посту\n" +
                         "0 - Выйти\n" +
                         "Ваш Выбор:";
    
let menuAdmin: string = "Меню для Админа:\n" + 
                         "1 - Посмотреть Посты\n" +
                         "2 - Посмотреть Комментарии к Посту\n" +
                         "3 - Поставить лайк Посту\n" +
                         "4 - Создать Пост\n" +
                         "5 - Создать Комментарий к посту\n" +
                         "6 - Удалить пост\n" +
                         "7 - Удалить Комментарий\n" +
                         "8 - Удалить Автора\n" +
                         "0 - Выйти\n"+
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

function singin(){
    let Author: AuthorModel = new AuthorModel("", "", "");

    rl.question("Введите логин: ", (answer) => {
        Author.setLogin(answer.toString());
    });
    rl.close()

    rl.question("Введите пароль: ", (answer) => {
        Author.setPassword(answer.toString());
    })
    rl.close()

    //console.log(Author)
}

singin()
