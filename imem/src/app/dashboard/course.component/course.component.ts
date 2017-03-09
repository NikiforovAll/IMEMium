import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Course } from '../../Models/Course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'course',
    templateUrl: 'course.component.html',
    providers: []
})
export class CourseComponent implements OnInit {

    id: string;

    lastCommentToggle: boolean = false;
    private sub: any;
    editorConfig: Object = {
        height: 200,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '-',
            'specialCharacters', 'color', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', '-',
            'insertFile', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'],
        pluginsEnabled: ['fontFamily', 'file', 'lists', 'save', 'fontSize']
    };
    editorContent: Object;
    submitted: boolean;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.submitted = true;
    }

    onSubmit() {
        this.submitted = true;
    }
    formReset() {
        this.submitted = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

    toggleLastCommentEditMode() {
        this.lastCommentToggle = !this.lastCommentToggle;
    }
    private navigateToParent(): void {
        this.router.navigate(['/dashboard/courses']);
    }
}