import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  foodSearchText: string = "";
  showForm: boolean = false;
  //            from foods.ts
  //               |
  foods: any[] = foods;
  // |
  // for view
  todayArray: any = [];
  totalCal: number = 0;

  constructor() { }

  ngOnInit() {
  }

  showFormFunction() {
    this.showForm = !this.showForm;
    console.log(this.showForm);
  }

  todaysFoodsFunction(oneFood) {
    this.todayArray.push(oneFood);
      return this.todayArray;
    }
}
