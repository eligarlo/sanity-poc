import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import schemas from '@/sanity/schemas'

const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: 'production',
	title: 'Sanity POC Studio',
	apiVersion: '2025-01-06',
	basePath: '/admin/studio',
	plugins: [structureTool()],
	schema: {
		types: schemas,
	},
})

export default config
