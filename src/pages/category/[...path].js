import {
	usePosts,
	fetchHookData,
	addHookData,
	handleError,
	useAppSettings,
} from '@headstartwp/next';
import { Link } from '../../components/Link';
import { Pagination } from '../../components/Pagination';
import { resolveBatch } from '../../utils/promises';
import { useEffect } from 'react';

const CategoryPage = () => {
	const { data, refetch } = usePosts({ taxonomy: 'category' });

	useEffect(() => {
		// Refetch data when route parameters change
		console.log('refetching');
	 }, [refetch]);

	return (
		<>
			<h1>Category Page: {data.queriedObject.term.name}</h1>
			<ul>
				{data.posts.map((post) => (
					<li key={post.id}>
						<Link href={post.link}>{post.title.rendered}</Link>
					</li>
				))}
			</ul>
			<Pagination pageInfo={data.pageInfo} />
		</>
	);
};

export async function getServerSideProps(context) {
	try {
		const settledPromises = await resolveBatch([
			{
				func: fetchHookData(usePosts.fetcher(), context, {
					params: { taxonomy: 'category' },
				}),
			},
			{ func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
		]);

		/**
		 * It is also possible to get the queried object on the server, this is useful if you need to conditionally fetch data
		 * server side based on queriedObject
		 *
		 * const [posts] = settledPromises;
		 * console.log(posts.data.queriedObject.term.slug);
		*/
		const [posts] = settledPromises;
		return addHookData([posts], {});
	} catch (e) {
		return handleError(e, context);
	}
}


export default CategoryPage;