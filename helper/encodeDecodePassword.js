import { encode, decode } from "string-encode-decode";

export const encodePassword = (password) => encode(password);

export const decodePassword = (password) => decode(password);
