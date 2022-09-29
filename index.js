/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import { name as appName } from './app.json';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Main = () => (
    <PaperProvider settings={{ icon: props => <AntDesign {...props} /> }}>
        <App />
    </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Main);
