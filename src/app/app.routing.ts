import { Routes, RouterModule } from "@angular/router";
import { EditdisplayComponent } from './locationdisplay/editdisplay/editdisplay.component';


const arr: Routes = [

   { path: "editdisplay", component:EditdisplayComponent}

   // {path: 'neweditcom', component: EditdisplayComponent},
];

export const routing = RouterModule.forRoot(arr);
