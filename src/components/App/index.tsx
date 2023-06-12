import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { persistor, store } from "store";
import { PersistGate } from "redux-persist/integration/react";
import AppContent from "components/AppContent";

import '../../scss/index.scss'

function App() {
	return (
		<BrowserRouter>
			<ReduxProvider store={store}>
				<PersistGate persistor={persistor}>
					<AppContent/>
				</PersistGate>
			</ReduxProvider>
		</BrowserRouter>
	);
}

export default App;
