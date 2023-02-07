import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },

  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'structurebytype',
    loadChildren: () => import('./structurebytype/structurebytype.module').then( m => m.StructurebytypePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },


 
  {
    path: 'dash',
    loadChildren: () => import('./dash/dash.module').then( m => m.DashPageModule)
  },
  {
    path: 'popupaddtypestruct',
    loadChildren: () => import('./popupaddtypestruct/popupaddtypestruct.module').then( m => m.PopupaddtypestructPageModule)
  },
  {
    path: 'popupaddstruct',
    loadChildren: () => import('./popupaddstruct/popupaddstruct.module').then( m => m.PopupaddstructPageModule)
  },
  {
    path: 'forgatpwd',
    loadChildren: () => import('./forgatpwd/forgatpwd.module').then( m => m.ForgatpwdPageModule)
  },
  {
    path: 'valideagent/:id',
    loadChildren: () => import('./valideagent/valideagent.module').then( m => m.ValideagentPageModule)
  },
  {
    path: 'valideagentnext/:id/:iduser',
    loadChildren: () => import('./valideagentnext/valideagentnext.module').then( m => m.ValideagentnextPageModule)
  }
 
 
 
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
