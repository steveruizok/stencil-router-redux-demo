import { Component, Prop } from "@stencil/core";

@Component({
  tag: "app-counter",
  styleUrl: "app-counter.css"
})
export class AppCounter {
  @Prop() changeCount: any;
  @Prop() count: number;

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.changeCount(-10);
          }}
        >
          -10
        </button>
        <button
          onClick={() => {
            this.changeCount(-1);
          }}
        >
          -1
        </button>
        <span class="count">{this.count}</span>
        <button
          onClick={() => {
            this.changeCount(1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.changeCount(10);
          }}
        >
          +10
        </button>
      </div>
    );
  }
}
