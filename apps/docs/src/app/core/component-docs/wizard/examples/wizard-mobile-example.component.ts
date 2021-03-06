import { Component, ViewEncapsulation } from '@angular/core';
import { WizardStepStatus } from '@fundamental-ngx/core';

@Component({
    selector: 'fd-wizard-mobile-example',
    templateUrl: './wizard-mobile-example.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .fd-wizard-mobile-docs .fd-wizard {
                max-width: 300px;
                margin-bottom: 2rem;
            }
        `
    ],
    host: {
        class: 'fd-wizard-mobile-docs'
    }
})
export class WizardMobileExampleComponent {
    example1step1status: WizardStepStatus = 'current';
    example1step2status: WizardStepStatus = 'upcoming';
    example1step3status: WizardStepStatus = 'upcoming';

    example2step1status: WizardStepStatus = 'current';
    example2step2status: WizardStepStatus = 'upcoming';
    example2step3status: WizardStepStatus = 'upcoming';

    example1goToStep(step: number): void {
        switch (step) {
            case 2: {
                this.example1step1status = 'completed';
                this.example1step2status = 'current';
                this.example1step3status = 'upcoming';
                break;
            }
            case 3: {
                this.example1step1status = 'completed';
                this.example1step2status = 'completed';
                this.example1step3status = 'current';
                break;
            }
        }
    }

    example2goToStep(step: number): void {
        switch (step) {
            case 2: {
                this.example2step1status = 'completed';
                this.example2step2status = 'current';
                this.example2step3status = 'upcoming';
                break;
            }
            case 3: {
                this.example2step1status = 'completed';
                this.example2step2status = 'completed';
                this.example2step3status = 'current';
                break;
            }
        }
    }
}
