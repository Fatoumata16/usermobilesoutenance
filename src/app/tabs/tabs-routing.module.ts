import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
    loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule),canActivate:[AuthGuard]
   },
      {
        path: 'resultatetudiant',
        loadChildren: () => import('../resultatetudiant/resultatetudiant.module').then( m => m.ResultatetudiantPageModule)
     },
     {
      path: 'resultatvrai1',
      loadChildren: () => import('../resultatvrai1/resultatvrai1.module').then( m => m.Resultatvrai1PageModule)
    },
     {
      path: 'accueilpouretudiant',
      loadChildren: () => import('../accueilpouretudiant/accueilpouretudiant.module').then( m => m.AccueilpouretudiantPageModule)
    },
      {
        path: 'etudiant',
    loadChildren: () => import('../etudiant/etudiant.module').then( m => m.EtudiantPageModule)
 },
 {
  path: 'profiljury',
  loadChildren: () => import('../profiljury/profiljury.module').then( m => m.ProfiljuryPageModule)
},
 {
  path: 'erreurr',
  loadChildren: () => import('../erreurr/erreurr.module').then( m => m.ErreurrPageModule)
},
  {
    path: 'evaluation',
loadChildren: () => import('../evaluation/evaluation.module').then( m => m.EvaluationPageModule)
},
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
