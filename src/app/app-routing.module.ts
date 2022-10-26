import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { TailwindComponent } from './tailwind/tailwind.component';
import { MaterializeComponent } from './materialize/materialize.component';


const routes: Routes = [
    // Bindings
    {path: '', component: BootstrapComponent},
    {path: 'tailwind', component: TailwindComponent},
    {path: 'materialize', component: MaterializeComponent}
  ];
  

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
  