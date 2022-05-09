import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DepartmentComponent } from './department/department.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,NgModule
  ],
  exports:[NavbarComponent,FooterComponent,HeaderComponent]
})
export class CoreModule { }
