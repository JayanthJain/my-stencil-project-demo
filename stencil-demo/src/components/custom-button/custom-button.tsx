import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-button',
  styleUrl: 'custom-button.css',
  shadow: true,
})
export class CustomButton {
  @Prop() variant: 'primary' | 'secondary' = 'primary';
  @Prop() width: 'sm' | 'md' | 'lg' = 'md';
  render() {
    return (
      <button class={`btn ${this.variant} ${this.width}`}>
        <slot>Click me</slot>
      </button>
    );
  }
}
