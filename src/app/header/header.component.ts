import { Component, Output,EventEmitter } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
    @Output()
    displayShoppingList=new EventEmitter<boolean>();
    boolShoppingList=true;
    onRecipe(){
        this.boolShoppingList=false;
        console.log("inside recipe nav bar");
        this.displayShoppingList.emit(this.boolShoppingList);
        console.log("emit done");
    }
    onShoppingList(){
        this.boolShoppingList=true;
        this.displayShoppingList.emit(this.boolShoppingList);
    }
}