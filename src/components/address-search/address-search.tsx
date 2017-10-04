import { Component } from '@stencil/core';

@Component({
  tag: 'address-search',
  styleUrl: 'address-search.scss'
})
export class AddressSearch {
  render() {
    return [
      <h1>Im an address search bar</h1>
    ];
  }
}