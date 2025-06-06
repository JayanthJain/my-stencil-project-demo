import { Component, h, } from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: true,
})
export class MyHeader {
  render() {
    return (

      <div class='header'>
        <div>Login</div>
        <div>
          {/* <custom-button variant="primary" width="sm">Primary Small</custom-button>
          <custom-button variant="secondary" width="md">Secondary Medium</custom-button>
          <custom-button variant="primary" width="lg">Primary Large</custom-button> */}

        </div> 
      </div>

    );
  }
}
