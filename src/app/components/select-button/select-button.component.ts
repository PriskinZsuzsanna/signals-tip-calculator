import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent {
  numberAmount: InputSignal<number | undefined> = input();
  customAmount: InputSignal<string | undefined> = input();
  icon: InputSignal<string | undefined> = input();
}
