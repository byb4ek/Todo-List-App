import { IItem } from "../types";

export interface IViewItem { //интерфейс описывает наш будущий объект
	id: string;
	name: string;
	render(item: IItem): HTMLElement;
	setCopyhandler(handleCopyItem: Function):void;
	setDeleteHandler(handleDeleteItem: Function):void;
}

export interface IViewItemConstructor { //описывает параметры и выход экземпляра
	new(tempmlate: HTMLTemplateElement): IViewItem;
}

export class Item implements IViewItem{

	protected itemElement: HTMLElement;
	protected title: HTMLElement;
	protected _id: string;
	protected copyButton: HTMLButtonElement;
	protected deleteButton: HTMLButtonElement;
	protected handleCopyItem: Function;
	protected handleDeleteItem: Function;

	constructor(template: HTMLTemplateElement) {
		this.itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
		this.title = this.itemElement.querySelector('.todo-item__text');
		this.copyButton = this.itemElement.querySelector(".todo-item__copy");
		this.deleteButton = this.itemElement.querySelector(".todo-item__del");
	}

	set id(value: string) {
		this._id = value;
	}

	get id(): string {
		return this._id || '';
	}

	set name(value: string) {
		this.title.textContent = value;
	}

	get name(): string {
		return this.title.textContent || '';
	}

	render(item: IItem) {
		this.name = item.name;
		this.id = item.id;
		return this.itemElement;
	}

	setDeleteHandler(handleDeleteItem: Function) {
		this.handleDeleteItem = handleDeleteItem;
		this.copyButton.addEventListener("click", (evt)=>{
			this.handleDeleteItem(this);
		})
	}

	setCopyhandler(handleCopyItem: Function) {
		this.handleCopyItem = handleCopyItem;
		this.copyButton.addEventListener("click", (evt)=>{
			this.handleCopyItem(this);
		})
	}
}