import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
})

export class Console {
  @ViewChild('consoleLabel', { static: false }) consoleLabel!: ElementRef;
  containsError: boolean = false;
  onExecution(consoleText:string, error:boolean) {
    const labelElement: HTMLLabelElement = this.consoleLabel.nativeElement;
    labelElement.innerHTML = consoleText;
    this.containsError = error;
  }
}