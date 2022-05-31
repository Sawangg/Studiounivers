import bcrypt from "bcrypt";

export const encodePassword = (rawPassword: string) => bcrypt.hashSync(rawPassword, bcrypt.genSaltSync());

export const compatePasswords = (rawPassword: string, hash: string) => bcrypt.compareSync(rawPassword, hash);
