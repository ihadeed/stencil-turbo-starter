import { Component } from '@stencil/core';
import { APIService } from '../../services/api-service';
import { Inject } from '../../utils';


@Component({
  tag: 'hello-world',
  styleUrl: 'hello-world.scss'
})
export class HelloWorld {

  @Inject('api-service') api: APIService;

  render() {
    return;
  }

}
