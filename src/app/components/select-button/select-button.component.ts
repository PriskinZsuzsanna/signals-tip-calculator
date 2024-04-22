import { AfterContentInit, Component, InputSignal, ModelSignal, WritableSignal, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent implements AfterContentInit {
  amount: ModelSignal<string> = model('');
  icon: InputSignal<string | undefined> = input();
  background: InputSignal<string | undefined> = input();
  color: InputSignal<string | undefined> = input();
  bg: WritableSignal<string | undefined> = signal('');
  textColor: WritableSignal<string | undefined> = signal('');
  selectedAmount = output<string>();

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
    this.selectedAmount.emit(this.amount());
  }
}
