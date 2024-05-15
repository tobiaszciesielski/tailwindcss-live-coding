import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  bootstrapChevronDown,
  bootstrapGithub,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  templateUrl: './buttons.component.html',
  imports: [NgIconComponent, NgFor],
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapChevronDown })],
})
export class ButtonsComponent {}
