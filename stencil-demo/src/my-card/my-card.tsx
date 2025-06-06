import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop() title: string;
  @Prop() content: string;

  render() {
    return (
      <div class="card">
        <h2>{this.title}</h2>
        <p>{this.content}</p>
      </div>
    );
  }
}
