import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-animations',
  standalone: true,
  styleUrl: './animations.component.scss',
  templateUrl: './animations.component.html',
  imports: [NgIconComponent, NgFor],
})
export class AnimationsComponent {}
