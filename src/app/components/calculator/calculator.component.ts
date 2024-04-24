import { Component, ModelSignal, OnInit, Signal, WritableSignal, computed, effect, model, signal } from '@angular/core';
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
export class CalculatorComponent implements OnInit{
  billAmount: WritableSignal<string> = signal('');
  numberOfPeople: WritableSignal<string> = signal('');
  selectedAmount: WritableSignal<string> = signal('');
  calculatedTip: Signal<number> = signal(0);
  calculatedTotal: Signal<number> = signal(0);

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

  ngOnInit(): void {
    this.calculatedTip = computed(() => {
      return Number(this.billAmount()) * (Number(this.selectedAmount()) * 0.01);
    });
    this.calculatedTotal = computed(() => {
      let value: number = 0
      if(this.billAmount() && this.numberOfPeople()) {
        value = Number((Number(this.billAmount()) / Number(this.numberOfPeople())).toFixed(2));
      }
      return value
    });
  }
}
