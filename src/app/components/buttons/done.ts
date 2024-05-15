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
  template: `
    <button
      [class]="
        twMerge(
          'rounded-md bg-indigo-600 px-4 py-2 text-white',
          additionalClasses,
          loading && 'bg-slate-500'
        )
      "
    >
      <ng-content />
    </button>
  `,
  imports: [],
})
export class ButtonComponent {
  @Input()
  additionalClasses: string = '';

  @Input()
  loading: boolean = false;

  twMerge = twMerge;
}

@Component({
  selector: 'app-buttons',
  standalone: true,
  templateUrl: './buttons.component.html',
  imports: [NgIconComponent, NgFor, ButtonComponent],
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapChevronDown })],
})
export class ButtonsComponent {}
