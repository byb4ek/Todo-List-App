import { ItemPresenter } from './components/ToDoPresenter';
import { Form } from "./components/Form"
import { Item } from "./components/Item"
import { Page } from "./components/Page"
import { ToDoModel } from "./components/ToDoModel"
import { todos } from "./utils/constants"
import "./styles/styles.css"

/* Есть различные слои данных
слой Отображения - отвечает соответсвтенно за отображение (все классы отвечающие за разметку СЛОЙ View) 
слой Данных - отвечает за работу с данными (Слой моделей), как сервер в работе Место  */

/* 
Компонент это наш некий строительный блок который исопльзуется по всему сайту 
используем независимо от других (чтобы форма стала компонентом нужно создать 
темплейт и копировать его постоянно)
*/
const contentElement = document.querySelector('.content') as HTMLElement;

const itemContainer = new Page(contentElement);// создаем страничку

const todoArray = new ToDoModel();// создаем модель 
todoArray.items = todos;

const itemPresenter = new ItemPresenter(todoArray, Form, itemContainer, Item);//наполняем наш презентер 

itemPresenter.init();
itemPresenter.renderView();