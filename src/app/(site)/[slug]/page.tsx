import { getPageBySlug } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'

type Props = {
	params: Promise<{
		slug: string
	}>
}

const SlugPage = async ({ params }: Props) => {
	const { slug } = await params
	const page = await getPageBySlug(slug)

	return (
		<div>
			<h1 className='text-5xl drop-shadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
				{page.title}
			</h1>

			<div className='mt-10 text-lg text-gray-300'>
				<PortableText value={page.content} />
			</div>
		</div>
	)
}

export default SlugPage
