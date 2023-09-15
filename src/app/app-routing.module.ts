import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortoflioComponent } from './portoflio/portoflio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "" , redirectTo : "home",pathMatch:'full'},
  {path : "home" , component :HomeComponent},
  {path : "about" , component : AboutComponent},
  {path : "contacts" , component : ContactComponent},
  {path : "portofolio" , component : PortoflioComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
