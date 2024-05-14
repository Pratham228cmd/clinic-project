import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import Lab from './pages/Lab/Lab';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			

			<Router>
			<Navbar/>
				<Routes>
				
					<Route path='/about' element={<About />} />
					<Route path='/Appointment' element={<Appointment />} />
					<Route path='/Home' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='/Lab' element={<Lab />} />
					<Route path='/SignIn' element={<Signin />} />
					{/* <Route path='/SignUp' element={<Signup />} /> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
