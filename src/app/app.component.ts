import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-calculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'no value';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any) {
    console.log(val, type);
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber !== 'novalue') {
      this.calNumber = this.calValue + val;
    } else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if(this.funcT !== 'NoFunction'){
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string){
    if(this.funcT == '+'){
      const Total = this.firstNumber + this.secondNumber;
      this.calValue = Total;
    } else if(this.funcT == '-'){
      const Total = this.firstNumber - this.secondNumber;
      this.calValue = Total;
    } else if(this.funcT == '/'){
      const Total = this.firstNumber / this.secondNumber;
      this.calValue = Total;
    } else if(this.funcT == '*'){
      const Total = this.firstNumber * this.secondNumber;
      this.calValue = Total;
    }
  }
}
