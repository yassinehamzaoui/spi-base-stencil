import { Component, State } from '@stencil/core';

@Component({
    tag: "formation-list",
    styleUrl: "formation-list.scss"
})
export class FormationList {

    @State() posts: any = "";
    @State() posts2: any = "";

    componentWillLoad() {
        return fetch('http://api-dosispi.cleverapps.io/formations')
            .then(response => response.json())
            .then(data => {
                this.posts = data;
                console.log(this.posts)
            });
    }

    componentDidLoad() {
        this.modifyselection();
    }

    modifyselection() {
        let rows = document.getElementsByTagName('tr');
        for (var i = 1; i < rows.length; i++) {
            let element = rows[i];
            element.onmouseover = () => element.classList.toggle('is-selected');
            element.onmouseout = () => element.classList.toggle('is-selected');
        }
    }

    deletefnct(pst) {
        let url = 'http://api-dosispi.cleverapps.io/formations/'
        let code = pst.codeFormation;
        return fetch((url + code), {
            method: 'DELETE', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pst),
        }).then(() => {
            alert("Deleted !!");
            location.href = '/formation';
        }).catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);
        });
    }


    getensbynum(num) {
        this.getens();
        let url = 'http://api-dosispi.cleverapps.io/formations/'
        return fetch(url + num)
            .then(response => response.json())
            .then(data => {
                this.posts2 = data;
                console.log(this.posts2);
            });

    }

    getens() {
        let t1 = document.getElementById("md");
        t1.classList.toggle("is-active");
    }
    getens2() {
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
                                                <img src="https://i.ytimg.com/vi/kmzQqUllPNQ/maxresdefault.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            <div class="content">
                                                <h4>{pst.nomFormation}</h4>
                                                <p>Nombre d'année : {pst.n0Annee}</p>
                                                <div class="field is-grouped">
                                                    <p class="control">
                                                        <a class="button is-link" id="showModal" onClick={() => this.getensbynum(pst.codeFormation)}>Détails</a>
                                                    </p>
                                                    <p class="control">
                                                        <a class="button is-danger" onClick={() => this.deletefnct(pst)}>Supprimer</a>
                                                    </p>
                                                    <p class="control">
                                                        <a class="button is-warning" href={"/formation/update/"+pst.codeFormation}>Modifier</a>
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
                                            <p id="p1">{this.posts2.nomFormation}</p>
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
                                                    <td class="has-text-centered">Nom formation</td>
                                                    <td class="has-text-centered">{this.posts2.nomFormation}</td>
                                                </tr>
                                                <tr>
                                                    <td class="has-text-centered">Début accréditation</td>
                                                    <td class="has-text-centered">{this.posts2.debutAccreditation}</td>
                                                </tr>
                                                <tr>
                                                    <td class="has-text-centered">Fin accréditation</td>
                                                    <td class="has-text-centered">{this.posts2.finAccreditation}</td>
                                                </tr>
                                                <tr>
                                                    <td class="has-text-centered">Diplome</td>
                                                    <td class="has-text-centered">{this.posts2.diplome}</td>
                                                </tr>
                                                <tr>
                                                    <td class="has-text-centered">Double Diplome</td>
                                                    <td class="has-text-centered">{this.posts2.doubleDiplome}</td>
                                                </tr>
                                                <tr>
                                                    <td class="has-text-centered">Nombre d'année</td>
                                                    <td class="has-text-centered">{this.posts2.n0Annee}</td>
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