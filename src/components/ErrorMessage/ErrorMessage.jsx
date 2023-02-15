import PropTypes from 'prop-types';
import { ErrorNotify } from './ErrorMessage.styled';

const Error = ({ message }) => {
  return <ErrorNotify>{message}</ErrorNotify>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
