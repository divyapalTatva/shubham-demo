import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "src/app/error/error.component";
import { AuthGuard } from "src/app/guard/auth.guard";
import { AddComponent } from "../add/add.component";
import { ListComponent } from "../list/list.component";

const routes:Routes=[
    // {path:'add',loadComponent:()=>import('../add/add-routing.module').then(m=>m.addroutingmodule)},
    {path:'add',component:ErrorComponent,canActivate:[AuthGuard]},
    // {path:'list',loadComponent:()=>import('../list/list-routing.module').then(m=>m.listroutingmodule)},
    {path:'list',component:ListComponent,canLoad:[AuthGuard]}
]

@NgModule({
    imports:[RouterModule.forRoot(routes),AuthGuard],
    exports:[RouterModule],
    providers:[AuthGuard]
})

export class buttonroutingmodule{}