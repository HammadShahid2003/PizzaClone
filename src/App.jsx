/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Homepage from './Components/HomePage';
import { Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import NavigationBar from './Components/Header';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import cartStore from './Store/Store';
import Admin from './Components/Admin Panel/Admin';
import { LoginProvider } from './LoginContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
    return (
        <Provider store={cartStore}>
            <LoginProvider>
                <Layout style={{ width: '100vw', height: '100vh' }}>
                    <NavigationBar />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="/admin" element={<ProtectedRoute element={Admin} />} />
                    </Routes>
                </Layout>
            </LoginProvider>
        </Provider>
    );
}

export default App;
