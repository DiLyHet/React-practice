import React from 'react';
import { connect } from 'react-redux';
import Options from './Options';

const mapStateToProps = state => ({
  options: state.optionsList,
});

const mapDispatchToProps = dispatch => ({
  moveOption: selectedOption => dispatch({ type: 'MOVE_OPTION', payload: selectedOption }),
});

const AvailableOptions = ({ options, moveOption }) => (
  <Options title="Available options" options={options} moveOption={moveOption} />
);

export default connect(mapStateToProps, mapDispatchToProps)(AvailableOptions);
