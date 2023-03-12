import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EssayprevPage } from '../essayprev/essayprev.page';
import { logi } from '../modeles/logi';
import { StockageeService } from '../services/StockageService';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username!:String;
  password!:String;
  f!: logi;
  data: any;
  d!: any;
  m!: boolean;
  h!:any
  message = 'This modal example uses the modalController to present and dismiss modals.';
  o: any;
  constructor(public modalController: ModalController,  private http:HttpClient, private build:FormBuilder,private tokenserv:StockageeService,private route:Router) { }

  ngOnInit() {
    this.data=new FormData();

  }
  onSubmit(){
    this.f= new logi(this.username,this.password);
    console.log(this.f.username),
    console.log(this.f.password),
    
      this.data.append("username",this.username);
      this.data.append("password",this.password);
      
 
     this.http.post('http://localhost:8080/login',this.data)
     .subscribe( datee=>{console.log(datee)
       this.h=this.username;
       this.d=datee;
       localStorage.removeItem(JSON.stringify(datee))
       localStorage.removeItem(this.h)
       localStorage.setItem('token',JSON.stringify(datee))
     localStorage.setItem('username',this.h)
    
     this.m=this.tokenserv.islogged();
     console.log(this.m)
     if(this.m==true){
      console.log("le mmmmmm")
      console.log(localStorage.getItem('token'))
      this.tokenserv.trouverparnomlerole(localStorage.getItem('username')).subscribe(async (dat: any)=>{
        console.log(" sa valeurrrrrrrrrr")
        console.log(dat)
        if(dat.rolename==="jury"){
          this.tokenserv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

          console.log(this.o)
          localStorage.removeItem('role')
          localStorage.setItem('role',dat.rolename)
          this.tokenserv.recherchelasoutenancequiacommencere(this.o).subscribe(data=>{
            console.log("le dataaaaaaaaaaaaaaaaa")
            console.log(data)
            if(data===true){
              this.route.navigate(['/prev2'])

            }
            else {
            this.route.navigate(['/essayprev']) }

          })})

        
        }
        else if(dat.rolename==="etudiant"){
          localStorage.removeItem('role')
          localStorage.setItem('role',dat.rolename)
                  this.route.navigate(['/tabs/accueilpouretudiant'])
                 
        }
        else{
          alert("erreur")
        }
      })
        //this.route.navigate(['/essayprev'])
        //this.presentModal();
        
     }
     else{
        console.log('erreur dans la navigation')
     }
     },
     err=>{
       this.m=this.tokenserv.islogged();
       if(this.m==true){
         // this.route.navigate(['/accueil'])
         console.log('erreur qui ne passe pas')
       }
       else{
         console.log('erreur trop grave')
       }
     }
     )
   }
  
  
}
