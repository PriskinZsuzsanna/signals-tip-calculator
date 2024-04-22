import { Component, ModelSignal, WritableSignal, effect, model, signal } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [InputComponent, SelectComponent, TotalComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  billAmount: WritableSignal<string> = signal('');
  numberOfPeople: WritableSignal<string> = signal('');
  selectedAmount: WritableSignal<string> = signal('');

  constructor () {
    effect(() => {
      console.log(this.billAmount());
    });
    effect(() => {
      console.log(this.numberOfPeople());
    });
    effect(() => {
      console.log(this.selectedAmount());
    });
  }
}
