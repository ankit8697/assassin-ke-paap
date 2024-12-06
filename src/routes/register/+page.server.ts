import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

export const actions: Actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData()
        const email = formData.get('email') as string
        const name = formData.get('name') as string
        const password = formData.get('password') as string

        const { data, error } = await supabase.auth.signUp({ email, password })
        if (error) {
            console.error(error)
            redirect(303, '/auth/error')
        } else {
            console.log("Now updating the db")
            const { error } = await supabase.from("scores").insert({
                id: data.user?.id,
                name: name
            })
            if (error) {
                console.error(error)
            }
            redirect(303, '/private/scores')
        }
    },
}