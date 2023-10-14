import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { UserRepository } from '../../repositories/UserRepository';
import { Request, Response } from 'express';

@controller('/users')
export class UserController {
  @inject(UserRepository) private readonly userRepository: UserRepository;

  @httpGet('/')
  async getUsers(_: Request, res: Response) {
    const users = this.userRepository.getAllUsers();
    return res.json(users);
  }
}
