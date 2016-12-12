import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { FIREBASE_CONFIG } from '../constant/constant';

@Injectable()
export class FirebaseConfigService {
    constructor() {
        this.configureApp();
    }

    configureApp() {
        const app = firebase.initializeApp(FIREBASE_CONFIG);
    }
}