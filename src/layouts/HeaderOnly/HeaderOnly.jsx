import PropTypes from 'prop-types';
import Nav from '../components/Nav/Nav';

function HeaderOnly({ children }) {
    return (
        <main>
            <Nav />
            {children}
        </main>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
