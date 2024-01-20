import { CollectionConfig } from 'payload/types';

export const Posts: CollectionConfig = {
  slug: 'posts', // Unique identifier for the collection
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true, // Enforces that a title is always provided
    },
    {
      name: 'content',
      type: 'richText', // Enables rich text editing capabilities
    },
  ],
};

// Register the collection in your payload.config.js file:
// import { registerCollections } from 'payload/config';

// registerCollections([Posts]);
