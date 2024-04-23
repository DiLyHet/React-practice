import React from 'react';
import { connect } from 'react-redux';
import Options from './Options';

const mapStateToProps = state => ({
  options: state.selected,
});

const SelectedOptions = ({ options }) => (
  <Options title="Selected options" options={options} />
);

export default connect(mapStateToProps)(SelectedOptions);
