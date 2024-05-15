import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-dynamic-values',
  standalone: true,
  templateUrl: './dynamic-values.component.html',
  imports: [AsyncPipe],
})
export class DynamicValuesComponent {
  public TEXT_COLOR = of('#451A03');
  public BG_COLOR = '#F59E0B';
  public HOVER_COLOR = '#FBBF24';
}
