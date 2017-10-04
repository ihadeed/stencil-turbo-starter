import { Component } from '@stencil/core';
import { APIService } from '../../services/api-service';
import { Inject, Service } from '../../utils';


@Component({
  tag: 'hello-world',
  styleUrl: 'hello-world.scss'
})
export class HelloWorld {

  @Inject('api-service') api: Service<APIService>;

  async componentWillLoad() {
    // let's get some data before the page boots up
    let api: APIService = await this.api;
    let res = await api.get('https://some/website/path');

    console.log(res);
  }

  render() {
    return;
  }

}
