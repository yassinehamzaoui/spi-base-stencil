import { Component, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
    tag: "formation-details",
    styleUrl: "formation-details.scss"
})
export class FormationDetails {

    @Prop() match: MatchResults;
    @Prop() history: RouterHistory;
    @State() posts: any = "";

    componentWillLoad() {
        let url = 'http://dosispi.cleverapps.io/formation/'
        let noEnseignant = this.match.params.noEnseignant;
        return fetch(`${url + noEnseignant}`)
            .then(response => response.json())
            .then(data => {
                this.posts = data;
            });
    }

    render() {
        return (
            <section class="hero is-primary is-fullheight">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
                            <div class="column">
                                <form class="box">
                                    <div class="field has-text-centered">
                                        <img src="images/logo.png" width="167" />
                                    </div>
                                    <div class="field">
                                        <label class="label">Email</label>
                                        <div class="control has-icons-left">
                                            <input type="email" class="input" placeholder="e.g. hkakehas@cisco.com" />
                                            <span class="icon is-small is-left">
                                                <i class="fa fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Password</label>
                                        <div class="control has-icons-left">
                                            <input type="password" class="input" placeholder="*********" required />
                                            <span class="icon is-small is-left">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="checkbox">
                                            <input type="checkbox" />
                                            Remember me
                                </label>
                                    </div>
                                    <div class="field">
                                        <button class="button is-success">
                                            Login
                                </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}