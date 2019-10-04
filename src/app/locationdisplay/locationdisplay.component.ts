import { Component, OnInit } from '@angular/core';
import { Form } from "./formclass";
import { Router } from '@angular/router';

@Component({
  selector: 'app-locationdisplay',
  templateUrl: './locationdisplay.component.html',
  styleUrls: ['./locationdisplay.component.css']
})
export class LocationdisplayComponent implements OnInit {

  Name: string="";
  Dec: string="";
  Address: string="";
 City: string="";
  State: string="";
  Zip: string="";
  Country: string="";
  Phone: string="";
  Phone2: string="";
  Fax: string="";
  Website: string="";

   arr:Form[]=[
     new Form("1","offshoredep","39 pipline","bangalor","kar","560086","india","080-614586","1234567898","","www.com"),
     new Form("2","offshoredep","39 pipline","bangalor","kar","560086","india","080-614586","1234567898","","www.com"),
     new Form("3","offshoredep","39 pipline","bangalor","kar","560086","india","080-614586","1234567898","","www.com")
   ];
 router: any;
 constructor(private _router:Router) { }


 ngOnInit() {
 }

 deleteTask(item1:Form){
 console.log(item1);

 this.arr.splice(this.arr.indexOf(item1),1);
}
onEditTaskClick(item:Form){

 this.router.navigate(['editdisplay']);

}
}
