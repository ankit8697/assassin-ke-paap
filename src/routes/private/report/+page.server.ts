import type { PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
    // Get users
    depends('supabase:db:scores')
    depends('supabase:db:assassination-log')
    const { data: scores, error } = await supabase.from('scores').select("id,name")
    if (error) {
        console.error(error)
    }
    console.log(scores)
    return { scores: scores ?? [] }
}

export const actions: Actions = {
    default: async ({ request, locals: { supabase } }) => {
        console.log("Marking kill")
        const formData = await request.formData()
        const target = formData.get('target') as string

        const { error } = await supabase.from("assassination-log").insert({
                killer_id: (await supabase.auth.getUser()).data.user?.id,
                victim_id: target
            })
        if (error) {
            console.error(error)
        }
        redirect(303, '/private/scores')
    },
}