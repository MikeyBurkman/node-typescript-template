require('module-alias/register');

import { getFoo } from '//src/widget';

const doSomething = async () => {
  const foo1 = await getFoo();
  const foo2 = await getFoo();
  return `${foo1}-${foo2}`;
};

doSomething()
  .then((x) => console.log(`doSomething() returned ${x}`))
  .catch((err) => console.error(`Got an error: ${err.stack}`));
