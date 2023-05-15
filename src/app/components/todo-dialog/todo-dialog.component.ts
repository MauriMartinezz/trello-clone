import { Component, Inject, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  faBars,
  faCheckToSlot,
  faClose,
  faTag,
  faCheckSquare,
  faClock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/models/todo.model';

interface InputData {
  todo: Todo;
}

interface OutputData {
  output: boolean;
}
@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  private dialogRef = inject(DialogRef<OutputData>);
  faClose = faClose;
  faUser = faUser;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faTag = faTag;
  faClock = faClock;
  faCheckSquare = faCheckSquare;

  todo: Todo;

  constructor(@Inject(DIALOG_DATA) data: InputData) {
    this.todo = data.todo;
  }

  close() {
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({
      output: rta,
    });
  }
}
