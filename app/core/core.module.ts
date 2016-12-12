import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

// Services 
import { FirebaseConfigService } from './service/firebase-config.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: []
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error(
                "CoreModule already exists."
            );
        }
    }
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [ FirebaseConfigService ]
        }
    }
}