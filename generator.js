const { writeFileSync } = require('fs');
const { join, resolve } = require('path');
const { kebabCase, startCase } = require('lodash');
const { mkdirp } = require('mkdirp');
const yargs = require('yargs');

console.log('~ Generators gonna generate ~');

const CONFIG = {
  sass: false, // add sass by default
};

const ROOT = resolve(__dirname),
  SRC =join(ROOT, 'src'),
  COMPONENTS_ROOT= join(SRC, 'components'),
  PAGES_ROOT = join(SRC, 'pages'),
  SERVICES_ROOT = join(SRC, 'services');

const PATHS = { COMPONENTS_ROOT, PAGES_ROOT, SERVICES_ROOT };

function getTSX(name, sass) {
  const kc = kebabCase(name);
  const cap = startCase(name).replace(/\s/g, '');


  return `import { Component } from \'@stencil/core\';\n\n
@Component({
  tag: '${ kc }'${ sass? ',\n  styleUrl: \'' + kc + '.scss\'' : '' }
})
export class ${ cap } {\n
  render() {
    return;
  }\n
}
`;
}

function getSCSS(name) {
  return kebabCase(name) + ' {\n\n}';
}

function createFile(name, type, sass = CONFIG.sass) {
  type = type.toLowerCase();

  if (type === 'service' && !name.toLowerCase().includes('service')) {
    name += 'Service';
  }

  let ROOT, FILE_NAME = kebabCase(name);

  if (FILE_NAME.split('-').length < 2) {
    console.log('File name must have at least two words.');
    process.exit();
  }


  switch(type) {
    case 'page':
    case 'service':
    case 'component':
      ROOT = join(PATHS[type.toUpperCase() + 'S_ROOT'], FILE_NAME);
      break;

    default:
      console.log('Invalid generator type');
      process.exit();
  }

  type === 'service' && (sass = false);

  mkdirp.sync(ROOT);

  try {
    writeFileSync(join(ROOT, FILE_NAME + '.tsx'), getTSX(name, sass), { encoding: 'utf-8', flag: 'w' });
    sass && writeFileSync(join(ROOT, FILE_NAME + '.scss'), getSCSS(name), { encoding: 'utf-8', flag: 'w' });
  } catch (err) {
    console.log('Error writing files');
    console.log(err);
    process.exit();
  } finally {
    console.log('Created a ' + type + ' named ' + FILE_NAME);
  }

}

{
  // CLI stuff

  const argv = yargs
    .alias('g', 'generate')
    .option('sass', {
      alias: 's',
      describe: 'Generate SASS file',
      default: false
    })
    .command('g [type] [names...]', 'Generate a page from template')
    .argv;

  const SASS = Boolean(argv.sass),
    TYPE = argv.type,
    NAMES = argv.names;

  // must have a type and names to continue
  (!TYPE || !NAMES) && process.exit();

  NAMES.forEach(name => createFile(name, TYPE, SASS));

}


// NODE EXPORT
module.exports = {
  createFile,
  getTSX,
  getSCSS
};