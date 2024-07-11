import { IItem, IToDoModel } from "../types";
// данные хранятся у нас в этой модели

export class ToDoModel implements IToDoModel {

	protected _items: IItem[];//чтобы получать доступ к данным 
	//любой доступ должен быть через определенные методы 

	constructor() {
		this._items = [];
	}

	//доступ к items будет организован с помощью set-тера и геттера
	set items(data: IItem[]) {//сохраняем готовый массив
		this._items = data;
	}

	get items() {//возвращаем хранящийся массив
		return this.items
	}

	addItem(data: string) {
		const uniqueId: number = Math.max(...this._items.map(item => Number(item.id))) + 1;//присваеваем новый айди объекту и тудушке
		const newItem: IItem = { id: String(uniqueId), name: data }; // делаем новый объект 
		this._items.push(newItem)//добавляем в начальный массив его 
		return newItem;// и возвращаем 
	};

	removeItem(id: string) {
		this._items = this._items.filter(item => item.id != id)//оставляем все нужные элементы, убирая нужный айди
	};

}