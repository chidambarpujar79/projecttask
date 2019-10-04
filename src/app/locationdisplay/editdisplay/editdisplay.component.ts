import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
//import { Form } from './../formclass';
import { LocationdisplayComponent } from './../locationdisplay.component';
@Component({
  selector: 'app-editdisplay',
  templateUrl: './editdisplay.component.html',
  styleUrls: ['./editdisplay.component.css']
})
export class EditdisplayComponent implements OnInit {
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

  constructor(private _act:ActivatedRoute) { }

  ngOnInit() {
  }
  onEditProduct(f){}

}
