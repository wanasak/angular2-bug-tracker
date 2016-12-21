import { Pipe, PipeTransform } from '@angular/core';

import { SEVERITY } from '../constant/constants';

@Pipe({
    name: 'severity'
})
export class SeverityPipe implements PipeTransform {

    private severities = SEVERITY;

    transform(severityNumber: number) {
        return this.severities[severityNumber];
    }
}