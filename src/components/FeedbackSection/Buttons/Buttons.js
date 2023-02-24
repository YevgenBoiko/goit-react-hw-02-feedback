import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Buttons.styled';

const Buttons = ({ onGoodIncrement, onNeutralIncrement, onBadIncrement }) => (
  <>
    <Button type="button" onClick={onGoodIncrement}>
      Good
    </Button>
    <Button type="button" onClick={onNeutralIncrement}>
      Neutral
    </Button>
    <Button type="button" onClick={onBadIncrement}>
      Bad
    </Button>
  </>
);

export default Buttons;

Buttons.propTypes = {
  onGoodIncrement: PropTypes.func.isRequired,
  onNeutralIncrement: PropTypes.func.isRequired,
  onBadIncrement: PropTypes.func.isRequired,
};
