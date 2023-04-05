import React from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';
import FoOrmikTextInput from '../../FoOrmikTextInput';
import styles from './foOrmStyles';

FoOrm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function FoOrm({ onSubmit }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FoOrmikTextInput
          style={styles.input}
          name="username"
          placeholder="Username"
          testID="usernameField"
        />
      </View>
      <View style={styles.inputContainer}>
        <FoOrmikTextInput
          style={styles.input}
          name="password"
          placeholder="Password"
          secureTextEntry
          testID="passwordField"
        />
      </View>
      <Button title="Sign in" onPress={onSubmit} testID="submitButton"/>
    </View>
  );
}

export default FoOrm;
