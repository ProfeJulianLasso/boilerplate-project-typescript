import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './config/inversify.config';

const port = process.env.PORT ?? 3000;

const server = new InversifyExpressServer(container);

server.build().listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
