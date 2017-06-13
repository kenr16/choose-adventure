import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { DoorComponent } from './door/door.component';
import { StairsComponent } from './stairs/stairs.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RoomComponent
  },
  {
    path: 'door/:id',
    component: DoorComponent
  },
  {
    path: 'stairs/:id',
    component: StairsComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
