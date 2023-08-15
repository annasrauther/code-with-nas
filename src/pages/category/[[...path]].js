import {
	usePosts,
	fetchHookData,
	addHookData,
	handleError,
	useAppSettings,
	useTerms,
} from '@headstartwp/next';
import { resolveBatch } from '../../utils/promises';
import PostList from '@/components/PostList';
import { Pagination } from '@/components/Pagination';
import { headingStyles } from '@/styles/components';	
import Link from 'next/link';
import { backButtonStyles } from '@/styles/components';

const CategoryPage = () => {
	const {
		data,
		loading,
	 } = usePosts({ taxonomy: 'category' });

	const {
		data: { terms },
		error: termsError,
      	loading: termsLoading,
	} = useTerms({ taxonomy: 'post_tag', _fields: ['name', 'id', 'link', 'description'], });

	if (termsLoading) {
		return <p>Loading...</p>;
	 }
  
	 if (termsError) {
		return <p>Error loading tags: {termsError.message}</p>;
	 }

	const pageTitle = data.queriedObject?.term?.name || 'All';

	return (
		<section style={{
			display: 'grid',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			gap: '2em',
		}}>
			{
				data.queriedObject?.term?.name ? <Link className={backButtonStyles} href="/category">See All Categories</Link> : <Link className={backButtonStyles} href="/">Home</Link>
			}
			<h1 style={{
					display: 'flex',
					justifyContent: 'center',
					gap: '10px',
					borderBottom: '2px solid',
					paddingBottom: '20px',
				}}
				className={headingStyles}
			>
				Category: <span className="term-title">{ pageTitle }</span>
			</h1>
			<PostList posts={data.posts} loading={loading} showCategory={false} showTag={true} />
			<Pagination pageInfo={data.pageInfo} />
		</section>
	);
};

export async function getServerSideProps(context) {
	try {
		const settledPromises = await resolveBatch([
			{
				func: fetchHookData(usePosts.fetcher(), context, {
					params: {
						taxonomy: 'category',
					},
				}),
			},
			{
				func: fetchHookData(useTerms.fetcher(), context, {
					params: {
						taxonomy: 'post_tag',
				  },
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