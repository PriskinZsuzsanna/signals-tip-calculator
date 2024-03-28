import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent {
  numberAmount?: InputSignal<number> = input(0);
  customAmount?: InputSignal<string> = input('');
  icon?: InputSignal<string> = input('');
}
