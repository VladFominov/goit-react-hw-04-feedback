import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <div>
      <h2>{title}</h2>

      <div>{children}</div>
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
