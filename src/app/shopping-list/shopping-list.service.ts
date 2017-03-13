import {Ingredient} from "../shared/ingredient";

export class ShoppingListService {
  private items: Ingredient[] = [];
  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(items: Ingredient[]){

    //Using default array method to push all the items to the private items object
    Array.prototype.push.apply(this.items, items);
  }
}
