import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'c2k118a1',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skrTLGPxrHLp5PqQcT53TT4LbxloLm22h8TkwqvO9yfhbKFHYjBww62UgH7bgjJFPiYgNFcaJLzMzFfuZJn5Tw2Lp07WvrlGe5cwhNNzQasvszR4OHRLbhqEdb6zwmr5rebcuGVUP1zIlJVKcHLfauTquO74N7qruegN926OL2l0BALZcQ26'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);