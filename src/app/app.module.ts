import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentComponent } from './Student/student.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { DepartmentComponent } from './core/department/department.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,StudentComponent, HeaderComponent, SidebarComponent, MenuComponent ,DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
