import { AfterContentInit, Component, InputSignal, ModelSignal, Signal, WritableSignal, input, model, output, signal } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent implements AfterContentInit {
  amount: InputSignal<string> = input('');
  icon: InputSignal<string | undefined> = input();
  background: InputSignal<string | undefined> = input();
  color: InputSignal<string | undefined> = input();
  scale: WritableSignal<string> = signal('1');
  selected:  ModelSignal<boolean> = model(false);
  onSelected = output<Signal<string>>();
  isInput: boolean = false

  ngAfterContentInit(): void {
    this.isInput = false
  }

  onMouseEnter() {
    this.scale.set('.8');
  }
  onMouseLeave() {
  }

  onSelect(event:Event) {
    if(this.amount() === 'Custom') {
      this.isInput = true;
    }
    this.onSelected.emit(this.amount);
    this.selected.set(true);
  }
}
