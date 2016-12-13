import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css' ]
})
export class BugDetailComponent implements OnInit {
    
    private moduleId = "bugModal";
    private bugForm: FormGroup;

    ngOnInit() {
        this.configureForm();
    }

    configureForm() {
        this.bugForm = new FormGroup({
            title: new FormControl(null, Validators.required),
            status: new FormControl(1, Validators.required),
            severity: new FormControl(1, Validators.required),
            description: new FormControl(null, Validators.required),
        })
    }

    submitForm() {
        console.log(this.bugForm);
    }

}