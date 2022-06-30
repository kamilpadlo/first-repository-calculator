import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { listenerCount } from 'process';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  @Input('historyResult') equationAsStringArray: string[] = [];

  //* output

  num1 = '';
  num2 = '';
  @Output() numA = new EventEmitter();
  @Output() numB = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  checkResult(result: string) {
    const numbers = result.split(' ');
    this.num1 = numbers[0];
    this.num2 = numbers[2];
    return this.num1, this.num2;
  }

  sendNumA() {
    this.numA.emit(this.num1);
  }
  sendNumB() {
    this.numB.emit(this.num2);
  }
}
