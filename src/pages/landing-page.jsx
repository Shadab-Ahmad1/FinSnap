// import React from 'react';
// import { Link } from 'react-router-dom';

// const LandingPage = () => (
//   <div>
//     <h1>Welcome to Our Application</h1>
//     <p>This is the landing page.</p>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//       </ul>
//     </nav>
//   </div>
// );

// export default LandingPage;
import { Helmet } from 'react-helmet-async';
import { LandingView } from 'src/sections/landing'; // Import your LandingPage view

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>FinSnap</title>
      </Helmet>

      <div className="container py-5">
        {' '}
        {/* Bootstrap's container and padding */}
        <LandingView />
      </div>
    </>
  );
}
