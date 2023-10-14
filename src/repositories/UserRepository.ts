import { injectable } from 'inversify';
import { User } from '../entities/User';

@injectable()
export class UserRepository {
	getAllUsers(): User[] {
		return [
			new User(1, 'John Doe', 'john@example.com'),
			new User(2, 'Jane Smith', 'john@example.com'),
		];
	}
}
