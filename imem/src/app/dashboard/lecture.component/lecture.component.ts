import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GentelellaService } from '../gentelella.service';
import { GoogleLoaderService } from '../../google-loader.service';
import { editorConfig } from '../../editor-config.service';

@Component({
    moduleId: module.id,
    selector: 'lecture',
    templateUrl: 'lecture.component.html',
    styleUrls: ['lecture.component.css'],
    providers: [GentelellaService]
})
export class LectureComponent implements OnInit {
    id: string;
    lastCommentToggle: boolean = false;
    modelLecture:any;
    fileList: any[];
    private sub: any;

    editorConfig = editorConfig;
    editorContent: Object;
    submitted: boolean;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _googleLoader: GoogleLoaderService,
        private gentelellaService: GentelellaService,
        private ref: ChangeDetectorRef
    ) {
        this.submitted = true;
        _googleLoader.pickerCallback = this.pickerCallBack;
        _googleLoader.setContex(this);
        this.modelLecture = {};
        this.fileList = [];

    }

    public pickerCallBack(data) {
        //TBD: get context by closure; this solution breaks model detection (so must use manual update = bad approach)
        var loader = <GoogleLoaderService>(<any>window).googleLoader;
        var context = loader.contex as LectureComponent;
        if (data.action == google.picker.Action.PICKED) {
            context.addFile(data.docs[0]);
        }
    }

    addFile(data) {
        this.fileList.push(data);
        this.ref.detectChanges();
        
    }
    removeFile(index: any) {
        if (index > -1) {
            this.fileList.splice(index, 1);
        }
        this.ref.detectChanges();
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
    openGooglePicker() {
        this._googleLoader.createPicker();
    }
    navigateToParent(): void {
        // TBD: change to actual course id
        this.router.navigate(['/dashboard/courses', 1]);
    }
}