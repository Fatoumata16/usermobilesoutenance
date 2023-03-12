import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { catchError, Observable, of } from "rxjs"

@Injectable({
    providedIn: 'root'
  })
  export class StockageeService {
     h!:number
message: any
    constructor( private http:HttpClient) { }
    svetoken(token:string):void{
      localStorage.removeItem(token)
       localStorage.setItem('token',token)
  
    }
    islogged():boolean{
      const token=localStorage.getItem('token')
      console.log(token)
      return !! token
    }
    gettoken(): string | null{
      return localStorage.getItem('token')
    }
    promotionrecentparrapportaformation( n:string):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/ladate/${n}`)
    }
    toutetudiantparrapportapromotion( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/lalisteeee/${n}`)
    }
    toutformation():Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/lalistedesformation`)
    }
    // ajoutcommentaire(id:string,u:string,com:Commentaires):Observable<any>{
    //   return this.http.post<any>(`http://localhost:8080/creatione/${id}/${u}`,com)
    // }
    // ajoutregion(id:string,u:string,o:number,h:string,f:any):Observable<any>{
    //   return this.http.post<any>(`http://localhost:8080/creationn/${id}/${u}${o}/${h}`,f)
    // }

    promotion( n:number):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/ladate/${n}`)
    }

    infoetudiant( n:number):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/infoetud/${n}`)
    }

    infocritere( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/infocritere/${n}`)
    }
   
     ajoutnote(id:number,commentaire:string,etudiant:number,jury:number,critere:number):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/creationvote/${id}/${commentaire}/${etudiant}/${jury}/${critere}`,null)
     }
     etatetudiant( n:number):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/etatetudiant/${n}`)
    }
    moyennecritere( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/infomoyennecretere/${n}`)
    }
             
    etudiantordonneeparpromotionnote( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/infomoyenneordonneedese/${n}`)
    }
      
    noteetudiantparid( n:number):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/infomoyenneetudiant/${n}`)
    }
    soutenanceactuelquiacommence( n:any):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/lasoutenancequiacommencere/${n}`)
    }

    soutenanceactuelquiacommenceetetudiantlu( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/lasoutenancequiacommencereouetudiantlu/${n}`)
    }
    historiquesoutenance( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/historiquesoutenance/${n}`)
    }
    ladureequireste(n: number): Observable<any> {
      return this.http.get(`http://localhost:8080/jural/${n}`).pipe(
        catchError((error) => {
          if (error.status === 404) {
            return of('Pas de soutenance prévue');
          } else {
            throw error;
          }
        })
      );
    }
    autrecalculeetudiant( n:number):Observable<string>{
      return this.http.get<any>(`http://localhost:8080/resultatautrecalcule/${n}`)
    }
    ajoutnotee(id:boolean,commentaire:string,etudiant:number,jury:number,critere:number):Observable<any>{
      return this.http.post<any>(`http://localhost:8080/creationa/${id}/${commentaire}/${etudiant}/${jury}/${critere}`,null)
       }

       trouverutilisateurparnom(m:any):any{
      return  this.http.get<any>(`http://localhost:8080/trouverparnom/${m}`)
      }
      trouverparnomlerole(m:any):any{
        return  this.http.get<any>(`http://localhost:8080/trouverparnomlerole/${m}`)
        }
    
      soutenanceactuelstatut( n:any):Observable<boolean>{
        return this.http.get<boolean>(`http://localhost:8080/soutenanceactuelstatut/${n}`)
      }
      soutenanceactuelstatuts( n:any):Observable<boolean>{
        return this.http.get<boolean>(`http://localhost:8080/soutenanceactuelstatutts/${n}`)
      }

      trouverutilisateurparnomn():any{
        return  this.http.get<any>(`http://localhost:8080/trouverparnom/${localStorage.getItem('username')}`)
        }
        resultatetudiantvalideroupas(etudiantid:number):any{
          return  this.http.get<any>(`http://localhost:8080/student/${etudiantid}`)
          }
          resultatautreetudint( n:number):Observable<any[]>{
            return this.http.get<any[]>(`http://localhost:8080/resultatssst/${n}`)
          }  
          soutenancestatutpourunetudiant( n:any):Observable<boolean>{
            return this.http.get<boolean>(`http://localhost:8080/soutenancestatutpourunetudiant/${n}`)
          }
          soutenancesidpourunetudiant( n:any):Observable<any>{
            return this.http.get<boolean>(`http://localhost:8080/soutenancesidpourunetudiant/${n}`)
          } 
          listeetudiantparsoutenance( n:number):Observable<any[]>{
            return this.http.get<any[]>(`http://localhost:8080/listeetudiantparsoutenance/${n}`)
          }  
          messagesend( o:string , n:string):Observable<any[]>{
            return this.http.get<any[]>(`http://localhost:8080/${o}/${n}`)
          } 
          etudiantlisteparpromotion(  n:any):Observable<any[]>{
            return this.http.get<any[]>(`http://localhost:8080/etudiantlisteparpromotion/${n}`)
          } 

          recherchelasoutenancequiacommencere( n:any):Observable<boolean>{
            return this.http.get<boolean>(`http://localhost:8080/recherchelasoutenancequiacommencere/${n}`)
          }

          
          lesjurysparrappor( n:any):Observable<any>{
            return this.http.get<any>(`http://localhost:8080/lesjurysparrappor/${n}`)
          }

          lesjuryspar( n:any):Observable<any>{
            return this.http.get<any>(`http://localhost:8080/lesjuryspar/${n}`)
          }

          lesjurysparrapportaetudiantlu( n:any):Observable<any>{
            return this.http.get<any>(`http://localhost:8080/lesjurysparrapportaetudiantlu/${n}`)
          }
          listehisto(  n:any):Observable<any[]>{
            return this.http.get<any[]>(`http://localhost:8080/listehisto/${n}`)
          } 
          listeetudiantparsoutenanceautre(  n:any):Observable<any[]>{
            return this.http.get<any[]>(`http://localhost:8080/listeetudiantparsoutenanceautre/${n}`)
          } 
          liste5meilleuretudiant( ):Observable<any[]>{
            return this.http.get<any[]>(`http://localhost:8080/listemeilleuretudiant`)
          } 
          etudiantresultatsoutenance( id:any):Observable<boolean>{
            return this.http.get<boolean>(`http://localhost:8080/etudiantresultatsoutenance/${id}`)
          } 
          etudiantparid( id:any):Observable<any>{
            return this.http.get<any>(`http://localhost:8080/etudiantparid/${id}`)
          } 
          etudianttatutchanger( id:any):Observable<any>{
            return this.http.get<any>(`http://localhost:8080/etudianttatutchanger/${id}`)
          } 
          juryparnom( id:any):Observable<any>{
            return this.http.get<any>(`http://localhost:8080/juryparnom/${id}`)
          } 
  }