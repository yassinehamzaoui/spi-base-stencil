import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header/>
        <main class="">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/enseignant" component="enseignant-list" exact={true}/>
              <stencil-route url="/enseignant/add" component="enseignant-add" exact={true}/>
              <stencil-route url="/enseignant/searchname" component="enseignant-nom" exact={true}/>
              <stencil-route url="/enseignant/searchemail" component="enseignant-email" exact={true}/>             
              <stencil-route url="/formation" component="formation-list" exact={true}/>
              <stencil-route url="/formation/add" component="formation-add" exact={true}/>
              <stencil-route url="/formation/searchnom" component="formation-nom" exact={true}/>
              <stencil-route url="/formation/update/:codeFormation" component="formation-update" exact={true}/>
              </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
