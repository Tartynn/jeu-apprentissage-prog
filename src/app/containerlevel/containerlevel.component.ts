import { Component, ComponentFactoryResolver, ElementRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Level } from '../models/level';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '../local.service';
import { JavaIDEComponent } from '../java-ide/java-ide.component';
import { CodelevelComponent } from '../codelevel/codelevel.component';
import { FreelevelComponent } from '../freelevel/freelevel.component';
import { QcmlevelComponent } from '../qcmlevel/qcmlevel.component';
import { navigate } from '../app.component';

@Component({
  selector: 'app-containerlevel',
  templateUrl: './containerlevel.component.html',
  styleUrls: ['./containerlevel.component.css']
})
export class ContainerlevelComponent {
  @ViewChild('part1', {read: ViewContainerRef, static: false }) part1!: ViewContainerRef;
  @ViewChild('currLevel', { static: false }) currLevel!: ElementRef;
  firestore: Firestore = inject(Firestore);
  level$: Observable<Level[]>;
  id: number = 0;
  user!: User;
  uid: any;
  lvl!: Level;
  parts: number = 1;
  type!: string;
  constructor(private cfr: ComponentFactoryResolver, private ls: LocalService,private route: ActivatedRoute, private router: Router){
    const levels = collection(this.firestore, 'Niveaux');
    this.level$ = collectionData(levels) as Observable<Level[]>;
    this.route.params.subscribe(params => {
      this.id = +params['id'].replaceAll(':','');
    });
    this.uid = ls.getData('uid');
    const usObject : string = this.ls.getData('user') as string;
    this.user = JSON.parse(usObject);
    if(!this.user)
      navigate(this.router,'login');
    if(this.id>this.user.niveauActuel){
      navigate(this.router,"blocked");
    } 
  }

  ngAfterViewInit(): void{
    this.currLevel.nativeElement.textContent = "Niveau " + this.id;
    this.level$.subscribe(niveau => {
      niveau.forEach(niv =>{
        if (niv.niveauID==this.id){
          niv.currentPart = 1;
          this.lvl= niv;
          this.type = niv.partType[this.lvl.currentPart-1] as string;
          this.ls.saveData('level',JSON.stringify(niv));
          
          switch(this.type){
            case "code":{
              const factory = this.cfr.resolveComponentFactory(CodelevelComponent);
              const componentRef = this.part1.createComponent(factory);
              console.log("code");
              break;
            }
            case "free":{
              const factory = this.cfr.resolveComponentFactory(FreelevelComponent);
              const componentRef = this.part1.createComponent(factory);
              break;
            }
            case "qcm":{
              const factory = this.cfr.resolveComponentFactory(QcmlevelComponent);
              const componentRef = this.part1.createComponent(factory);
              break;
            }
          }
          
        }
      })
    });
  }
}
