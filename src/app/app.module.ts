import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DialogModule } from '@angular/cdk/dialog';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardComponent } from './pages/board/board.component';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { ScrollComponent } from './pages/scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    BoardsComponent,
    NavbarComponent,
    BoardComponent,
    TodoDialogComponent,
    ScrollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
