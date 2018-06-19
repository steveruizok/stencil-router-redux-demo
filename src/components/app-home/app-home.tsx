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
          This project is a very simple demo of a stencil-redux working
          alongside stencil-router. It was creating using:
          <pre>
            npm init stencil
            <br />
            npm install redux
            <br />
            npm install @stencil/redux
            <br />
            npm install redux-logger
            <br />
            npm install stencil-router
          </pre>
          The store is created in <code>app-root</code> and passed to routes
          using:
          <pre>componentProps={"{{ store: this.store }}"}</pre>
          It works as you'd expect! In this example, we have a state with a
          single property, count. It's currently at {this.count}, but we can
          change it using the control below. When we route to our Profile Page,
          the count should be preserved.
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
