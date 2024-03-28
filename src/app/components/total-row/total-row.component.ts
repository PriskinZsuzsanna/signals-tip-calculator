import { I18nPluralPipe } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-total-row',
  standalone: true,
  imports: [],
  templateUrl: './total-row.component.html',
  styleUrl: './total-row.component.scss'
})
export class TotalRowComponent {
  label: InputSignal<string> = input('')
  amount: InputSignal<number> = input(0)
  icon: InputSignal<string> = input('')
}
