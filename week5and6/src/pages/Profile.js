import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Link,
  Route
} from 'react-router-dom'

const Profile = () => {
  // const { path, url } = useRouteMatch();
  const [user, setUser] = useState({
    name: 'PARANTHAMAN L',
    email: 'paranthaman@example.com',
    phone: '9626474259',
    address: 'Coimbatore',
  });

  return (
    <>
      <div className="profile-page">
        <aside className="sidebar">
          <div className="profile-picture">
            <img src="https://via.placeholder.com/100" alt="Profile" />
            <p>{user.name}</p>
          </div>
          <nav>
            <ul>
              <li><Link to={`/orders`}>Orders</Link></li>
              <li><Link to={`/wishlist`}>Wishlist</Link></li>
              <li><Link to={`/settings`}>Settings</Link></li>
            </ul>
          </nav>
        </aside>
        <div className="profile-details">
          <h2>Personal Details</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>
      <div>
        <h2>Your Orders</h2>
        <p>No orders to display.</p>
      </div>
      </div>
    </>
  );
};

const Orders = () => (
  <div>
    <h2>Your Orders</h2>
    <p>No orders to display.</p>
  </div>
);

const Wishlist = () => (
  <div>
    <h2>Your Wishlist</h2>
    <p>No items in your wishlist.</p>
  </div>
);

const Settings = () => (
  <div>
    <h2>Settings</h2>
    <p>Settings content here.</p>
  </div>
);

export default Profile