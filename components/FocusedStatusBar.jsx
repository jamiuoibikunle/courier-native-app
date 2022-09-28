import {StatusBar} from 'react-native';
import React from 'react';

const FocusedStatusBar = props => {
  return <StatusBar animated={true} {...props} />;
};

export default FocusedStatusBar;
