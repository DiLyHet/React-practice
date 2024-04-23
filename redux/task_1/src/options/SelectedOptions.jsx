import React from 'react';
import { connect } from 'react-redux';
import Options from './Options';

const mapStateToProps = state => ({
  options: state.selected,
});

const mapDispatchToProps = dispatch => ({
  moveOptionToAvailable: selectedOption => dispatch({ type: 'MOVE_OPTION_TO_AVAILABLE', payload: selectedOption }),
});

const SelectedOptions = ({ options, moveOptionToAvailable }) => (
  <Options title="Selected options" options={options} onItemClick={moveOptionToAvailable} />
);

export default connect(mapStateToProps, mapDispatchToProps)(SelectedOptions);
