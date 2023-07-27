import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaIDEComponent } from './java-ide/java-ide.component';
import { Console } from './console/console.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CodelevelComponent } from './codelevel/codelevel.component';

import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { BlockedlevelComponent } from './blockedlevel/blockedlevel.component';
import { AdminComponent } from './admin/admin.component';
import { QcmlevelComponent } from './qcmlevel/qcmlevel.component';
import { FreelevelComponent } from './freelevel/freelevel.component';
import { ContainerlevelComponent } from './containerlevel/containerlevel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JavaIDEComponent,
    Console,
    HomePageComponent,
    CodelevelComponent,
    LoginComponent,
    SidebarComponent,
    ToolbarComponent,
    BlockedlevelComponent,
    AdminComponent,
    QcmlevelComponent,
    FreelevelComponent,
    ContainerlevelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

