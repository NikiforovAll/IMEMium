import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  ngOnInit() {
    // var gentelellaInit = require('../assets/gentelella.custom.js');
    // gentelellaInit.init();
  }
  onDeactivate() {
    document.body.scrollTop = 0;
  }

}
