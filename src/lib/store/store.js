import { writable } from "svelte/store";
export const tokenFromStore = writable("token");
export const userFromStore = writable(undefined);