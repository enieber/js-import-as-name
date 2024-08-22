import { all as allSync } from './sync.js';

function execute(fn) {
  // expect console: execute allSync 
  console.log(`execute ${fn.name}`);
  // console: execute all
  // the fn.name is static name, and not change when use `as` in `import`
  fn()
}

function executeAll() {
  execute(allSync);
}

executeAll()
