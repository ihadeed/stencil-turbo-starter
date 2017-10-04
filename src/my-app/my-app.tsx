import { Component } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {
  render() {
    return [
      <div class="page-header">
        <h1>TurboCharged</h1>
      </div>,
      <nav class="page-nav">
        <stencil-route-link url="/">Home</stencil-route-link>
        <stencil-route-link url="/events">Page 1</stencil-route-link>
        <stencil-route-link url="/venues">Page 2</stencil-route-link>
      </nav>,
      <stencil-router>
        <stencil-route url="/" component="home-page" exact={true} />
        <stencil-route url="/events" component="events-page" exact={true} />
        <stencil-route url="/venues" component="venues-page" exact={true} />
      </stencil-router>,
      <api-service></api-service>
    ];
  }
}
