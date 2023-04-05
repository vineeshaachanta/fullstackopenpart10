import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import theme from '../../theme';
import styles from './LoadOMakerStyles';
LoadOMaker.propTypes = {
  loading: PropTypes.bool,
};
LoadOMaker.defaultProps = {
  loading: false,
};
function LoadOMaker({ loading }) {
  return loading
    ? <ActivityIndicator style={styles.LoadOMaker} size="large" color={theme.colors.primary}/>
    : null;
}
export default LoadOMaker;
