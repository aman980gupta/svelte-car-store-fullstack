import { redirect } from '@sveltejs/kit';

export const actions = {
    logout:async function ({cookies}){
        await cookies.set("token","",{
            path: '/login',
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
            maxAge: 0
        } );
        return redirect(300, "/login");
    }
}