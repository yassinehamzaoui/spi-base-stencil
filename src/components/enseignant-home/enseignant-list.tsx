import { Component, State } from '@stencil/core';

@Component({
    tag: "enseignant-list",
    styleUrl: "enseignant-list.scss"
})
export class enseignant {
    
    @State() posts: any = "";
    @State() posts2: any ="";

    componentWillLoad() {
        return fetch('http://api-dosispi.cleverapps.io/enseignants')
        .then(response => response.json())
        .then(data => {
        this.posts = data;
        console.log(this.posts)
        });
        }

        componentDidLoad() {
            this.modifyselection();
        }

    modifyselection( ) {   
        let rows = document.getElementsByTagName('tr');
        for (var i = 1; i < rows.length; i++) {
            let element = rows[i];
            element.onmouseover = () => element.classList.toggle('is-selected');
            element.onmouseout = () => element.classList.toggle('is-selected');
        }
    }

    deletefnct(pst){
        let url='http://api-dosispi.cleverapps.io/enseignants'
        return fetch((url),{
        method:'DELETE',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pst),
          }).then(() => {alert("Deleted !!");
          location.href='/enseignant';
        }).catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);
          });
    }

    
    getensbynum(num) {
        this.getens();
        let url = 'http://api-dosispi.cleverapps.io/enseignants/'
        return fetch(url + num)
            .then(response => response.json())
            .then(data => {
                this.posts2 = data;
                console.log(this.posts2);
            });
        
    }

    getens(){
        let t1 = document.getElementById("md");
        t1.classList.toggle("is-active");
    }
    getens2(){
        let t1 = document.getElementById("md");
        t1.classList.remove("is-active");
        //t1.classList.toggle("is-clipped ");
    }

    render() {
        return (
    <section class="container">
    <br></br>
      <div class="columns features">
      <div class="columns is-desktop is-multiline">
      {this.posts.map(
                    (pst) =>
        <div class="column is-3">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://i.ytimg.com/vi/kmzQqUllPNQ/maxresdefault.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2"/>
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>{pst.nom} &nbsp; {pst.prenom}</h4>
                <p>{pst.emailUbo}</p>
                <div class="field is-grouped">
                <p class="control">        
               <a class="button is-link" id="showModal"  onClick={() => this.getensbynum(pst.noEnseignant)}>Détails</a>
                </p>
                <p class="control">
                    <a class="button is-danger" onClick={() => this.deletefnct(pst)}>Supprimer</a>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
        <div class="modal" id="md">
        <div class="modal-background"></div>
		<div class="modal-content">
          <div class="card-content">
            <div class="content">
            <div class="message-header">
                <p id="p1">{this.posts2.nom} &nbsp; {this.posts2.prenom}</p>
            </div>
                    <table class="table is-responsive is-striped is-bordered ">
                        <thead>
                            <tr>
                                <th class="has-text-centered is-info is-bordered">Champs</th>
                                <th class="has-text-centered is-info is-bordered">Détails</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="has-text-centered">Nom</td>
                                <td class="has-text-centered">{this.posts2.nom}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Prenom</td>
                                <td class="has-text-centered">{this.posts2.prenom}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Sexe</td>
                                <td class="has-text-centered">{this.posts2.sexe}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Mobile</td>
                                <td class="has-text-centered">{this.posts2.mobile}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Telephone</td>
                                <td class="has-text-centered">{this.posts2.telephone}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Email UBO</td>
                                <td class="has-text-centered">{this.posts2.emailUbo}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Email</td>
                                <td class="has-text-centered">{this.posts2.emailPerso}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Adresse</td>
                                <td class="has-text-centered">{this.posts2.adresse}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Code postal</td>
                                <td class="has-text-centered">{this.posts2.codePostal}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Ville</td>
                                <td class="has-text-centered">{this.posts2.ville}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Pays</td>
                                <td class="has-text-centered">{this.posts2.pays}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Type</td>
                                <td class="has-text-centered">{this.posts2.type}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Ville</td>
                                <td class="has-text-centered">{this.posts2.ville}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
          </div>
        </div>
		    <button class="button" id="showModal" onClick={() => this.getens2()}>Close</button>
		</div>
   </div>
    </div>
</section>
        );
    }
}