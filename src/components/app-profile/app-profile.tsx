import { MatchResults } from "@stencil/router";
import { Component, Prop, State } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { appUpdateCount } from "../actions/app";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css"
})
export class AppProfile {
  @Prop() match: MatchResults;
  @Prop() store: Store;
  appUpdateCount: Action;
  @State() count: number;

  componentWillLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        app: { count }
      } = state;

      return {
        count
      };
    });

    this.store.mapDispatchToProps(this, {
      appUpdateCount
    });
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p>
            Hello! My name is {this.match.params.name}. My name was passed in
            through a route param!
          </p>

          <p>Count:</p>
          <app-counter onChange={this.appUpdateCount} count={this.count} />

          <p>Routes:</p>
          <stencil-route-link url="/">
            <button>Back home</button>
          </stencil-route-link>
        </div>
      );
    }
  }
}
