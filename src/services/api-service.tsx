import { Component } from '@stencil/core';

@Component({
  tag: 'api-service'
})
export class APIService {
  constructor() {
    console.log('API Service up and running');
  }

  async get(path: string) {
    return 'Mock data';
  }

  render() {
    return;
  }
}