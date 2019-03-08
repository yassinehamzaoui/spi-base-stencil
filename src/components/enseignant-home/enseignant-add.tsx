import { Component, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
    tag: 'enseignant-add',
    styleUrl: 'enseignant-add.scss'
})

export class EnseignantAdd {
        
    @Prop() match: MatchResults;
    @Prop() history : RouterHistory;
    @State() posts: any = "";

    InputNom: HTMLInputElement;
    InputPrenom: HTMLInputElement;
    InputSexe: HTMLInputElement;
    InputEmailUbo: HTMLInputElement;
    InputEmailPerso: HTMLInputElement;
    InputMobile: HTMLInputElement;
    InputTelephone: HTMLInputElement;
    InputPays: HTMLInputElement;
    InputVille: HTMLInputElement;
    InputAdresse: HTMLInputElement;
    InputCodePostal: HTMLInputElement;
    InputType: HTMLInputElement;

createEns() {
    return fetch('http://api-dosispi.cleverapps.io/enseignants', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          nom:  this.InputNom.value,
          prenom: this.InputPrenom.value,
          sexe: this.InputSexe.value,
          emailUbo: this.InputEmailUbo.value,
          emailPerso: this.InputEmailPerso.value,
          mobile: this.InputMobile.value,
          telephone: this.InputTelephone.value,
          pays: this.InputPays.value,
          ville: this.InputVille.value,
          adresse: this.InputAdresse.value,
          codePostal: this.InputCodePostal.value,
          type: this.InputType.value
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            alert(' ok ! ajouter avec succès !');
           this.redirect();
            return responseJson.movies;
          })
          .catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);
          });
}

redirect(){
   this.history.goBack();
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
        <h1 class="title is-1">Forumlaire d'inscription</h1> 
        </div>
      </div>
          <form onSubmit={this.handleSubmit}>
            <br></br>
          <div class="columns is-multiline is-mobile"> 
                    <div class="column is-half">
                    <input type="text" ref={(el: HTMLInputElement) => this.InputNom = el} placeholder="Nom enseignant" class="input is-medium is-primary is-rounded" required/>
                    <br></br><br></br>
                    <input type="text" ref={(el: HTMLInputElement) => this.InputPrenom = el} placeholder="Prenom enseignant" class="input is-medium is-primary is-rounded" required/>
                <br></br><br></br>
                    <input type="email" ref={(el: HTMLInputElement) => this.InputEmailPerso = el}  placeholder="Email personel enseignant" class="input is-medium is-primary is-rounded" required/>
                    <br></br><br></br>    
                 <input type="email" ref={(el: HTMLInputElement) => this.InputEmailUbo = el} placeholder="Email UBO enseignant" class="input is-medium is-primary is-rounded" required/>
                 <br></br><br></br>
                 <input type="tel" ref={(el: HTMLInputElement) => this.InputMobile = el} placeholder="Mobile enseignant" class="input is-medium is-primary is-rounded" required/>
                 <br></br><br></br>
                 <input type="text" ref={(el: HTMLInputElement) => this.InputPays = el} placeholder="Pays enseignant" class="input is-medium is-primary is-rounded" required/>
                <br></br><br></br>
            </div>
            <div class="column is-half">                   
                    <input type="tel" ref={(el: HTMLInputElement) => this.InputTelephone = el} placeholder="Téléphone enseignant" class="input is-medium is-primary is-rounded" required/>
                    <br></br><br></br>
                    <input type="text" ref={(el: HTMLInputElement) => this.InputType = el} placeholder="Type enseignant" class="input is-medium is-primary is-rounded" required/>
                    <br></br><br></br>
                    <input type="text" ref={(el: HTMLInputElement) => this.InputAdresse = el} placeholder="Adresse postale"  class="input is-medium is-primary is-rounded" required/>
                    <br></br><br></br>
                    <input type="text" ref={(el: HTMLInputElement) => this.InputCodePostal = el} placeholder="Code postale"  class="input is-medium is-primary is-rounded" required/>
                    <br></br><br></br>
                    <input type="text" ref={(el: HTMLInputElement) => this.InputVille = el} placeholder="Ville enseignant" class="input is-medium is-primary is-rounded" required/>
                    <br></br><br></br>
                    <div title="This is my tooltip">
                    <div class="select is-medium is-primary is-rounded" >
                    <select onInput={(e: any) => (this.InputSexe = e.target)} required>
                   <option value="">Sexe</option> 
                  <option value="H" >H</option>
                  <option value="F" >F</option>
                  <option value="A">Autres</option>
                </select>
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
            <button type="reset" value="Vider les champs"  class="button is-light is-medium"> Vider les Champs </button>
            </p>
          </div>
          <br></br>
            </form>
        </section>
        );
    }
}