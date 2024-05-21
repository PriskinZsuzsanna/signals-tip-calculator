import { Component,  OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
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
  numberOfPeople: WritableSignal<string> = signal('1');
  selectedAmount: WritableSignal<string> = signal('10');
  calculatedTip: Signal<number> = signal(0);
  calculatedTotal: Signal<number> = signal(0);
  isInput = signal<boolean>(false);

  ngOnInit(): void {
    this.calculatedTip = computed(() => {
      return Number((Number(this.billAmount()) * (Number(this.selectedAmount()) * 0.01) / Number(this.numberOfPeople())).toFixed(2));
    });
    this.calculatedTotal = computed(() => {
      let value: number = 0;
      if (this.billAmount()) {
        value = Number(this.billAmount());
      }
      if (this.billAmount() && this.numberOfPeople()) {
        value = Number((Number(this.billAmount()) / Number(this.numberOfPeople())).toFixed(2));
      }
      return value;
    });
  }

  onReset() {
    this.billAmount.set('');
    this.numberOfPeople.set('1');
    this.selectedAmount.set('10');
    this.isInput.set(false);
  }
}
