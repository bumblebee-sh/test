import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserDataComponent } from './components/user-data/user-data.component';


const MATERIAL = [MatCardModule, MatButtonModule];

@NgModule({
  declarations: [UserComponent, UserDataComponent],
  imports: [
    CommonModule,
    ...MATERIAL,
    UserRoutingModule
  ]
})
export class UserModule { }
