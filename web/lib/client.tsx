// import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'plz1o1yt',
    dataset:'products',
    apiVersion:'2022-06-14',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY

})



const builder = imageUrlBuilder(client)
export const urlFor = (source:any) => builder.image(source)