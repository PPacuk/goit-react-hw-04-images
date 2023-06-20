import { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export default class Loader extends Component {
  render() {
    return <InfinitySpin width="200" color="#3f51b5" />;
  }
}
