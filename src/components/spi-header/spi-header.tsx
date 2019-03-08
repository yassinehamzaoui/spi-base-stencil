import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav class="navbar is-light has-shadow is-spaced" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-item">
              <a href="/"><strong>SPI-ADM</strong></a>
            </span>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-content"
              onClick={() => this.toggleBurger()}
              ref={el => (this.burger = el)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbar-content" class="navbar-menu" ref={el => (this.menu = el)}>
            <div class="navbar-start">
              <span class="navbar-item">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="far fa-address-card"></i>
                  Enseignant
                </a>
                  <div class="navbar-dropdown">
                  <a class="navbar-item" href="/enseignant">Liste Enseignant</a>
                    <a class="navbar-item" href="/enseignant/add">Ajouter Enseignant</a>
                    <a class="navbar-item" href="/enseignant/searchname">Rechercher Par Nom</a>
                    <a class="navbar-item" href="/enseignant/searchemail">Rechercher Par Email</a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-barcode"></i>
                  Candidat
                </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item">Ajouter</a>
                    <a class="navbar-item">Supprimer</a>
                    <a class="navbar-item">Rechercher Par Num</a>
                    <a class="navbar-item">Rechercher Par Email</a>
                    <a class="navbar-item">Rechercher Par Nom</a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-book-reader"></i>
                  Formation
                </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item"  href="/formation">Liste Formation</a>
                    <a class="navbar-item" href="/formation/add">Ajouter Formation</a>
                    <a class="navbar-item" href="/formation/searchnom">Rechercher Par Nom</a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="fas fa-book"></i>
                  Promotion
                </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item">Ajouter</a>
                    <a class="navbar-item">Supprimer</a>
                    <a class="navbar-item">Rechercher Par Num</a>
                    <a class="navbar-item">Rechercher Par Email</a>
                    <a class="navbar-item">Rechercher Par Nom</a>
                </div>
            </div>
            </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
