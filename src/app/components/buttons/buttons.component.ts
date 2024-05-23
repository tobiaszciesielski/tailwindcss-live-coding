import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  bootstrapChevronDown,
  bootstrapGithub,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-button',
  standalone: true,
  template: ` <button class="{{ mapper(1) }}">
    <ng-content />
  </button>`,
  imports: [NgIconComponent, NgFor],
})
export class ButtonComponent {
  @Input()
  additionalClasses: string = '';
  @Input()
  loading: boolean = false;

  twMerge = twMerge;

  mapper(status: number): string {
    const mappingObject = {
      1: 'bg-amber-' + 950,
    };

    return mappingObject[1];
  }

  ['bg-amber-500']() {}
}

@Component({
  selector: 'app-buttons',
  standalone: true,
  templateUrl: './buttons.component.html',
  imports: [NgIconComponent, NgFor, ButtonComponent],
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapChevronDown })],
})
export class ButtonsComponent {}
