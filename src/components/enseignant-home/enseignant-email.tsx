import { Component, State } from '@stencil/core';

@Component({
    tag: 'enseignant-email',
    styleUrl: 'enseignant-email.scss'
})

export class EnseignantEmail {

    @State() posts: any = "";

    InputEmail: HTMLInputElement;

    getens() {
        let url = 'http://api-dosispi.cleverapps.io/enseignants/emailUbo/'
        let email = this.InputEmail.value;
        return fetch(url + email)
            .then(response => response.json())
            .then(data => {
                this.posts = data;
                console.log(this.posts);
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
    getens1(){
        let t1 = document.getElementById("md");
        t1.classList.toggle("is-active");
    }
    getens2(){
        let t1 = document.getElementById("md");
        t1.classList.remove("is-active");
        location.href='/enseignant/searchemail';
        //t1.classList.toggle("is-clipped ");
    }

    render() {
        if (this.posts == "") {
            return (
            <div>
                <br></br>
            <div class="hero is-info">
                <div class="hero-body">
                    <div class="container">
                        <div class="card">
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large"  ref={(el: HTMLInputElement) => this.InputEmail = el} type="search" placeholder="Entrer un Email"/>
                                        <span class="icon is-medium is-left">
                                            <i class="fa fa-search"></i>
                                        </span>
                                        <span class="icon is-medium is-right">
                                            <i class="fa fa-empire"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="control">
                            <button class="button is-light is-large is-fullwidth" onClick={() => this.getens()}>Search</button>
                        </div>
                    </div>
                </div>
               
            </div>
            <br></br>
            <progress class="progress is-large is-info" max="100">60%</progress>
            </div>
                /*
                <div class="center">
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input is-medium" ref={(el: HTMLInputElement) => this.InputNom = el} type="text" placeholder="nom de l'enseignant" />
                        </div>
                        <div class="control">
                            <button class="button is-info is-medium" onClick={() => this.getens()}>Search</button>
                        </div>
                    </div>
                </div>*/
            )
        }
        else {
            return (

                /*
                <div class="center">
                    <div class="field">
                        <label class="label">Nom</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].nom} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Prenom</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].prenom} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].email} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email Ubo</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].emailUbo} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Type</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].type} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Sexe</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].sexe} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Mobile</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].mobile} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Téléphone</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].telephone} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Pays</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].pays} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Ville</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].ville} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Code Postal</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].codePostal} disabled></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Adresse</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" value={this.posts[0].adresse} disabled></input>
                        </div>
                    </div>
                    <p class="control">
                        <button class="button is-primary">Retour</button>
                    </p>
                </div>
                */
        <div class="modal is-active" id="md">
        <div class="modal-background"></div>
		<div class="modal-content">
          <div class="card-content">
            <div class="content">
            <div class="message-header">
                <p id="p1">{this.posts.nom} &nbsp; {this.posts.prenom}</p>
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
                                <td class="has-text-centered">{this.posts.nom}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Prenom</td>
                                <td class="has-text-centered">{this.posts.prenom}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Sexe</td>
                                <td class="has-text-centered">{this.posts.sexe}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Mobile</td>
                                <td class="has-text-centered">{this.posts.mobile}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Telephone</td>
                                <td class="has-text-centered">{this.posts.telephone}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Email UBO</td>
                                <td class="has-text-centered">{this.posts.emailUbo}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Email</td>
                                <td class="has-text-centered">{this.posts.emailPerso}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Adresse</td>
                                <td class="has-text-centered">{this.posts.adresse}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Code postal</td>
                                <td class="has-text-centered">{this.posts.codePostal}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Ville</td>
                                <td class="has-text-centered">{this.posts.ville}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Pays</td>
                                <td class="has-text-centered">{this.posts.pays}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Type</td>
                                <td class="has-text-centered">{this.posts.type}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    </div>
		    <button class="button is-medium" id="showModal" onClick={() => this.getens2()}>Close</button>
		</div>
            </div>
          </div>
        
            )
        }
    }
}