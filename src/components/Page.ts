export interface IPage {
	formContainer: HTMLElement;
	todoContainer: HTMLElement[];
}

export class Page implements IPage {
	_formContainer: HTMLElement;
	_todoContainer: HTMLElement;

	constructor(protected container: HTMLElement) {
		this._formContainer = this.container.querySelector(".todo-form-container");
		this._todoContainer = this.container.querySelector(".todos__list");
	}

	set todoContainer(items: HTMLElement[]) {
		this._todoContainer.replaceChildren(...items);
	}

	set formContainer(formElement: HTMLFormElement | null) {
		if (formElement) {
			this.formContainer.replaceChildren(formElement);
		} else {
			this.formContainer.innerHTML = "";
		}
	}
}