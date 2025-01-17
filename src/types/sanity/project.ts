import { PortableTextBlock } from 'sanity'

export type Project = {
	_id: string
	_createdAt: string
	name: string
	slug: string
	image: {
		url: string
		alt: string
	}
	url: string
	content: PortableTextBlock[]
}
