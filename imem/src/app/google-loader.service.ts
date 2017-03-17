import { Injectable } from '@angular/core';
const googleApiUrl = 'https://apis.google.com/js/client.js?onload=__onGoogleLoaded'
@Injectable()
export class GoogleLoaderService {

  loadAPI: Promise<any>
  pickerApiLoaded = false;
  oauthToken;
  developerKey = 'AIzaSyBZm1_hNw9NvMSTDEuWHTuJHkSWE-rGDxU';
  clientId = "698942483720-m6j2os0gm76r9f0sk75ctnofam1qemn6.apps.googleusercontent.com"
  appId = 698942483720;
  scope = ['https://www.googleapis.com/auth/drive'];
  contex: any;
  constructor() {
    this.loadAPI = new Promise((resolve) => {
      window['__onGoogleLoaded'] = (ev) => {
        resolve((<any>window).gapi);
      }
      this.loadScript();
    });
    (<any>window).googleLoader = this;
  }

  public createPicker() {
    if (this.pickerApiLoaded && this.oauthToken) {
      var view: any = new google.picker.View(google.picker.ViewId.DOCS);
      var picker = new google.picker.PickerBuilder()
        .enableFeature(google.picker.Feature.MINE_ONLY)
        .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
        .setAppId(this.appId)
        .setOAuthToken(this.oauthToken)
        .addView(view)
        .setLocale('ru')
        .addView(new google.picker.DocsUploadView().setIncludeFolders(true))
        .setDeveloperKey(this.developerKey)
        .setCallback(this.pickerCallback)
        .build();
      picker.setVisible(true);
    }
  }
  
  public pickerCallback (data) {
    if (data.action == google.picker.Action.PICKED) {
      var fileId = data.docs[0].id;
      alert('DEFAULT: ' + fileId);
    }
  }
  
  public setContex(context){
    this.contex = context;
  }

  public loadPicker() {
    return this.loadAPI.then((gapi) => {
      gapi.load('auth', {'callback': this.onAuthApiLoad});
      gapi.load('picker', { 'callback': this.onPickerApiLoad });
    });

  }
  private onAuthApiLoad() {
    var loader = (<any>window).googleLoader;
    (<any>window).gapi.auth.authorize(
      {
        'client_id': loader.clientId,
        'scope': loader.scope,
        'immediate': false
      },
      loader.handleAuthResult);
  }
  
  private onPickerApiLoad() {
    var loader = (<any>window).googleLoader;
    loader.pickerApiLoaded = true;
    // loader.createPicker();
  }

  private handleAuthResult(authResult) {
    var loader = (<any>window).googleLoader;
    if (authResult && !authResult.error) {
      loader.oauthToken = authResult.access_token;
      // loader.createPicker();
    }
  }



  loadScript() {
    let node = document.createElement('script');
    node.src = googleApiUrl;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
