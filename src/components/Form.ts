export interface IForm {
	buttonText: string;
	placeholder: string;
	setHandler(handleFormSubmit: Function): void;
	render(): HTMLFormElement;
	setValue(data: string): void;
	getValue(): string;
	clearValue(): void;
}

export interface IFormConstructor{
	new (formTemplate: HTMLTemplateElement): IForm;
}

export class Form implements IForm{
	protected formElement: HTMLFormElement;
	protected inputField: HTMLInputElement;
	protected handleFormSubmit: Function;
	protected submitButton: HTMLButtonElement;

	constructor(formTemplate: HTMLTemplateElement) { //получаем в конструктор темплейт и туда сохраняем нужны нам эелменты
		this.formElement = formTemplate.content.querySelector('.todos__form').cloneNode(true) as HTMLFormElement;
		this.inputField = this.formElement.querySelector('.todo-form__input');
		this.submitButton = this.formElement.querySelector(".todo-form__submit-btn")
		this.formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this.handleFormSubmit(this.inputField.value)
		})
	}

	setHandler(handleFormSubmit: Function): void {
		this.handleFormSubmit = handleFormSubmit;
	}

	render() { // Возвращает элемент формы 
		return this.formElement
	}

	setValue(data: string) { // Заполнить поля формы
		this.inputField.value = data;
	}

	getValue() {//Возвращает значнеия с поля ввода 
		return this.inputField.value
	}

	clearValue() {// очищает значения 
		this.formElement.reset();
	}

	set buttonText(data: string){
		this.submitButton.textContent = data;
	}
	
	set placeholder(data: string){
		this.inputField.placeholder = data;
	}

}