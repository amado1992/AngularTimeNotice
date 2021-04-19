import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RelojComponent } from './reloj/reloj.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CronometroComponent } from './cronometro/cronometro.component'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import { TestLibModule } from 'projects/test-lib/src/public-api';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AuthService } from './service/auth.service';
import { TiempoComponent } from './tiempo/tiempo.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AuthInterceptor } from './auth.interceptor';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    RelojComponent,
    CronometroComponent,
    LoginComponent,
    TiempoComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    TestLibModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    HttpClientModule,
    ScrollingModule,
    MatMenuModule
    
  ],
  providers: [AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
