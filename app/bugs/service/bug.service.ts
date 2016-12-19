import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';

import { Bug } from '../model/bug'

@Injectable()
export class BugService {

    bugDbRef = this.firebaseService.database.ref('/bugs');

    constructor(
        private firebaseService: FirebaseConfigService
    ) {

    }

    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
            this.bugDbRef.on('child_added', bug => {
                const newBug = bug.val() as Bug;
                obs.next(newBug);
            }, err => {
                obs.throw(err);
            })
        });
    }

    addBug(bug: Bug) {
        const newBugRef = this.bugDbRef.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Smudger',
            createdDate: Date.now()
        })
        .catch(err => {
            console.error("Unable to add a bug to Firebase - ", err);
        });     
    }
}