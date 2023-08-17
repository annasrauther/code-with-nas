import { styled } from '@linaria/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from './Link';

const PaginationContainer = styled.ul`
	display: flex;
	width: 100%;
	justify-content: center;
	gap: 1em;
	border-top: 2px solid rgba(0,0,0,0.1);
	padding-top: 0.5em;
`;

const PaginationItem = styled.li`
	background: white;
	padding: 5px 10px;
	border-radius: 3px;
	border: 1px solid rgba(0,0,0,0.1);
	box-shadow: 0 0 5px rgba(0,0,0,0.1);
	transition: all 0.3s ease;
	list-style: none;
	a {
		color: black;
		border: none;
	}
	:hover {
		background: #330;
		color: white;
		a {
			color: white;
		}
	}
`;

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
						page + 1
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

Pagination.propTypes = {
	pageInfo: PropTypes.shape({
		page: PropTypes.number,
		totalItems: PropTypes.number,
		totalPages: PropTypes.number,
	}).isRequired,
};