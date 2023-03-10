import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../guards/auth/auth-guard.service';

import { DashPage } from './dash.page';

const routes: Routes = [
  {
    path: '',
    component: DashPage,
    children:[
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      },
      {
        path: 'accueilagent',
        loadChildren: () => import('../accueilagent/accueilagent.module').then( m => m.AccueilagentPageModule),
       // canActivate:[AuthGuardService]

      },
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule),
       // canActivate:[AuthGuardService]

      },
      {
        path: 'declarations',
        loadChildren: () => import('../declarations/declarations.module').then( m => m.DeclarationsPageModule)
      },
      {
        path: 'connexion',
        loadChildren: () => import('../connexion/connexion.module').then( m => m.ConnexionPageModule)
      },
      {
        path: 'inscription',
        loadChildren: () => import('../inscription/inscription.module').then( m => m.InscriptionPageModule)
      },
      {
        path: 'allstructure',
        loadChildren: () => import('../allstructure/allstructure.module').then( m => m.AllstructurePageModule)
      },
      {
        path: 'aide',
        loadChildren: () => import('../aide/aide.module').then( m => m.AidePageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: 'structurebytype/:id',
        loadChildren: () => import('../structurebytype/structurebytype.module').then( m => m.StructurebytypePageModule)
      },
      {
        path: 'strucutures',
        loadChildren: () => import('../strucutures/strucutures.module').then( m => m.StrucuturesPageModule)
      },
      {
        path: 'addstructure',
        loadChildren: () => import('../addstructure/addstructure.module').then( m => m.AddstructurePageModule)
      },
      {
        path: 'structurebytype/:id/:type',
        loadChildren: () => import('../structurebytype/structurebytype.module').then( m => m.StructurebytypePageModule)
      },
      
      {
        path: 'Acten/:id',
        loadChildren: () => import('../acten/acten.module').then( m => m.ActenPageModule)
      },
      {
        path: 'Actem/:id',
        loadChildren: () => import('../actem/actem.module').then( m => m.ActemPageModule)
      },
      {
        path: 'Acted/:id',
        loadChildren: () => import('../acte-d/acte-d.module').then( m => m.ActeDPageModule)
      },
      {
        path: 'Casier/:id',
        loadChildren: () => import('../casier/casier.module').then( m => m.CasierPageModule)
      },
      {
        path: 'Residence/:id',
        loadChildren: () => import('../residence/residence.module').then( m => m.ResidencePageModule)
      },
      {
        path: 'Nationnalite/:id',
        loadChildren: () => import('../nationnalite/nationnalite.module').then( m => m.NationnalitePageModule)
      },
      {
        path: 'addstructure',
        loadChildren: () => import('../addstructure/addstructure.module').then( m => m.AddstructurePageModule)
      },
      {
        path: 'agenttest',
        loadChildren: () => import('../agenttest/agenttest.module').then( m => m.AgenttestPageModule)
      },
  {
    path: 'accueiladmin',
    loadChildren: () => import('../accueiladmin/accueiladmin.module').then( m => m.AccueiladminPageModule)
  }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashPageRoutingModule {}
