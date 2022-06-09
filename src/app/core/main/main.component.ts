import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  equationAsStringArray: string[] = [];
  equationArray: string[] = [];
  textInsideA: any = '';
  textInsideB: any = '';
  sign: string = '';
  result: any = '=';
  isActive: boolean = false;

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
  divideZeroAlert() {
    alert(`You can't divide by 0.`);
  }

  getSign(operator: string, numA: any, numB: any) {
    let calculate;
    if (operator === '+') return (calculate = numA + numB);
    else if (operator === '-') return (calculate = numA - numB);
    else if (operator === '*') return (calculate = numA * numB);
    else if (operator === '/') return (calculate = numA / numB);
  }

  makeCalculations() {
    if (this.textInsideA !== '' && this.textInsideB !== '') {
      this.result =
        Math.round(
          this.getSign(this.sign, this.textInsideA, this.textInsideB) * 100000
        ) / 100000;
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
    } else {
      this.displayNotification();
    }
  }

  add() {
    this.sign = '+';
    this.makeCalculations();
  }

  subtract() {
    this.sign = '-';
    this.makeCalculations();
  }

  multiply() {
    this.sign = '*';
    this.makeCalculations();
  }

  divide() {
    if (this.textInsideB == '0') {
      this.divideZeroAlert();
    } else {
      this.sign = '/';
      this.makeCalculations();
    }
  }

  clear() {
    this.isActive = false;
    this.result = '=';
    this.clearInputFields();
  }
}
