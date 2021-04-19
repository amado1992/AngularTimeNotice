import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TrazaComponent } from './traza/traza.component';
import { TrazaListComponent } from './traza-list/traza-list.component';
import {MatTableModule} from '@angular/material/table'; 


@NgModule({
  declarations: [LayoutComponent, NoticiaComponent, TrazaComponent, TrazaListComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    HttpClientModule,
    ScrollingModule,
    MatTableModule
  ]
})
export class LayoutModule { }
