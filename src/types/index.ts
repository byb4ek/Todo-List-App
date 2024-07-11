export interface IItem { // Интерфейс нашей карточки тудушки (Начинаем с заглавной I, чтобы понимать что это интерфейс  )
	id: string;
	name: string;
}

export interface IToDoModel {
	items: IItem[];
	addItem: (data: string) => IItem; //если мы хотим добавить элемент обязательно нужно добавить его имя, что и делаем (возвращает объект)
	removeItem: (id: string) => void; // если мы хотим удалять элемент передаем в метод его Айди (метод ничего не возвращает)
}