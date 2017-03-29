import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { editorConfig } from '../../editor-config.service';
export interface Comment {
  Author: string;
  DateLabel: string;
  PictureUrl: string;
  EditorContent: Object;
}

@Component({
  selector: 'comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  lastCommentToggle: boolean = false;
  private sub: any;
  // 'insertFile' | 'file'
  editorConfig = editorConfig;

  editorContent: Object;
  commentList: Comment[];

  constructor(
    private _authService: AuthService
  ) {
    this.commentList = [];
  }

  ngOnInit() {
  }

  public addComment() {
    if (this.editorContent) {
      this.commentList.push(
        {
          Author: this._authService.getUserName().given_name + ' ' + this._authService.getUserName().family_name,
          DateLabel: 'commented a few seconds ago',
          EditorContent: this.editorContent,
          PictureUrl: this._authService.getUserPicture()
        });
    }
    this.editorContent = '';
    this.lastCommentToggle = !this.lastCommentToggle;
  }
  public toggleCommentSection() {
    if (!this.lastCommentToggle) {
      // document.getElementById('commentBtn').scrollIntoView()
      // document.getElementById('comment-section').focus()
    }
    this.lastCommentToggle = !this.lastCommentToggle;
  }

}
