const axios = require('axios').default;               // import axios
var res = axios({
    method: 'get',                                       // метод
    url: 'https://jsonplaceholder.typicode.com/todos/'   // откуда берем данные
}).then(function(response){  //результат попадает в response и передаем в функцию
    console.log(response.data);
    let txt = JSON.stringify(response.data);           // преобразовываем полученные данные в текст
    var fs = require('fs');
    fs.writeFileSync("D://Code/WebCode/axios_client_new/data.txt", txt);   // записываем в файл
}).catch(function(error){
    console.log(error);               // если ошибка
});