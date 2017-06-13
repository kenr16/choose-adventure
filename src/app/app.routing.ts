import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { DoorComponent } from './door/door.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RoomComponent
  },
  {
    path: 'door/:id',
    component: DoorComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
