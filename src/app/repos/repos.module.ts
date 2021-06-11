import { NgModule } from '@angular/core';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ReposComponent } from './repos.component';
import { ReposService } from './repos.service';
import { CommitsModule } from '../commits/commits.module';

@NgModule({
  declarations: [ReposComponent],
  imports: [
    VirtualScrollerModule,
    DropdownModule,
    ButtonModule,
    DataViewModule,
    OverlayPanelModule,
    CommitsModule,
  ],
  entryComponents: [ReposComponent],
  providers: [ReposService],
})
export class ReposModule {}
