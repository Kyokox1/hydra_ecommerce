import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { initialOptions } from './constans/paypalOptions';

// styles
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';

// redux
import { store } from './app/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { SearchProvider } from './context/searchContext';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SearchProvider>
					<PayPalScriptProvider options={initialOptions}>
						<ChakraProvider theme={theme}>
							<App />
						</ChakraProvider>
					</PayPalScriptProvider>
				</SearchProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
