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
  // https://github.com/shlomiassaf/angular2-modal/issues/258
  public fixModalHeightAfterLongQuery(){
    document.body.classList.remove('modal-open')
  }
}
