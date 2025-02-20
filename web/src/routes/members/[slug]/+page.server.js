import { client } from '$lib/sanity'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
    const member = await client.fetch(`
        *[_type == "memberBio" && slug.current == $slug][0] {
            name,
            role,
            imageUrl,
            bio,
            slug
        }
    `, {
        slug: params.slug
    })

    if (!member) {
        throw error(404, 'Member not found')
    }

    return {
        member
    }
} 