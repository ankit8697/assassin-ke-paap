import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
    // Get scores
    depends('supabase:db:scores')
    const { data: scores, error } = await supabase.from('scores').select("score,name")
    if (error) {
        console.error(error)
    }
    console.log(scores)
    scores?.sort((a, b) => b.score - a.score);

    // Get Assassination Log
    depends('supabase:db:assassination-log')
    const { data: logs, logError } = await supabase.from('assassination-log').select("*, killer_id(*), victim_id(*)")
    if (logError) {
        console.error(logError)
    }
    const assassinationLog = []
    logs.map(log => {
        const date = new Date(log.created_at)
        const formattedDate = date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long', // e.g., "December"
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true, // Toggle between 12-hour or 24-hour format
        });
        assassinationLog.push({
            killer_id: log.killer_id.name,
            victim_id: log.victim_id.name,
            created_at: formattedDate

        })
    })
    console.log(logs)
    return { logs: assassinationLog ?? [], scores: scores ?? [] }
}