import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { getProjectBySlug } from '@/sanity/sanity-utils'

type Props = {
	params: Promise<{
		slug: string
	}>
}

const ProjectPage = async ({ params }: Props) => {
	const { slug } = await params

	const project = await getProjectBySlug(slug)

	return (
		<div>
			<header className='flex items-center justify-between'>
				<h1 className='text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg'>
					{project.name}
				</h1>

				<a
					href={project.url}
					title='View Project'
					target='_blank'
					rel='noopener noreferrer'
					className='bg-gray-100 rounded-lg text-gray-900 font-bold py-3 px-4 whitespace-nowrap hover:bg-orange-500 hover:text-white transition-colors duration-300'
				>
					View Project
				</a>
			</header>

			{/* content goes here */}
			<div className='text-lg text-gray-300 mt-5'>
				<PortableText value={project.content} />
			</div>

			{/* image goes here */}
			<Image
				src={project.image.url}
				alt={project.image?.alt ?? project.name}
				width={750}
				height={300}
				className='object-cover rounded-lg border border-gray-500'
			/>
		</div>
	)
}

export default ProjectPage
