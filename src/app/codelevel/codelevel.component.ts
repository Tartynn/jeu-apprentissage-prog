import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { JavaIDEComponent } from '../java-ide/java-ide.component';
import { Console } from '../console/console.component';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Level } from '../models/level';
import { UserDAL } from '../DAL/UserDAL';
import { ActivatedRoute, Router } from '@angular/router';

import { navigate, navigateWithId } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-codelevel',
  templateUrl: './codelevel.component.html',
})

export class CodelevelComponent implements AfterViewInit{
  
  @ViewChild(JavaIDEComponent, { static: false }) javaIDE!: JavaIDEComponent;
  @ViewChild(Console, { static: false }) cons!: Console;
  @ViewChild('donnee', { static: false }) donnee!: ElementRef;
  firestore: Firestore = inject(Firestore);
  level$: Observable<Level[]>;
  id: number = 0;
  user!: User;
  uid: any;
  lvl!: Level;
  constructor(private ls: LocalService ,private route: ActivatedRoute,private router: Router, private http: HttpClient) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const levels = collection(this.firestore, 'Niveaux');
    this.level$ = collectionData(levels) as Observable<Level[]>;
    this.route.params.subscribe(params => {
      this.id = +params['id'].replaceAll(':','');
    });
    this.uid = ls.getData('uid');
    const usObject : string = this.ls.getData('user') as string;
    const levObject : string = this.ls.getData('level') as string;
    this.lvl= JSON.parse(levObject);
    this.user = JSON.parse(usObject);
  }
  
  ngAfterViewInit(): void {
    const labelElement: HTMLLabelElement = this.donnee.nativeElement;
    labelElement.innerHTML = this.lvl.donnee[0].replaceAll('\\n','<br>');
    console.log(this.user.niveaux[this.id-1]);
    if(this.user.niveaux[this.id-1]===""){
      this.javaIDE.setEditorContent(this.lvl.codeDepart[0].replaceAll('\\n','\n'));
    }else{
      this.javaIDE.setEditorContent(this.user.niveaux[this.id-1]);
    }
    
  }

  code = '';
  async onButtonExecute() {
    const code = this.javaIDE.getEditorContent();
    try {
      const response: any = await this.executeCode(code);
      if(response.error.length==0){
        this.cons.onExecution(response.stdout.replaceAll("\n","<br>"),false);
      }else{
        this.cons.onExecution(response.error + '<br>' + response.stderr.replaceAll('^','<br>'),true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async sendCode(){

  }

  async executeCode(content: string) {
    const url = 'http://localhost:3000/api/run/java/latest';
    const body = { files: [{ name: 'Tricount.java', content: content }] };

    return this.http.post(url, body).toPromise();
  }

  reset() {
    if(confirm("Êtes-vous sûr de vouloir réinitialiser votre code avec celui de départ ?")){
      this.save("");
      this.javaIDE.setEditorContent(this.lvl.codeDepart[0].replaceAll('\\n','\n'));
    } 
  }
  
  async saveCode() {
    const code = this.javaIDE.getEditorContent();
    this.save(code);
  }

  save(code: string){
    this.user.niveaux[this.id-1]=code;
    this.ls.saveData('user', JSON.stringify(this.user));
    UserDAL.prototype.updateUserCode(this.uid,this.user.niveaux);

  }
}
