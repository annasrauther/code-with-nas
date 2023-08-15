import {
	usePosts,
	fetchHookData,
	addHookData,
	handleError,
	useAppSettings,
} from '@headstartwp/next';
import PostList from '@/components/PostList';
import { Pagination } from '../../components/Pagination';
import { resolveBatch } from '../../utils/promises';
import { headingStyles, backButtonStyles } from '@/styles/components';
import Link from 'next/link';

const TagPage = () => {
	const { data, loading } = usePosts({ taxonomy: 'post_tag' });
	const pageTitle = data.queriedObject?.term?.name || 'All';
	return (
		<section style={{
			display: 'grid',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			gap: '2em',
		}}>
			{
				data.queriedObject?.term?.name ? <Link className={backButtonStyles} href="/tag">See All Tags</Link> : <Link className={backButtonStyles} href="/">Home</Link>
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
				Tag: <span className="term-title">{ pageTitle }</span>
			</h1>
			<PostList posts={data.posts} loading={loading} showCategory={true} showTag={true} />
			<Pagination pageInfo={data.pageInfo} />
		</section>
	);
};

export async function getServerSideProps(context) {
	try {
		const settledPromises = await resolveBatch([
			{
				func: fetchHookData(usePosts.fetcher(), context, {
					params: { taxonomy: 'post_tag' },
				}),
			},
			{ func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
		]);

		return addHookData(settledPromises, {});
	} catch (e) {
		return handleError(e, context);
	}
}

export default TagPage;