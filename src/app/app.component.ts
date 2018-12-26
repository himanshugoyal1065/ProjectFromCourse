import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  showShoppingList=true;
  onHeaderClicked(selectWhatToShow:boolean){
    if(selectWhatToShow == false){
      this.showShoppingList=false;
    }
    else{
      this.showShoppingList=true;
    }
  }
  
}
