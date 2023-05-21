import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import CustomRoutes from './routes/customRoutes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomRoutes />
      </div>
    </Provider>
  );
}

export default App;
