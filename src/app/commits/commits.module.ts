import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { CommitsComponent } from './commits.component';
import { CommitsService } from './commits.service';

@NgModule({
  declarations: [CommitsComponent],
  imports: [CommonModule, OverlayPanelModule, VirtualScrollerModule, ButtonModule],
  entryComponents: [CommitsComponent],
  exports: [CommitsComponent],
  providers: [CommitsService],
})
export class CommitsModule {}
