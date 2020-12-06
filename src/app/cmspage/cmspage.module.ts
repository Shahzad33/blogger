import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { CmspageComponent } from './cmspage/cmspage.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [CmspageComponent, ContactFormComponent, PageComponent],
  imports: [
    CommonModule,
    CmspageRoutingModule
  ]
})
export class CmspageModule { }
