import { Injectable } from '@angular/core';

@Injectable()
export class EditorConfigService {

  constructor() { }

}
export const editorConfig = {
    language: 'ru',
    height: 200,
    placeholderText: '',
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize',
      'specialCharacters', 'color', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', 
      'undo', 'redo', 'clearFormatting', 'selectAll', 'html'],
    pluginsEnabled: ['fontFamily', 'lists', 'save', 'fontSize']
  };
