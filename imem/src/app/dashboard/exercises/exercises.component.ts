import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  cars: any[];
  cols: any[];
  ngOnInit() {
    this.cars = [{name: '1'}]
    this.cols = [
      { field: 'name', header: 'name' }
    ];
  }
}
