import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // ✅ Import Link for navbar
import './TicketPage.css'; 
import Footer from '../components/Footer';

export default function TicketPage() {
  const [ticketDetails, setTicketDetails] = useState({ title: '', description: '', status: 'OPEN' });
  const [tickets, setTickets] = useState([]);

  // Fetch all tickets/complaints from backend
  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://localhost:8080/complaint-service/api/complaints'); // Backend endpoint
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleSubmit = async () => {
    if (!ticketDetails.title || !ticketDetails.description) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/complaint-service/api/complaints', ticketDetails);
      alert('Ticket submitted successfully!');
      setTicketDetails({ title: '', description: '', status: 'OPEN' });
      fetchTickets(); // Refresh the list
    } catch (error) {
      console.error('Error submitting ticket:', error);
      alert('Failed to submit ticket.');
    }
  };

  return (
    <div className="ticket-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: '1' }}>

        {/* ✅ Inline Navbar from Dashboard */}
        <div className="dashboard-actions mb-4">
          <Link to="/plans" className="btn btn-primary dashboard-btn">Browse Plans</Link>
          <Link to="/datausage" className="btn btn-secondary dashboard-btn">Data Usage</Link>
          <Link to="/ticket" className="btn btn-warning dashboard-btn">Raise Ticket</Link>
          <Link to="/profile" className="btn btn-info dashboard-btn">Profile</Link>
        </div>

        <div className="form-card">
          <h2>Raise a Complaint / Ticket</h2>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={ticketDetails.title}
                onChange={(e) => setTicketDetails({ ...ticketDetails, title: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="4"
                value={ticketDetails.description}
                onChange={(e) => setTicketDetails({ ...ticketDetails, description: e.target.value })}
              />
            </div>
            <button type="button" onClick={handleSubmit}>
              Submit Ticket
            </button>
          </form>
        </div>

        <div className="tickets-list">
          {/* Your tickets will be displayed here */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
















//                WORKING
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './TicketPage.css'; // Keep your existing CSS
// import Footer from '../components/Footer';

// export default function TicketPage() {
//   const [ticketDetails, setTicketDetails] = useState({ title: '', description: '', status: 'OPEN' });
//   const [tickets, setTickets] = useState([]);

//   // Fetch all tickets/complaints from backend
//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const fetchTickets = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/complaint-service/api/complaints'); // Backend endpoint
//       setTickets(response.data);
//     } catch (error) {
//       console.error('Error fetching tickets:', error);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!ticketDetails.title || !ticketDetails.description) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:8080/complaint-service/api/complaints', ticketDetails);
//       alert('Ticket submitted successfully!');
//       setTicketDetails({ title: '', description: '', status: 'OPEN' });
//       fetchTickets(); // Refresh the list
//     } catch (error) {
//       console.error('Error submitting ticket:', error);
//       alert('Failed to submit ticket.');
//     }
//   };

//   return (
//     <div className="ticket-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <div style={{ flex: '1' }}>
//         <div className="form-card">
//           <h2>Raise a Complaint / Ticket</h2>
//           <form>
//             <div className="form-group">
//               <label htmlFor="title">Title</label>
//               <input
//                 type="text"
//                 id="title"
//                 value={ticketDetails.title}
//                 onChange={(e) => setTicketDetails({ ...ticketDetails, title: e.target.value })}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 rows="4"
//                 value={ticketDetails.description}
//                 onChange={(e) => setTicketDetails({ ...ticketDetails, description: e.target.value })}
//               />
//             </div>
//             <button type="button" onClick={handleSubmit}>
//               Submit Ticket
//             </button>
//           </form>
//         </div>

//         <div className="tickets-list">
//           {/* Your tickets will be displayed here */}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }














// // src/pages/TicketPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './TicketPage.css'; // Keep your existing CSS
// import Footer from '../components/Footer';

// export default function TicketPage() {
//   const [ticketDetails, setTicketDetails] = useState({ title: '', description: '', status: 'OPEN' });
//   const [tickets, setTickets] = useState([]);

//   // Fetch all tickets/complaints from backend
//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const fetchTickets = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/complaint-service/api/complaints'); // Backend endpoint
//       setTickets(response.data);
//     } catch (error) {
//       console.error('Error fetching tickets:', error);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!ticketDetails.title || !ticketDetails.description) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:8080/complaint-service/api/complaints', ticketDetails);
//       alert('Ticket submitted successfully!');
//       setTicketDetails({ title: '', description: '', status: 'OPEN' });
//       fetchTickets(); // Refresh the list
//     } catch (error) {
//       console.error('Error submitting ticket:', error);
//       alert('Failed to submit ticket.');
//     }
//   };

//   return (
//     <div className="ticket-page">
//       <div className="form-card">
//         <h2>Raise a Complaint / Ticket</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               id="title"
//               value={ticketDetails.title}
//               onChange={(e) => setTicketDetails({ ...ticketDetails, title: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               rows="4"
//               value={ticketDetails.description}
//               onChange={(e) => setTicketDetails({ ...ticketDetails, description: e.target.value })}
//             />
//           </div>
//           <button type="button" onClick={handleSubmit}>
//             Submit Ticket
//           </button>
//         </form>
//       </div>

//       <div className="tickets-list">

//       </div>

//       <Footer />
//     </div>
//   );
// }


















// // src/pages/TicketPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './TicketPage.css'; // Keep your existing CSS
// import Footer from '../components/Footer';

// export default function TicketPage() {
//   const [ticketDetails, setTicketDetails] = useState({ title: '', description: '', status: 'OPEN' });
//   const [tickets, setTickets] = useState([]);

//   // Fetch all tickets/complaints from backend
//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const fetchTickets = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/complaint-service/api/complaints'); // Backend endpoint
//       setTickets(response.data);
//     } catch (error) {
//       console.error('Error fetching tickets:', error);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!ticketDetails.title || !ticketDetails.description) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:8080/complaint-service/api/complaints', ticketDetails);
//       alert('Ticket submitted successfully!');
//       setTicketDetails({ title: '', description: '', status: 'OPEN' });
//       fetchTickets(); // Refresh the list
//     } catch (error) {
//       console.error('Error submitting ticket:', error);
//       alert('Failed to submit ticket.');
//     }
//   };

//   return (
//     <div className="ticket-page">
//       <div className="form-card">
//         <h2>Raise a Complaint / Ticket</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               id="title"
//               value={ticketDetails.title}
//               onChange={(e) => setTicketDetails({ ...ticketDetails, title: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               rows="4"
//               value={ticketDetails.description}
//               onChange={(e) => setTicketDetails({ ...ticketDetails, description: e.target.value })}
//             />
//           </div>
//           <button type="button" onClick={handleSubmit}>
//             Submit Ticket
//           </button>
//         </form>
//       </div>

//       <div className="tickets-list">
//         {/* <h2>All Tickets / Complaints</h2> */}
//         <table>
//           <thead>
//             <tr>
//               {/* <th>ID</th>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Status</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {tickets.map((ticket) => (
//               <tr key={ticket.id}>
//                 <td>{ticket.id}</td>
//                 <td>{ticket.title}</td>
//                 <td>{ticket.description}</td>
//                 <td>{ticket.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Footer />
//     </div>
//   );
// }















// // src/pages/TicketPage.js
// import React, { useState } from 'react';
// import './TicketPage.css'; // Importing CSS file from the same folder
// import Footer from '../components/Footer';

// export default function TicketPage() {
//   const [ticketDetails, setTicketDetails] = useState({ name: '', email: '', issue: '' });

//   const handleSubmit = () => {
//     alert('Ticket submitted successfully!');
//   };

//   return (
//     <div className="ticket-page">
//       <div className="form-card">
//         <h2>Raise a Complaint / Ticket</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               value={ticketDetails.name}
//               onChange={(e) => setTicketDetails({ ...ticketDetails, name: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={ticketDetails.email}
//               onChange={(e) => setTicketDetails({ ...ticketDetails, email: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="issue">Issue</label>
//             <textarea
//               id="issue"
//               rows="4"
//               value={ticketDetails.issue}
//               onChange={(e) => setTicketDetails({ ...ticketDetails, issue: e.target.value })}
//             />
//           </div>
//           <button type="button" onClick={handleSubmit}>
//             Submit Ticket
//           </button>
//         </form>
//       </div>
//       <Footer /> {/* Footer stays at bottom */}
//     </div>
//   );
// }
