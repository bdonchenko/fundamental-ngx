import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { SharedDocumentationModule } from '../../../documentation/shared-documentation.module';
import { API_FILES } from '../../api-files';
import { PlatformDisplayListItemHeaderComponent } from './platform-display-list-item-header/platform-display-list-item-header.component';
import { PlatformDisplayListItemDocsComponent } from './platform-display-list-item-docs.component';
import {
    PlatformDisplayListItemExampleComponent,
    PlatformDisplayListItemWithFooterExampleComponent,
    PlatformDisplayListItemWithNavigationExampleComponent
} from './platform-display-list-item-examples/platform-display-list-item-example.component';
import { PlatformListModule, DisplayListItemModule, PlatformButtonModule } from '@fundamental-ngx/platform';
import { ToolbarModule } from '@fundamental-ngx/core';
import { PlatformDisplayListItemBorderLessExampleComponent } from './platform-display-list-item-examples/platform-display-list-item-border-less-example.component';
import { PlatformDisplayListItemtWithGroupHeaderExampleComponent } from './platform-display-list-item-examples/platform-display-list-item-with-group-header-example.component';
const routes: Routes = [
    {
        path: '',
        component: PlatformDisplayListItemHeaderComponent,
        children: [
            { path: '', component: PlatformDisplayListItemDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.list } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationModule,
        PlatformListModule,
        PlatformButtonModule,
        ToolbarModule,
        DisplayListItemModule
    ],
    exports: [RouterModule],
    declarations: [
        PlatformDisplayListItemDocsComponent,
        PlatformDisplayListItemHeaderComponent,
        PlatformDisplayListItemExampleComponent,
        PlatformDisplayListItemBorderLessExampleComponent,
        PlatformDisplayListItemWithFooterExampleComponent,
        PlatformDisplayListItemtWithGroupHeaderExampleComponent,
        PlatformDisplayListItemWithNavigationExampleComponent
    ]
})
export class PlatformDisplayListItemDocsModule {
}