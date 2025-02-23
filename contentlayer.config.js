import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    bg: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    spotifyId: {
      type: "string",
    },
    summary: {
      type: "string",
      required: true,
    },
    apple: {
      type: "string",
    },
    youtube: {
      type: "string",
    },
    numero: {
      type: "number",
    },
    draft: {
      type: "boolean",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
