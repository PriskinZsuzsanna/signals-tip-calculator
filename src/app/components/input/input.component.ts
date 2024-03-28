import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  label: InputSignal<string> = input('')
  amount: InputSignal<number> = input(0)
  icon: InputSignal<string> = input('')
}
