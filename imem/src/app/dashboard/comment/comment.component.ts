import {
  Component,
  OnInit,
  Input,
  AfterViewChecked,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { Comment } from '../comment-section/comment-section.component';
import { editorConfig } from '../../editor-config.service';

@Component({
  selector: 'comment-block',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, AfterViewChecked {


  @Input() modelComment: Comment;

  bufferComment: Comment;
  isShowCommentSection: boolean = false;
  editorConfig = editorConfig;
  @Input()
  isAllowedToReply = true;
  private isNeedToScroll = false;

  @ViewChild('mainButton') private mainButton: ElementRef;

  constructor(
        private changeDetector: ChangeDetectorRef
  ) {
    this.bufferComment = {
      Author: '',
      DateLabel: '',
      EditorContent: '',
      PictureUrl: ''
    };
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    if (this.isNeedToScroll) {
      let currElement = this.mainButton.nativeElement;
      const elementRect = currElement.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - (window.innerHeight / 2);
      window.scrollTo(0, middle);
      this.isNeedToScroll = false;
    }
  }
  public toggleCommentSection() {
    this.isShowCommentSection = !this.isShowCommentSection;
    if (this.isShowCommentSection) {
      this.isNeedToScroll = true;
    }
  }
  public editComment() {
    if (!this.isShowCommentSection) {
      this.bufferComment = Object.assign({}, this.modelComment);
    }
    this.toggleCommentSection();
  }

  public confirmComment() {
    this.modelComment = Object.assign({}, this.bufferComment);
    this.isShowCommentSection = false;
    // this.changeDetector.detectChanges();
  }

}
