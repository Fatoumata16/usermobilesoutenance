import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'premiere',
    loadChildren: () => import('./premiere/premiere.module').then( m => m.PremierePageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profil/:id',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'accueiladmin',
    loadChildren: () => import('./accueiladmin/accueiladmin.module').then( m => m.AccueiladminPageModule)
  },
  {
    path: 'etudiant',
    loadChildren: () => import('./etudiant/etudiant.module').then( m => m.EtudiantPageModule)
  },
  {
    path: 'vraiaccueil',
    loadChildren: () => import('./vraiaccueil/vraiaccueil.module').then( m => m.VraiaccueilPageModule)
  },
  {
    path: 'essay',
    loadChildren: () => import('./essay/essay.module').then( m => m.EssayPageModule)
  },
  {
    path: 'accueiljury',
    loadChildren: () => import('./accueiljury/accueiljury.module').then( m => m.AccueiljuryPageModule)
  },
  {
    path: 'accueilv',
    loadChildren: () => import('./accueilv/accueilv.module').then( m => m.AccueilvPageModule)
  },
  {
    path: 'modalpage',
    loadChildren: () => import('./modalpage/modalpage.module').then( m => m.ModalpagePageModule)
  },
  {
    path: 'resultat',
    loadChildren: () => import('./resultat/resultat.module').then( m => m.ResultatPageModule)
  },
  {
    path: 'acc',
    loadChildren: () => import('./acc/acc.module').then( m => m.AccPageModule)
  },
  {
    path: 'vote',
    loadChildren: () => import('./vote/vote.module').then( m => m.VotePageModule)
  },
  {
    path: 'pagevote/:id',
    loadChildren: () => import('./pagevote/pagevote.module').then( m => m.PagevotePageModule)
  },
  {
    path: 'bravo/:id',
    loadChildren: () => import('./bravo/bravo.module').then( m => m.BravoPageModule)
  },
  {
    path: 'previous',
    loadChildren: () => import('./previous/previous.module').then( m => m.PreviousPageModule)
  },
  {
    path: 'prev2',
    loadChildren: () => import('./prev2/prev2.module').then( m => m.Prev2PageModule) 
  },
  {
    path: 'evaluation/:id',
    loadChildren: () => import('./evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },
  {
    path: 'profil2',
    loadChildren: () => import('./profil2/profil2.module').then( m => m.Profil2PageModule)
  },
  {
    path: 'prev3',
    loadChildren: () => import('./prev3/prev3.module').then( m => m.Prev3PageModule)
  },
  {
    path: 'resultat2',
    loadChildren: () => import('./resultat2/resultat2.module').then( m => m.Resultat2PageModule)
  },
  {
    path: 'resultatetudiant',
    loadChildren: () => import('./resultatetudiant/resultatetudiant.module').then( m => m.ResultatetudiantPageModule)
  },
  {
    path: 'vote2',
    loadChildren: () => import('./vote2/vote2.module').then( m => m.Vote2PageModule)
  },
  {
    path: 'essayprev',
    loadChildren: () => import('./essayprev/essayprev.module').then( m => m.EssayprevPageModule)
  },
  {
    path: 'prev4',
    loadChildren: () => import('./prev4/prev4.module').then( m => m.Prev4PageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./historique/historique.module').then( m => m.HistoriquePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'mes2',
    loadChildren: () => import('./mes2/mes2.module').then( m => m.Mes2PageModule)
  },
  {
    path: 'votejury/:id',
    loadChildren: () => import('./votejury/votejury.module').then( m => m.VotejuryPageModule)
  },
  {
    path: 'votevalider/:id',
    loadChildren: () => import('./votevalider/votevalider.module').then( m => m.VotevaliderPageModule)
  },
  {
    path: 'resultatvrai1',
    loadChildren: () => import('./resultatvrai1/resultatvrai1.module').then( m => m.Resultatvrai1PageModule)
  },
  {
    path: 'voirmoyenne',
    loadChildren: () => import('./voirmoyenne/voirmoyenne.module').then( m => m.VoirmoyennePageModule)
  },
  {
    path: 'accueilpouretudiant',
    loadChildren: () => import('./accueilpouretudiant/accueilpouretudiant.module').then( m => m.AccueilpouretudiantPageModule)
  },
  {
    path: 'votejury2/:id',
    loadChildren: () => import('./votejury2/votejury2.module').then( m => m.Votejury2PageModule)
  },
  {
    path: 'voirmoyenne2',
    loadChildren: () => import('./voirmoyenne2/voirmoyenne2.module').then( m => m.Voirmoyenne2PageModule)
  },
  {
    path: 'essayprevencore2',
    loadChildren: () => import('./essayprevencore2/essayprevencore2.module').then( m => m.Essayprevencore2PageModule)
  },
  {
    path: 'loginvrai/:id',
    loadChildren: () => import('./loginvrai/loginvrai.module').then( m => m.LoginvraiPageModule)
  },
  {
    path: 'erreurr',
    loadChildren: () => import('./erreurr/erreurr.module').then( m => m.ErreurrPageModule)
  },
  {
    path: 'profiljury',
    loadChildren: () => import('./profiljury/profiljury.module').then( m => m.ProfiljuryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
