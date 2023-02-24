import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Buttons.styled';

const Buttons = ({ onHandleIncrement }) => (
  <>
    <Button type="button" name="good" onClick={onHandleIncrement}>
      Good
    </Button>
    <Button type="button" name="neutral" onClick={onHandleIncrement}>
      Neutral
    </Button>
    <Button type="button" name="bad" onClick={onHandleIncrement}>
      Bad
    </Button>
  </>
);

export default Buttons;

Buttons.propTypes = {
  onHandleIncrement: PropTypes.func.isRequired,
};
