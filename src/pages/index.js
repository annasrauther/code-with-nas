import {
	usePost,
	fetchHookData,
	useAppSettings,
	addHookData,
	handleError,
	usePosts,
	useTerms,
} from '@headstartwp/next';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { singleParams } from '../params';
import { resolveBatch } from '../utils/promises';
import Post from '../components/Post';
import TermList from '../components/TermList';
import { postListStyles, headingStyles } from '../styles/components';
import PostList from '@/components/PostList';

const Homepage = ({ homePageSlug }) => {

	// the query below is a client-side-only query
	const { loading, data } = usePosts(
		{
			// you can override any defaults supported by the REST API
			per_page: 5,
		},
		// since this is only a client-side query
		// we want to force revalidating on mount to ensure query runs on mount
		// this is required bc we have disabled revalidateOnMount globally in _app.js
		{ swr: { revalidateOnMount: true } },
	);

	const {
		data: { terms },
	} = useTerms({ taxonomy: 'category' });

	return (
		<div style={{
			display: 'grid',
			gap: '5em'
		}}>
			<div style={{
				display: 'grid',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '2em',
				gridTemplateColumns: '2fr 1fr',
			}}>
				<div style={{
					display: 'grid',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '1em',
					gridTemplateRows: '5fr 1fr',
				}}>
					<h1 className={headingStyles}>Discover short code snippets for all your development needs.</h1>
					<h3 style={{
						fontWeight: 'normal',
						fontSize: '1.2em',
						lineHeight: '1.2em',
						margin: '0',
					}}>Browse snippets by collection or check out our top picks and latest articles below.</h3>
				</div>
				<div>
					<Image src="/hero_banner.svg" alt="Hero Image" width={300} height={300} />
				</div>
			</div>
			<div style={{
				display: 'grid',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				gap: '2em',
			}}>	
				<h2 className={headingStyles}>Categories</h2>
				{terms.length > 0 ? (
					<TermList terms={terms} />
					) : null}
			</div>
			<div style={{
				display: 'grid',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				gap: '2em',
			}}>	
				<h2 className={headingStyles}>Latest Articles</h2>
				<PostList posts={data.posts} loading={loading} showCategory={true} showTag={true}/>
			</div>
		</div>
	);
};

Homepage.propTypes = {
	homePageSlug: PropTypes.string.isRequired,
};

export default Homepage;

export async function getStaticProps(context) {
	let appSettings;
	let slug;
	try {
		appSettings = await fetchHookData(useAppSettings.fetcher(), context);
		/**
		 * The static front-page can be set in the WP admin. The default one will be 'front-page'
		 */
		slug = appSettings.data.result?.home?.slug ?? 'front-page';
	} catch (e) {
		if (e.name === 'EndpointError') {
			slug = 'front-page';
		}
	}

	try {
		const hookData = await resolveBatch([
			{
				func: fetchHookData(usePost.fetcher(), context, {
					params: {
						...singleParams,
						slug,
					},
				}),
			},
			{
				func: fetchHookData(useTerms.fetcher(), context, {
					params: { taxonomy: 'category' },
				}),
			},
			{
				func: fetchHookData(useTerms.fetcher(), context, {
					params: { taxonomy: 'tag', _fields: ['id','name','link'] },
				}),
			},
		]);

		return addHookData([...hookData, appSettings], {
			props: { homePageSlug: slug },
			revalidate: 5 * 60,
		});
	} catch (e) {
		return handleError(e, context);
	}
}