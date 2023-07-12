import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
})

export class Console {
  @ViewChild('consoleLabel', { static: false }) consoleLabel!: ElementRef;

  onExecution(consoleText:string) {
    const labelElement: HTMLLabelElement = this.consoleLabel.nativeElement;
    labelElement.textContent = consoleText;
  }
}