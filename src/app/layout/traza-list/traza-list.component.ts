import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../service/auth.service';
//import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-traza-list',
  templateUrl: './traza-list.component.html',
  styleUrls: ['./traza-list.component.css']
})
export class TrazaListComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>()
  displayedColumns: string[] = ['email', 'fecha', 'url'];
  
  constructor(public appServiceInjector: AuthService) { }

  ngOnInit(): void {
    this.getTrazas()
  }

  getTrazas() {
  
    this.appServiceInjector.getTrazas()
    .subscribe(traza => {
      this.dataSource = new MatTableDataSource<any>(traza);
     // this.dataSource.data = traza;

      console.log("qwwwTRA",traza)
      });
  }
}
