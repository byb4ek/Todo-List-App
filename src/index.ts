import { Form } from "./components/Form"
import { Item } from "./components/Item"
import { ToDoModel } from "./components/ToDoModel"
import { todos } from "./utils/constants"
import "./styles/styles.css"
import { Page } from "./components/Page"

/* Есть различные слои данных
слой Отображения - отвечает соответсвтенно за отображение (все классы отвечающие за разметку СЛОЙ View) 
слой Данных - отвечает за работу с данными (Слой моделей), как сервер в работе Место  */

/* 
Компонент это наш некий строительный блок который исопльзуется по всему сайту 
используем независимо от других (чтобы форма стала компонентом нужно создать 
темплейт и копировать его постоянно)
*/
const contentElement = document.querySelector('.content') as HTMLElement;

const itemTeamplate = document.querySelector(
	"#todo-form-template"
) as HTMLTemplateElement;

const formTemplate = document.querySelector(
	'#todo-item-template'
)as HTMLTemplateElement;

const page = new Page(contentElement);

const todoArray = new ToDoModel();
todoArray.items = todos;// отрабатыват сеттер

const todoForm = new Form(formTemplate);
todoForm.setHandler(handleSubmitForm);//Создаем ЭКЗЕМПЛЯР класса 

page.formContainer = todoForm.render();// в классе page есть сеттер formContainer
// вызываем его кидаем туда нашу форму todoForm и рендерим ее

function handleSubmitForm(data: string) { //получаем данные из формы, и содаем новое дело.
	const todoItem = new Item(itemTeamplate);
	const itemElement = todoItem.render({ id: '8', name: data })
	contentElement.prepend(itemElement);
	todoForm.clearValue();
}

page.todoContainer = todoArray.items.map(item => {
	const todoItem = new Item(itemTeamplate);//создали экземпляр класса 
	const itemElement = todoItem.render(item);//сгенерировали разметку одной карточки 
	return(itemElement);// и возвращаем массив наших карточек 
})


