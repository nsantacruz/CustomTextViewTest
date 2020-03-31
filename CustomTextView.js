import React, { Component } from 'react';
import { NativeModules, requireNativeComponent } from 'react-native';

class CustomTextView extends Component {
  render() {
    return (<RCTCustomTextView {...this.props} />);
  }
}

var RCTCustomTextView = requireNativeComponent('RCTCustomTextView', CustomTextView);

export default CustomTextView;
