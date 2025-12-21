import { type SchemaTypeDefinition } from 'sanity'
import { blogPost } from './schemas/post'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blogPost],
}
