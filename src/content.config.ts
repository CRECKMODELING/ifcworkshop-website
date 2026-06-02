import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const archive = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/archive" }),
  schema: z.object({
    edition:      z.number(),
    year:         z.number(),
    location:     z.string(),
    dates:        z.string(),
    summary:      z.string().optional(),
    website:      z.string().optional(),
    programPdf:   z.string().optional(),
    photoGallery:        z.array(z.string()).default([]),
    dataLinks:           z.array(z.object({ url: z.string(), label: z.string() })).default([]),
    perspectivePaper:    z.object({ title: z.string(), authors: z.string(), journal: z.string(), doi: z.string() }).optional(),
    scope:               z.string().optional(),
    theme:               z.array(z.string()).optional(),
    organizingCommittee: z.array(z.string()).optional(),
    advisoryCommittee:   z.array(z.string()).optional(),
  }),
});

export const collections = { archive };
