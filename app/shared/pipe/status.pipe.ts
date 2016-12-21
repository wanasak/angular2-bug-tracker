import { Pipe, PipeTransform } from '@angular/core';

import { STATUS } from '../constant/constants';

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {

    private statuses = STATUS;

    transform(statusNumber: number) {
        return this.statuses[statusNumber];
    }

}