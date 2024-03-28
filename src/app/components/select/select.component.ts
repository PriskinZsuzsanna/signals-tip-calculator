import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  label: InputSignal<string> = input('');
  icon: InputSignal<string> = input('');
}
