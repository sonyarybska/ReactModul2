import './App.css';
import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";


//1
//  - Коротко : отримати всіх юзерів з плейсхолдеру, та відтворити на сторіці
// створити сервіс (user.service.js) роботи  з users сутностями  з jsonplaceholer (getUsers(),getUser(id)).
// Використати fetch / axios на вибір
// Створити компонент Users
// На  рівні Users, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент User який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
// App-Users->User
//Так само зробити з постами та коментарями

function App() {
    return (
        <div className="App">
            <h1>Users</h1>
            <Users/>
            <h1>Posts</h1>
            <Posts/>
            <h1>Comments</h1>
            <Comments/>
        </div>
    );
}

export default App;
