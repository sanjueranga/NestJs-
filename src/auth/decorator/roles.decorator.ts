import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../guard/user-role.enum'; // Adjust the import path

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);

