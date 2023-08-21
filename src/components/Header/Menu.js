// Import dependencies
import PropTypes from 'prop-types';

// Import components
import Link from '@/components/Link';

/**
 * Menu component to render navigation links.
 *
 * @component
 * @param {Object} props - The props passed to the component.
 * @param {Object[]} props.navigationLinks - Array of navigation links.
 * @param {string} props.navigationLinks[].id - Unique identifier for the link.
 * @param {string} props.navigationLinks[].url - URL of the link.
 * @param {string} props.navigationLinks[].label - Label of the link.
 * @param {Object} props.router - Router object from Next.js.
 * @returns {JSX.Element} - Rendered component.
 */
const Menu = ({ navigationLinks, router }) => {
  return (
    <ul className="header-menu">
      {navigationLinks.map((link) => (
        <li
          key={link.id}
          style={{
            textDecoration: router.asPath.indexOf(link.url) > -1 ? 'underline' : 'none',
          }}
        >
          <Link href={link.url}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

/**
 * PropTypes for the Menu component.
 * 
 * @property {Object[]} navigationLinks - Array of navigation links.
 * @property {number} navigationLinks[].id - Unique identifier for the link.
 * @property {string} navigationLinks[].url - URL of the link.
 * @property {string} navigationLinks[].label - Label of the link.
 * @property {Object} router - Router object from Next.js.
 * @returns {Object} - PropTypes object.
 */
Menu.propTypes = {
  navigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  router: PropTypes.object.isRequired,
};

export default Menu;
