import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthService } from '../auth.service';
@Directive({
  selector: '[appAppLayout]'
})
export class AppLayoutDirective {

  layoutConfig: any = {
    sidebarScope: {
      requestPanel: ['admin']
    },
    userDetailsScope: {
        courseTab: ['student']
    },
    courseScope: {
      editButton: ['admin'],
      deleteButton: ['admin']
    }
  };
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private _authService: AuthService
  ) {
    this.viewContainer.clear();
  }

  @Input() set appAppLayout(route: string) {
    if(route == undefined){
      console.error('app-layout invalid input');
      return;
    }
    let currUserRole = this._authService.getUserRole();
    let tokens = route.split('.');
    let lastElement = tokens.pop();
    let node = this.layoutConfig;
    for (let token of tokens) {
      node = node[token];
    }
    if (node[lastElement].indexOf(currUserRole) == -1) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
