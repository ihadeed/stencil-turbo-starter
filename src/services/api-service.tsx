import { Component } from '@stencil/core';

@Component({
  tag: 'api-service'
})
export class APIService {
  constructor() {
    console.log('API Service up and running');
  }

  get(path: string) {}

  render() {
    return;
  }
}