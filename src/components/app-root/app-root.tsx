import { Component, Prop } from "@stencil/core";
import { Store } from "@stencil/redux";
import { configureStore } from "../store";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  @Prop({ context: "store" })
  store: Store;

  componentWillLoad() {
    this.store.setStore(configureStore(undefined));
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route
              url="/"
              component="app-home"
              exact={true}
              componentProps={{ store: this.store }}
            />

            <stencil-route
              url="/profile/:name"
              component="app-profile"
              componentProps={{ store: this.store }}
            />
          </stencil-router>
        </main>
      </div>
    );
  }
}
