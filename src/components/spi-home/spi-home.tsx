import { Component } from "@stencil/core";

@Component({
  tag: "spi-home",
  styleUrl: "spi-home.scss"
})
export class SpiHome {
  render() {
    return (
      <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title">
                        Bienvenue sur l'interface du SPI !
                        </h1>
                        <h2 class="subtitle">
                        Pour continuer veuillez-vous identifier.
                        </h2>
                        <div class="box">
                                <p class="control is-expanded">
                                    <input class="input" type="text" placeholder="Enter your email"/>
                                </p>
                                <br></br>
                                <p class="control is-expanded">
                                    <input class="input" type="password" placeholder="Enter your password"/>
                                </p>
                                <br></br>
                                <p class="control">
                                    <a class="button is-info is-fullwidth">
                                        Login
                                    </a>
                                    <br></br>
                                    <a class="button is-black is-fullwidth">
                                        Mot de passe oublié ?
                                    </a>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    );
  }
}
