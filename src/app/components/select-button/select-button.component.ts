import { Component, InputSignal, ModelSignal, Signal, WritableSignal, input, model, output, signal } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [InputComponent, FormsModule],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent {
  amount: ModelSignal<string> = model('');
  icon: InputSignal<string | undefined> = input();
  background: InputSignal<string | undefined> = input();
  color: InputSignal<string | undefined> = input();
  scale: WritableSignal<string> = signal('1');
  selected:  ModelSignal<boolean> = model.required();
  onSelected = output<Signal<string>>();
  isInput  = model<boolean>(false);
  inputValue: ModelSignal<string> = model('');

  onSelect(event:Event) {
    if(this.amount() !== '5' && this.amount() !== '10' && this.amount() !== '15' && this.amount() !== '25'&& this.amount() !== '50') {
      this.isInput.set(true);
      return;
    }
    this.onSelected.emit(this.amount);
  }

  onValueChange(event: ModelSignal<string>) {
    this.amount.set(event());
    this.onSelected.emit(this.amount);
    if (this.isInput()) {
      this.isInput.set(false);
      return;
    }
  }
}
