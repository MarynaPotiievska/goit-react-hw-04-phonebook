import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ onChange, value }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" name="name" value={value} onChange={onChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
