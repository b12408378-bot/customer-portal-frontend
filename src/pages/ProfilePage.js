// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import './ProfilePage.css';

// export default function ProfilePage() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // ✅ Get userId from localStorage
//     const storedUserId = localStorage.getItem("userId");
//     let url = "http://localhost:8080/user-service/users/me";

//     if (storedUserId) {
//       url += `?overrideId=${storedUserId}`;
//     }

//     fetch(url)
//       .then((response) => {
//         if (!response.ok) throw new Error("Failed to fetch user profile");
//         return response.json();
//       })
//       .then((data) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="profile-page"><h2>Loading Profile...</h2></div>;
//   }

//   if (error) {
//     return <div className="profile-page"><h2>Error: {error}</h2></div>;
//   }

//   return (
//     <div className="profile-page">
//       <div className="profile-container mt-5">
//         <div className="profile-header">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
//             alt="Profile Icon"
//             className="profile-image"
//           />
//           <h2 className="profile-title">My Profile</h2>
//         </div>

//         <div className="profile-info">
//           <p className="profile-welcome">
//             Welcome back, <strong>{user.username}</strong>!
//           </p>
//           <ul className="profile-details">
//             <li><strong>User ID:</strong> {user.user_id}</li>
//             <li><strong>Username:</strong> {user.username}</li>
//             <li><strong>Email:</strong> {user.email}</li>
//             <li><strong>Phone:</strong> {user.phone_number}</li>
//             <li><strong>Plan Type:</strong> {user.planType}</li>
//           </ul>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }








import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import './ProfilePage.css';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ Fetch the latest registered user (no hardcode, no session)
    fetch("http://localhost:8080/user-service/users/latest")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch user profile");
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="profile-page">
        <h2>Loading Profile...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-page">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container mt-5">
        <div className="profile-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile Icon"
            className="profile-image"
          />
          <h2 className="profile-title">My Profile</h2>
        </div>

        <div className="profile-info">
          <p className="profile-welcome">
            Welcome back, <strong>{user.username}</strong>!
          </p>
          <ul className="profile-details">
            <li><strong>User ID:</strong> {user.user_id}</li>
            <li><strong>Username:</strong> {user.username}</li>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Phone:</strong> {user.phone_number}</li>
            <li><strong>Plan Type:</strong> {user.planType}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}












// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import './ProfilePage.css';

// export default function ProfilePage() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/user-service/users/me")   // ✅ no more hardcoded userId
//       .then((response) => {
//         if (!response.ok) throw new Error("Failed to fetch user profile");
//         return response.json();
//       })
//       .then((data) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []); // ✅ no dependency needed

//   if (loading) {
//     return <div className="profile-page"><h2>Loading Profile...</h2></div>;
//   }

//   if (error) {
//     return <div className="profile-page"><h2>Error: {error}</h2></div>;
//   }

//   return (
//     <div className="profile-page">
//       <div className="profile-container mt-5">
//         <div className="profile-header">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
//             alt="Profile Icon"
//             className="profile-image"
//           />
//           <h2 className="profile-title">My Profile</h2>
//         </div>

//         <div className="profile-info">
//           <p className="profile-welcome">
//             Welcome back, <strong>{user.username}</strong>!
//           </p>
//           <ul className="profile-details">
//             <li><strong>User ID:</strong> {user.user_id}</li>
//             <li><strong>Username:</strong> {user.username}</li>
//             <li><strong>Email:</strong> {user.email}</li>
//             <li><strong>Phone:</strong> {user.phone_number}</li>
//             <li><strong>Plan Type:</strong> {user.planType}</li>
//           </ul>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }











// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import './ProfilePage.css';

// export default function ProfilePage() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Replace this with actual logged-in user ID (from login/session/localStorage)
//   const loggedInUserId = 1;

//   useEffect(() => {
//     fetch(`http://localhost:8080/api/users/${loggedInUserId}`)
//       .then((response) => {
//         if (!response.ok) throw new Error('Failed to fetch user profile');
//         return response.json();
//       })
//       .then((data) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [loggedInUserId]);

//   if (loading) {
//     return <div className="profile-page"><h2>Loading Profile...</h2></div>;
//   }

//   if (error) {
//     return <div className="profile-page"><h2>Error: {error}</h2></div>;
//   }

//   return (
//     <div className="profile-page">
//       <div className="profile-container mt-5">
//         <div className="profile-header">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
//             alt="Profile Icon"
//             className="profile-image"
//           />
//           <h2 className="profile-title">My Profile</h2>
//         </div>

//         <div className="profile-info">
//           <p className="profile-welcome">
//             Welcome back, <strong>{user.username}</strong>!
//           </p>
//           <ul className="profile-details">
//             <li><strong>User ID:</strong> {user.user_id}</li>
//             <li><strong>Username:</strong> {user.username}</li>
//             <li><strong>Email:</strong> {user.email}</li>
//             <li><strong>Phone:</strong> {user.phone_number}</li>
//             <li><strong>Plan Type:</strong> {user.planType}</li>
//           </ul>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
















// // src/pages/ProfilePage.js
// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import './ProfilePage.css';

// export default function ProfilePage() {
//   // Temporary placeholders – replace with actual session data when login system is ready
//   const [userId, setUserId] = useState('USR123456');
//   const [userName, setUserName] = useState('John Doe');

//   useEffect(() => {
//     // In a real app, fetch user details from localStorage, API, or context
//     // Example:
//     // const user = JSON.parse(localStorage.getItem("loggedInUser"));
//     // setUserId(user?.id);
//     // setUserName(user?.name);
//   }, []);

//   return (
//     <div className="profile-page">
//       <div className="profile-container mt-5">
//         <div className="profile-header">
//           <img 
//             src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
//             alt="Profile Icon" 
//             className="profile-image"
//           />
//           <h2 className="profile-title">My Profile</h2>
//         </div>

//         <div className="profile-info">
//           <p className="profile-welcome">Welcome back, <strong>{userName}</strong>!</p>
//           <ul className="profile-details">
//             <li><strong>User ID:</strong> {userId}</li>
//             <li><strong>Username:</strong> {userName}</li>
//             <li><strong>Plan:</strong> Premium Fiber 100 Mbps</li>
//           </ul>
//           {/* <button className="edit-profile-btn">Edit Profile</button> */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
