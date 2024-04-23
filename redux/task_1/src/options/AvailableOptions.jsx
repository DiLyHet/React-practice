import React from 'react';
import { connect } from 'react-redux';
import Options from './Options';

const mapStateToProps = state => ({
  options: state.optionsList,
});

const mapDispatchToProps = dispatch => ({
  moveOptionToSelected: selectedOption => dispatch({ type: 'MOVE_OPTION_TO_SELECTED', payload: selectedOption }),
});

const AvailableOptions = ({ options, moveOptionToSelected }) => (
  <Options title="Available options" options={options} onItemClick={moveOptionToSelected} />
);

export default connect(mapStateToProps, mapDispatchToProps)(AvailableOptions);
