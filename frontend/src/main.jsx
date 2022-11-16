import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// styles
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';

// redux
import { store } from './app/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
