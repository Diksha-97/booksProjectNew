import { LayoutModule } from './layout/layout/layout.module';
import { LoginModule } from './pages/login/login.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {path:'login',loadChildren:()=>import ('./pages/login/login.module').then(m=>m.LoginModule)},
    {path:'',loadChildren:()=>import ('./layout/layout/layout.module').then(m=>m.LayoutModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
