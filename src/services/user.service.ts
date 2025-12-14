import type { User } from './../types/user';
import { HttpError } from '../errors/http-error';

export function getUserById(id: number): User {
    if (!Number.isInteger(id) || id <= 0) {
        throw new HttpError(404, 'User not found');
    }

    return { id, name: 'Aji' };
}
