declare var module: any;
if (module.hot) {
  module.hot.accept();
}
declare var HASH: string;
declare var ENV: string;

HASH = '1000';
ENV = 'some';
console.log('test' + HASH + ENV);
