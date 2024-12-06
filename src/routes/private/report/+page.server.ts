import type { PageServerLoad } from './$types'
import type { Actions } from './$types'
import { redirect } from '@sveltejs/kit'

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
    // Get users
    depends('supabase:db:scores')
    const { data: scores, error } = await supabase.from('scores').select("id,name")
    if (error) {
        console.error(error)
    }
    const userId = (await supabase.auth.getUser()).data.user?.id;

    const filtered = scores?.filter(score => score.id !== userId);
    console.log(filtered)
    return { scores: filtered ?? [] }
}

export const actions: Actions = {
    default: async ({ request, locals: { supabase } }) => {
        console.log("Marking kill")
        const formData = await request.formData()
        const target = formData.get('target') as string

        const killer_id = (await supabase.auth.getUser()).data.user?.id
        const { error } = await supabase.from("assassination-log").insert({
            killer_id: killer_id,
            victim_id: target
        })
        if (error) {
            console.error(error)
        }

        const { data } = await supabase
            .from('scores') // Replace with your table name
            .select("*")
            .eq('id', killer_id).single(); // Use the appropriate condition to identify the record

        console.log("data: ", data)
        if (data) {
            data.score++
            console.log("the updated data is: ", data)
            const { error } = await supabase
                .from('scores')
                .update(data)
                .eq('id', killer_id);
            console.log("updated score.")
            if (error) {
                console.error(error)
            }
        }

        redirect(303, '/private/scores')
    },
}