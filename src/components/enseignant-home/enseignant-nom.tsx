import { Component, State } from '@stencil/core';

@Component({
    tag: 'enseignant-nom',
    styleUrl: 'enseignant-nom.scss'
})

export class EnseignantNom {

    @State() posts: any = "";
    @State() posts2: any = "";

    InputNom: HTMLInputElement;

    getens() {
        let url = 'http://api-dosispi.cleverapps.io/enseignants/nom/'
        let nom = this.InputNom.value;
        return fetch(url + nom)
            .then(response => response.json())
            .then(data => {
                this.posts = data;
                console.log(this.posts);
            });
    }

    
    getensbynum(num) {
        this.getens1();
        let url = 'http://api-dosispi.cleverapps.io/enseignants/'
        return fetch(url + num)
            .then(response => response.json())
            .then(data => {
                this.posts2 = data;
                console.log(this.posts2);
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
        //location.href='/enseignant/searchname';
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
                                        <input class="input is-large"  ref={(el: HTMLInputElement) => this.InputNom = el} type="search" placeholder="Entrer un Nom"/>
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
            )
        }
        else {
            return (
                <div>
                <div class="section center">
                <table class="table">
                <thead>
                    <tr>
                     <th>N° Enseignant</th>
                     <th>Nom Enseignant</th>
                     <th>Preno Enseignant</th>
                     <th>Email Enseignant</th>
                     <th></th>
                     </tr>
                </thead>
                <tbody>
                    {this.posts.map(
                        (pst) =>
                        <tr>
                        <td>{pst.noEnseignant}</td>
                        <td>{pst.nom}</td>
                        <td>{pst.prenom}</td>
                        <td>{pst.emailUbo}</td>
                        <a class="button is-info" onClick={() => this.getensbynum(pst.noEnseignant)} >Détails</a>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        <div class="center"><a class="button is-primary center is-medium" href="/enseignant/searchname" >Retour</a></div>

        <div class="modal" id="md">
        <div class="modal-background"></div>
		<div class="modal-content">
          <div class="card-content">
            <div class="content">
            <div class="message-header">
                <p id="p1">{this.posts[0].nom} &nbsp; {this.posts[0].prenom}</p>
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
                                <td class="has-text-centered">{this.posts[0].nom}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Prenom</td>
                                <td class="has-text-centered">{this.posts[0].prenom}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Sexe</td>
                                <td class="has-text-centered">{this.posts[0].sexe}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Mobile</td>
                                <td class="has-text-centered">{this.posts[0].mobile}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Telephone</td>
                                <td class="has-text-centered">{this.posts[0].telephone}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Email UBO</td>
                                <td class="has-text-centered">{this.posts[0].emailUbo}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Email</td>
                                <td class="has-text-centered">{this.posts[0].emailPerso}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Adresse</td>
                                <td class="has-text-centered">{this.posts[0].adresse}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Code postal</td>
                                <td class="has-text-centered">{this.posts[0].codePostal}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Ville</td>
                                <td class="has-text-centered">{this.posts[0].ville}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Pays</td>
                                <td class="has-text-centered">{this.posts[0].pays}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Type</td>
                                <td class="has-text-centered">{this.posts[0].type}</td>
                            </tr>
                            <tr>
                                <td class="has-text-centered">Ville</td>
                                <td class="has-text-centered">{this.posts[0].ville}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
		    <button class="button is-medium" id="showModal" onClick={() => this.getens2()}>Close</button>
		</div>
            </div>
          </div>
        </div>
            )
        }
    }
}