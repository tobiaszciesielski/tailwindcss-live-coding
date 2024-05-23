import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgFor],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
