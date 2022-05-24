import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator-angular';
  equationArray: string[] = [];
  equationAsStringArray: string[] = [];
  addSign = '+';
  textInsideA: string = '';
  textInsideB: string = '';
  numA = '';
  sign: string = '';
  result: any = '=';
  isActive: boolean = false;

  constructor() {}
  clearInputFields() {
    this.textInsideA = '';
    this.textInsideB = '';
  }

  copyResultA() {
    this.textInsideA = this.result;
  }
  copyResultB() {
    this.textInsideB = this.result;
  }
  displayNotification() {
    alert('Please, fill both fields with numbers.');
  }
  makeCalculations() {
    this.equationArray = [];
    this.equationArray.push(
      this.textInsideA,
      this.sign,
      this.textInsideB,
      '=',
      this.result
    );
    this.isActive = true;
    this.equationAsStringArray.push(this.equationArray.join(' '));
    this.clearInputFields();
  }

  add() {
    if (this.textInsideA !== '' && this.textInsideB !== '') {
      this.sign = '+';
      this.result = +this.textInsideA + +this.textInsideB;
      this.makeCalculations();
    } else {
      this.displayNotification();
    }
  }

  subtract() {
    if (this.textInsideA !== '' && this.textInsideB !== '') {
      this.sign = '-';
      this.result = +this.textInsideA - +this.textInsideB;
      this.makeCalculations();
    } else {
      this.displayNotification();
    }
  }

  multiply() {
    if (this.textInsideA !== '' && this.textInsideB !== '') {
      this.sign = '*';
      this.result = +this.textInsideA * +this.textInsideB;
      this.makeCalculations();
    } else {
      this.displayNotification();
    }
  }

  divide() {
    if (this.textInsideA !== '' && this.textInsideB !== '') {
      this.sign = '/';
      this.result = +this.textInsideA / +this.textInsideB;
      this.makeCalculations();
    } else {
      this.displayNotification();
    }
  }

  clear() {
    this.isActive = false;
    this.result = '=';
    this.clearInputFields();
  }
}
