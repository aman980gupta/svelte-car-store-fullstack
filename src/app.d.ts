// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		// interface Error {
		// 	code:number,
		// 	message:string,
		// 	data:object
		// }
		 interface Locals {
			userToken: string,
			user:object,
			dealerToken:string,
			dealer:object
		 }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
