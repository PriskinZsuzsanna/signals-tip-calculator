import { Component, InputSignal, Signal, input, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  label: InputSignal<string> = input('');
  icon: InputSignal<string> = input('');
  amount: Signal<number> = signal(0);
}
