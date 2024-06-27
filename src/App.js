import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Store from './Pages/Store';
import Layout from './Components/Layout';
import Cart from './Pages/Cart'
import Login from './Components/LinkComponents/Login';
import { ThemeProvider } from 'styled-components';
import ForgotPassword from './Components/LinkComponents/ForgotPassword';
import SubmitOTP from './Components/LinkComponents/SubmitOTP';
import SignUp from './Components/LinkComponents/SignUp';
import ResetPassword from './Components/LinkComponents/ResetPassword'
import Help from './Components/LinkComponents/Help';
import PrivacyPolicy from './Components/LinkComponents/Policies/PrivacyPolicy';
import RefundReturnPolicy from './Components/LinkComponents/Policies/RefundReturnPolicy';
import TermsConditions from './Components/LinkComponents/Policies/TermsConditions';

function App() {

  const theme = {
    colors: {
      bg: "#fff",
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<Store />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgotpass" element={<ForgotPassword />} />
            <Route path="submitotp" element={<SubmitOTP />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="help" element={<Help />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-return-policy" element={<RefundReturnPolicy />} />
            <Route path="terms-conditions" element={<TermsConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
