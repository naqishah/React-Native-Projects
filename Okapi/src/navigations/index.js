import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigator';
import UnAuthNavigator from './unauth-navigator';

const RootNavigator = createSwitchNavigator(
  {
    UnAuth: UnAuthNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'UnAuth',
  },
);

export default createAppContainer(RootNavigator);
