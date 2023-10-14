import { Container } from 'inversify';
import { UserRepository } from '../repositories/UserRepository';
import { UserController } from '../api/routes/UserController';

const container = new Container();

// Bindings Users
container.bind<UserRepository>(UserRepository).toSelf();
container.bind<UserController>(UserController).toSelf();

export default container;
