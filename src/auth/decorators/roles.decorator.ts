import { SetMetadata } from "@nestjs/common";

export const ROLERS_KEY = 'roles';

export const Roles = (...roles: string[]) => SetMetadata(ROLERS_KEY, roles);