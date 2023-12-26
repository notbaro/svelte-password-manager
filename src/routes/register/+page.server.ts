import  { fail, } from "@sveltejs/kit";
import type { PageServerLoad, Action, Actions } from "./$types";

const register: Action = async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    console.log(email, password);

    if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
        return fail(400, {invalid: true})
    }
}

export const load: PageServerLoad = async () => {
}
export const actions: Actions = { register }
