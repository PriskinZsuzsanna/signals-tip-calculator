import { Component, InputSignal, effect, input } from '@angular/core';
import { TotalRowComponent } from '../total-row/total-row.component';
import { TotalRow } from '../../models/calculator.types';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [TotalRowComponent],
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss'
})
export class TotalComponent {
  calculatedPercent: InputSignal<number> = input(0);
  calculatedTotal: InputSignal<number> = input(0);

  constructor() {
    effect(() => {
      console.log(this.calculatedTotal());
    })
  }
}
