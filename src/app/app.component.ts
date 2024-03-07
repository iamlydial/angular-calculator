import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-calculator';

  calValue : number = 0;
  funcT:any = 'No Function';

  calNumber : string = 'no value';

  onClickValue(val: string, type: any){
    console.log(val, type);
    if(type == 'number'){
      this.onNumberClick(val);
    }
  }

  onNumberClick(val : string){
    if(this.calNumber !== 'novalue'){
      this.calNumber = this.calValue + val;
    } else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);
  }
}
