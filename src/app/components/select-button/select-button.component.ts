import { AfterContentInit, Component, InputSignal, ModelSignal, Signal, WritableSignal, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent implements AfterContentInit {
  amount: InputSignal<string> = input('');
  icon: InputSignal<string | undefined> = input();
  background: InputSignal<string | undefined> = input();
  color: InputSignal<string | undefined> = input();
  bg: WritableSignal<string | undefined> = signal('');
  textColor: WritableSignal<string | undefined> = signal('');
  onSelected = output<Signal<string>>();

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

  onSelect() {
    this.onSelected.emit(this.amount);
  }
}
