class Storage {
  constructor(array) {
    this._items = array;
  }

  getItems() {
    return this._items;
  }

  addItem(item) {
    if (this._items.includes(item)) {
      console.log(`Такой товар уже есть на складе`);
    } else {
      this._items.push(item);
    }
  }

  removeItem(item) {
    const removeIndex = this._items.indexOf(item);
    if (removeIndex !== -1) {
      this._items.splice(removeIndex, 1);
    } else {
      console.log(`Такого товара нет на складе`);
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
