import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SenseData } from 'src/app/interfaces/interface1';
import { jsonData } from 'src/app/interfaces/interface2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {


  dataSource1 = jsonData;
  dataSource:any;
  searchText: any;
  searchText1: any;
  isLoading = true;

  totalNo: any = 12;
  totalHr: any = 12;
  constructor(private _location: Location, private datePipe: DatePipe, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      console.log("Refreshing after 5 sec.");
      this.dataSource = this.dataSource1;
      this.searchText = this.datePipe.transform(new Date(), 'longDate');
      this.isLoading = false;
    }, 1000);
  }
  dateFormat() {
    this.dataSource = null;
    this.isLoading = true;
    setTimeout(() => {
      console.log("Refreshing after 5 sec.");
      this.dataSource = this.dataSource1;
      this.searchText = this.datePipe.transform(this.searchText1, 'longDate');
      this.isLoading = false;
    }, 1000);
  }

  back() {
    console.log("Nice");
    this._location.back();
  }

  logOut() {
    this.router.navigate(["/login"]);
  }

  refresh() {

  }

}
