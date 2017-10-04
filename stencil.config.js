const { readdirSync } = require('fs');
const { join } = require('path');
const mainComponent = 'my-app';

const SRC = join(__dirname, 'src');

function normalizeNames(names) {
  return names.map(name => name.replace('.tsx', ''));
}

function getNamesFromDir(dir) {
  return normalizeNames(readdirSync(dir));
}

const services = getNamesFromDir(join(SRC, 'services'));

const components = getNamesFromDir(join(SRC, 'components'));

const pages = getNamesFromDir(join(SRC, 'pages'));

let bundles = [];

bundles.push([mainComponent, ...services, ...components]);
bundles.push(...pages.map(page => [page]));

bundles = bundles.map(bundle => ({ components: bundle }));

exports.config = {
  bundles,
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};