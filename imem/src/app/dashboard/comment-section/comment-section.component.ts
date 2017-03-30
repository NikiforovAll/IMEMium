import {
  Component,
  OnInit,
  ViewChild,
  AfterViewChecked,
  ElementRef,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import { AuthService } from '../../auth.service';
import { editorConfig } from '../../editor-config.service';
export interface Comment {
  Author: string;
  DateLabel: string;
  PictureUrl: string;
  EditorContent: Object;
  IsRoot?: boolean;
}

@Component({
  selector: 'comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit, AfterViewChecked {


  isShowCommentSection: boolean = false;
  private isNeedToScroll = false;
  // 'insertFile' | 'file'
  editorConfig = editorConfig;
  editorContent: Object;
  commentList: Comment[];
  @Input()
  isRootSection = true;

  @ViewChild('mainButton') private mainButton: ElementRef;
  @ViewChild('editor') private editor: ElementRef;
  constructor(
    private _authService: AuthService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.commentList = [];
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
    this.isShowCommentSection = !this.isShowCommentSection;
    this.changeDetector.detectChanges();
  }
  public toggleCommentSection() {
    this.isShowCommentSection = !this.isShowCommentSection;
    if (this.isShowCommentSection) {
      this.isNeedToScroll = true;
    }

  }

}
