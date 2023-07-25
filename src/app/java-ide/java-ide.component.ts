// mycomponent.component.ts

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as ace from 'ace-builds';

// The `ace` object doesn't expose Ace's types, so use `Ace` from `ace-builds`.
import {Ace} from 'ace-builds';

@Component({
  selector: 'app-java-ide',
  templateUrl: './java-ide.component.html',
  styleUrls: ['./java-ide.component.css']
})
export class JavaIDEComponent implements AfterViewInit {
  setEditorContent(donnee:string) {
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue(donnee);
  }
  getEditorContent() {
    const aceEditor = ace.edit(this.editor.nativeElement)
    return aceEditor.getValue();
  }
  @ViewChild('editor') private editor!: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.setTheme('ace/theme/dracula');
    aceEditor.session.setMode('ace/mode/java');
    aceEditor.on("change", () => {
      //console.log(aceEditor.getValue());
    });
  }
}
