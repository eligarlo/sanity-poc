import { createClient, groq } from 'next-sanity'

import clientConfig from '@/sanity/config/client-config'
import { Project } from '@/types/sanity/project'
import { Page } from '@/types/sanity/page'

export const getProjects = async (): Promise<Project[]> => {
	const client = createClient(clientConfig)

	const projects = await client.fetch(
		groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      url,
      content
    }`
	)

	return projects
}

export const getProjectBySlug = async (slug: string): Promise<Project> => {
	const client = createClient(clientConfig)

	const project = await client.fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      url,
      content
    }`,
		{ slug }
	)

	return project
}

export const getPages = async (): Promise<Page[]> => {
	const client = createClient(clientConfig)

	const pages = await client.fetch(
		groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
	)

	return pages
}

export const getPageBySlug = async (slug: string): Promise<Page> => {
	const client = createClient(clientConfig)

	const page = await client.fetch(
		groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
		{ slug }
	)

	return page
}
