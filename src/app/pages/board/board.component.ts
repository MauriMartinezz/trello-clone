import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';

import { Column, Todo } from 'src/app/models/todo.model';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drag-placeholder {
        opacity: 0;
      }

      .cdk-drop-list-draggin .cdk-drag {
        transition: transform 250ms cubric-bezier(0, 0, 0.2, 1);
      }

      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
        border-radius: 4px;
      }

      ::-webkit-scrollbar-track {
        background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
        border-radius: 4px;
      }

      /* Agrega un efecto hover a la barra de desplazamiento */
      ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
      }
    `,
  ],
})
export class BoardComponent {
  columns: Column[] = [
    {
      title: 'Todo',
      todos: [
        {
          id: '1',
          title: 'Task 1',
        },
        {
          id: '2',
          title: 'Task 2',
        },
        {
          id: '3',
          title: 'Task 3',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'laburar',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play LOL',
        },
      ],
    },
  ];
  todos: Todo[] = [];
  doing: Todo[] = [];
  done: Todo[] = [];

  constructor(private dialog: Dialog) {}
  drop(e: CdkDragDrop<Todo[]>) {
    if (e.previousContainer === e.container) {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex);
    } else {
      transferArrayItem(
        e.previousContainer.data,
        e.container.data,
        e.previousIndex,
        e.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New column',
      todos: [],
    });
  }

  dropColumn(e: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, e.previousIndex, e.currentIndex);
  }

  openDialog(todo: Todo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '800px',
      autoFocus: false,
      data: {
        todo,
      },
    });

    dialogRef.closed.subscribe(console.log);
  }
}
