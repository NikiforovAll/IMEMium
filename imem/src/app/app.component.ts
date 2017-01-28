import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   ngOnInit(){
      // debugger;
      console.log(window);
      var gentelellaInit = require('../assets/gentelella.custom.js');
      gentelellaInit.init();
   }

}
