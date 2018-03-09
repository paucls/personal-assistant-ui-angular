import { json } from 'body-parser';
import * as pause from 'connect-pause';
import { create, rewriter, router } from 'json-server';
import { argv } from 'yargs';

import { customRoutes } from './custom-routes';
import { db } from './db';

const server = create();

server.use(json());

if (argv.delay) {
  server.use(pause(argv.delay));
}
server.use(rewriter(customRoutes));
server.use(router(db));

console.log('Starting JSON Server on port 3001');
server.listen(3001);
