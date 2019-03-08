import { Component, State } from '@stencil/core';

@Component({
    tag: 'formation-nom',
    styleUrl: 'formation-nom.scss'
})

export class FormationNom {

    @State() posts: any = "";

    InputNom: HTMLInputElement;

    getens() {
        let url = 'http://api-dosispi.cleverapps.io/formations/nom/'
        let nom = this.InputNom.value;
        return fetch(url + nom)
            .then(response => response.json())
            .then(data => {
                this.posts = data;
                console.log(this.posts);
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
    getens1() {
        let t1 = document.getElementById("md");
        t1.classList.toggle("is-active");
    }
    getens2() {
        let t1 = document.getElementById("md");
        t1.classList.remove("is-active");
        location.href = '/enseignant/searchname';
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
                                                <input class="input is-large" ref={(el: HTMLInputElement) => this.InputNom = el} type="search" placeholder="Entrer un Nom de formation" />
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
                <div class="modal is-active" id="md">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <div class="card-content">
                            <div class="content">
                                <div class="message-header">
                                    <p id="p1">{this.posts[0].nomFormation}</p>
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
                                            <td class="has-text-centered">{this.posts[0].nomFormation}</td>
                                        </tr>
                                        <tr>
                                            <td class="has-text-centered">Début accréditation</td>
                                            <td class="has-text-centered">{this.posts[0].debutAccreditation}</td>
                                        </tr>
                                        <tr>
                                            <td class="has-text-centered">Fin accréditation</td>
                                            <td class="has-text-centered">{this.posts[0].finAccreditation}</td>
                                        </tr>
                                        <tr>
                                            <td class="has-text-centered">Diplome</td>
                                            <td class="has-text-centered">{this.posts[0].diplome}</td>
                                        </tr>
                                        <tr>
                                            <td class="has-text-centered">Double Diplome</td>
                                            <td class="has-text-centered">{this.posts[0].doubleDiplome}</td>
                                        </tr>
                                        <tr>
                                            <td class="has-text-centered">Nombre d'année</td>
                                            <td class="has-text-centered">{this.posts[0].n0Annee}</td>
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