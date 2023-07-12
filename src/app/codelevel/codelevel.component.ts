import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { JavaIDEComponent } from '../java-ide/java-ide.component';
import { CodeExecutionService } from '../code-service/code-service.component';
import { Console } from '../console/console.component';
import { Response } from '../models/response';
import { Ace, Editor } from 'ace-builds';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Level } from '../models/level';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-codelevel',
  templateUrl: './codelevel.component.html',
})

export class CodelevelComponent implements AfterViewInit{
  @ViewChild(JavaIDEComponent, { static: false }) javaIDE!: JavaIDEComponent;
  @ViewChild(Console, { static: false }) cons!: Console;
  //firestore: Firestore = inject(Firestore);

  constructor(private codeExecutionService: CodeExecutionService) {
    /*var levels = collection(this.firestore, 'Niveaux');
    var data = collectionData(levels);
    console.log(levels);
    data.forEach(function (value) {
      console.log(value);
    });
    console.log(data);
    //ça get la collection*/
  }
  
  ngAfterViewInit(): void {
    
    //this.javaIDE.setEditorContent("uwu");
  }
  

  code = '';
  async onButtonExecute() {
    const code = this.javaIDE.getEditorContent();
    try {
      const response = await this.codeExecutionService.executeCode(code);
      console.log(response);
      //this.cons.onExecution(response);
    } catch (error) {
      console.error(error);
    }
  }
}
