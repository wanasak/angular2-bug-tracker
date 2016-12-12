import { Injectable } from '@angular/core';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';


@Injectable()
export class BugService {
    constructor(
        private firebaseService: FirebaseConfigService
    ) {

    }
}