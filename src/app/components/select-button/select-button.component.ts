import { AfterContentInit, Component, InputSignal, Signal, WritableSignal, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent implements AfterContentInit {
  numberAmount: InputSignal<number | undefined> = input();
  customAmount: InputSignal<string | undefined> = input();
  icon: InputSignal<string | undefined> = input();
  background: InputSignal<string | undefined> = input();
  color: InputSignal<string | undefined> = input();
  bg: WritableSignal<string | undefined> = signal('');
  textColor: WritableSignal<string | undefined> = signal('');
  selectedAmount = output<number | string>();

  ngAfterContentInit(): void {
    this.bg.set(this.background());
    this.textColor.set(this.color());
  }

  onMouseEnter() {
    this.bg.set('hsl(172, 67%, 45%)');
    this.textColor.set('hsl(183, 100%, 15%)')
  }
  onMouseLeave() {
    this.bg.set(this.background());
    this.textColor.set(this.color());
  }

  onSelect(amount: number | string) {
    this.selectedAmount.emit(amount);
  }
}
