import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css'],
  providers: [Modal]
})

export class AuthCallbackComponent implements OnInit {

  constructor(private modal: Modal, vcRef: ViewContainerRef, public router: Router) {
    modal.overlay.defaultViewContainer = vcRef;
  }
  ngOnInit() {
    var isNeedToOpenModal: boolean = false;
    if (isNeedToOpenModal) {
      this.openModal()
        .then(dialog => dialog.result)
        .then(result => {
          this.router.navigate(['login'])
        })
        .catch(result => {
          this.router.navigate(['login'])
        });
    } else {
      this.router.navigate(['dashboard'])
    }
  }

  public openModal() {
    return this.modal.alert()
      .size('lg')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .headerClass('alert alert-warning')
      .title('Result Title')
      .body(`
        <div class="container body">
            <div class="main_container">
                <!-- page content -->
                <div class="col-md-12">
                    <div class="col-middle">
                        <div class="text-center text-center">
                            <h2>Error</h2>
                            <p>You will be redirected to login page...</p>
                        </div>
                    </div>
                </div>
                <!-- /page content -->
            </div>
        </div>`)
      .open();
  }
}
