export function getService(name: string) {
  let el: any = document.querySelector(name);
  if (el) return el;
  document.body.appendChild(document.createElement(name));
}

export function Inject(name: string): PropertyDecorator {
  return (target: Object, propertyKey: string) => {
    target[propertyKey] = getService(name);
  };
}