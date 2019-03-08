import { Component, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'formation-add',
  styleUrl: 'formation-add.scss'
})

export class FormationAdd {

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;
  @State() posts: any = "";

  InputCode: HTMLInputElement;
  InputNom: HTMLInputElement;
  InputDebutAccreditation: HTMLInputElement;
  InputFinAccreditation: HTMLInputElement;
  InputDiplome: HTMLInputElement;
  InputDoubleDiplome: HTMLInputElement;
  InputNombreAnnee: HTMLInputElement;

  createEns() {
    return fetch('http://api-dosispi.cleverapps.io/formations', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codeFormation: this.InputCode.value,
        nomFormation: this.InputNom.value,
        finAccreditation: this.InputDebutAccreditation.value,
        debutAccreditation: this.InputFinAccreditation.value,
        diplome: this.InputDiplome.value,
        n0Annee: this.InputNombreAnnee.value,
        doubleDiplome: this.InputDoubleDiplome.value,
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        alert(' ok ! ajouter avec succès !');
        console.log(this.InputNom.value);
       location.href='/formation';
        return responseJson.movies;
      })
      .catch((error) => {
        alert(' Error ! please retry !! ');
        console.error(error);
      });
  }

  handleSubmit = (ev: Event) => {
    ev.preventDefault();
    this.createEns();
  }

  render() {
    return (
      <section class="sc1">
        <div id="flow">
          <span class="flow-1"></span>
          <span class="flow-2"></span>
          <span class="flow-3"></span>
        </div>
        <div class="hero-body">
          <div class="container center">
            <h1 class="title is-1">Forumlaire d'ajout</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <div class="columns is-multiline is-mobile">
          <input type="text" ref={(el: HTMLInputElement) => this.InputCode = el} placeholder="Code formation" class="input is-medium is-primary is-rounded" required />
            <div class="column is-half">
              <input type="text" ref={(el: HTMLInputElement) => this.InputNom = el} placeholder="Nom formation" class="input is-medium is-primary is-rounded" required />
              <br></br><br></br>
              <input type="text" ref={(el: HTMLInputElement) => this.InputDebutAccreditation = el} placeholder="Début accréditation" class="input is-medium is-primary is-rounded" required />
              <br></br><br></br>
              <input type="text" ref={(el: HTMLInputElement) => this.InputFinAccreditation = el} placeholder="Fin accréditation" class="input is-medium is-primary is-rounded" required />
              <br></br><br></br>
            </div>
            <div class="column is-half">
              <div title="This is my tooltip">
                <div class="select is-medium is-primary is-rounded is-fullwidth">
                  <select onInput={(e: any) => (this.InputDiplome = e.target)}  required>
                    <option value="">Selectionner un Diplome</option>
                    <option value="L" >Licence</option>
                    <option value="M" >Master</option>
                    <option value="D" >Doctorat</option>
                  </select>
                  <br></br>
                  <select onInput={(e: any) => (this.InputDoubleDiplome = e.target)}  required>
                    <option value="">Double diplome ?</option>
                    <option value="O" >Oui</option>
                    <option value="N" >Non</option>
                  </select>
                  <br></br>
                  <input type="text" ref={(el: HTMLInputElement) => this.InputNombreAnnee = el} placeholder="Nombre d'année" class="input is-medium is-primary is-rounded" required />
                </div>
              </div>
              <br></br><br></br>
            </div>
          </div>
          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <button class="button is-black is-medium ">Ajouter</button>
            </p>
            <p class="control">
              <button type="reset" value="Vider les champs" class="button is-light is-medium"> Vider les Champs </button>
            </p>
          </div>
          <br></br>
        </form>
      </section>
    );
  }
}