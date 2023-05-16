import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'primary' | 'light' | 'danger' | 'sky' =
    'primary';

  mapColors = {
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
      'text-white': true,
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
    },
    danger: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'focus:ring-red-300': true,
      'text-white': true,
    },
    sky: {
      'bg-sky-200': true,
      'hover:bg-sky-500': true,
      'focus:ring-sky-50': true,
      'text-white': true,
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true,
      'text-gray-700': true,
    },
  };

  get colors() {
    const colors = this.mapColors[this.color];
    if (colors) colors;
    return {};
  }
}
