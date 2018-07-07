import { Component, Prop, State } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { appUpdateCount } from "../actions/app";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
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
    return (
      <div class="app-home">
        <p>
          This project is a very simple demo of stencil-redux working alongside
          stencil-router. We create the store in the root module,
          <code> app-root</code>, and passed to routes using
          <code> componentProps</code>.
        </p>
        <p>
          In this example, we have a state with a single property,
          <code> count</code>. It's currently at {this.count}, but we can change
          it using the control below. When we route to our Profile Page (and
          back to this one) our shared store will preserve this count.
        </p>

        <p>Count:</p>
        <app-counter changeCount={this.appUpdateCount} count={this.count} />

        <p>Routes:</p>
        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
