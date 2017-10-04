export function getService(name: string): Promise<any> {
  return new Promise<any>((resolve: Function) => {
    // service exists
    let el: any = document.querySelector(name);
    if (el) {
      return resolve(el);
    }

    // service doesn't exist
    requestAnimationFrame(() => {
      el = document.body.appendChild(document.createElement(name));
      el.componentOnReady((el: any) => resolve(el));
    });
  });
}

export function Inject(name: string): PropertyDecorator {
  return (target: Object, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get: async () => await getService(name)
    });
  };
}

export type Service<T> = Promise<T>;