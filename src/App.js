import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Profile from './components/Profile';
import { UserProvider,useUser } from "./lib/context/user";


function App() {
  const isLoginPage = window.location.pathname === "/signin";

  return (
    <>
    <UserProvider>
    <Navbar />
    <main>
          {({ isLoginPage }) => (
            isLoginPage ? <Signin /> : <Home />
          )}
        </main>
        <Routes>
       
           <Route path="/" element={<Home />} />
           <Route path="/signin" element={<Signin />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/profile" element={<Profile />} />
       </Routes>
       </UserProvider>
 
 
 </>
  );
}

export default App;

// function Nav() {
//   const user = useUser();

//   return (
//     <nav>
//       <a href="/">Idea tracker</a>
//       <div>
//         {user.current ? (
//           <>
//             <span>{user.current.email}</span>
//             <button type="button" onClick={() => user.logout()}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <a href="/signin">Signin</a>
//         )}
//       </div>
//     </nav>
//   );
// }

