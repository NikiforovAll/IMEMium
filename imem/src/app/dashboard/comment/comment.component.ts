import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment-section/comment-section.component';
import { editorConfig } from '../../editor-config.service';

@Component({
  selector: 'comment-block',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() modelComment: Comment;

  bufferComment: Comment;
  isShowCommentSection: boolean = false;
  editorConfig = editorConfig;
  constructor() { 
    this.bufferComment =   {
          Author: '',
          DateLabel: '',
          EditorContent: '',
          PictureUrl: ''
        };
  }

  ngOnInit() {
  }

  public toggleCommentSection() {
    if (!this.isShowCommentSection) {
      // document.getElementById('commentBtn').scrollIntoView()
    }
    this.isShowCommentSection = !this.isShowCommentSection;
  }
  public editComment(){
    if (!this.isShowCommentSection) {
      this.bufferComment = Object.assign({}, this.modelComment);
    }
    this.toggleCommentSection();
  }
  public confirmComment(){
    this.modelComment = Object.assign({}, this.bufferComment);
    this.isShowCommentSection = false;
  }

}
