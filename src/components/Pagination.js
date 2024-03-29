// Import dependencies
import PropTypes from 'prop-types';
import { styled } from '@linaria/react';
import { useRouter } from 'next/router';

// Import components
import Link from '@/components/Link';

/**
 * Styled component for the pagination container.
 */
const PaginationContainer = styled.ul`
	display: flex;
	justify-content: center;
	gap: 1em;
	border-top: 1px solid var(--color-border);
	padding-top: 0.5em;
`;

/**
 * Styled component for an individual pagination item.
 */
const PaginationItem = styled.li`
	background: var(--color-secondary);
	border-radius: var(--border-radius);
	border: 1px solid var(--color-border);
	box-shadow: 0 0 5px var(--color-border);
	transition: all 0.2s ease;
	list-style: none;
	a {
		color: black;
		border: none;
		padding: 5px 10px;
		display: inline-block;
	}
	:hover {
		background: var(--color-tertiary);
		color: var(--color-secondary);
		a {
			color: var(--color-secondary);
		}
	}
`;

/**
 * Pagination component to navigate between pages.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.pageInfo - Pagination information.
 * @param {number} props.pageInfo.page - Current page number.
 * @param {number} props.pageInfo.totalItems - Total number of items.
 * @param {number} props.pageInfo.totalPages - Total number of pages.
 * @returns {JSX.Element|null} - Pagination JSX element or null if only one page.
 */
export const Pagination = ({ pageInfo }) => {
	const { asPath } = useRouter();
	const path = !asPath.includes('/page') ? `${asPath}/page/1` : asPath;

	if (pageInfo.totalPages === 1) {
		return null;
	}

	return (
		<PaginationContainer>
			{pageInfo.page > 1 && (
				<PaginationItem>
					<Link
						href={path.replace(
							`/page/${pageInfo.page}`,
							pageInfo.page > 2 ? `/page/${pageInfo.page - 1}` : '',
						)}
					>
						Prev
					</Link>
				</PaginationItem>
			)}
			{Array.from(Array(pageInfo.totalPages).keys()).map((page) => (
				<PaginationItem key={page + 1}>
					{pageInfo.page !== page + 1 ? (
						<Link
							href={path.replace(
								`/page/${pageInfo.page}`,
								page > 0 ? `/page/${page + 1}` : '',
							)}
						>
							{page + 1}
						</Link>
					) : (
						<a style={{
							cursor: 'not-allowed',
						}}>{page + 1}</a>
					)}
				</PaginationItem>
			))}
			{pageInfo.page < pageInfo.totalPages && (
				<PaginationItem>
					<Link
						href={path.replace(`/page/${pageInfo.page}`, `/page/${pageInfo.page + 1}`)}
					>
						Next
					</Link>
				</PaginationItem>
			)}
		</PaginationContainer>
	);
};

// Define PropTypes for the Pagination component
Pagination.propTypes = {
	/**
	 * Pagination information.
	 */
	pageInfo: PropTypes.shape({
		/**
		 * Current page number.
		 */
		page: PropTypes.number.isRequired,
		/**
		 * Total number of items.
		 */
		totalItems: PropTypes.number.isRequired,
		/**
		 * Total number of pages.
		 */
		totalPages: PropTypes.number.isRequired,
	}).isRequired,
};

export default Pagination;
