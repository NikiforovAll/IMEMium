import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GentelellaService } from '../gentelella.service';

@Component({
    moduleId: module.id,
    selector: 'lecture',
    templateUrl: 'lecture.component.html',
    providers: [GentelellaService]
})
export class LectureComponent implements OnInit {
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

    constructor(private route: ActivatedRoute, private router: Router, private gentelellaService: GentelellaService) {
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
        this.gentelellaService.addCollapsablePanels();
    }

    private navigateToParent(): void {
        // TBD: change to actual course id
        this.router.navigate(['/dashboard/courses', 1]);
    }
}