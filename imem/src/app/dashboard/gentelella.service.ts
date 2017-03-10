import { Injectable } from '@angular/core';

@Injectable()
export class GentelellaService {

  constructor() { }
  /**
   * addCollapsablePanels
   */
  public addCollapsablePanels() {
    if(!!(<any>window).collapsePanelFix){
      (<any>window).collapsePanelFix();
    }
  }
}
