import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap'; // Importing Bootstrap components
import { toast, ToastContainer } from 'react-toastify'; // Importing toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importing toast CSS
import Allpost from './Allpost';

const Allusers = () => {
  const [user, setUser] = useState([]);

  // Fetch users from backend
  const getAllUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/auth');
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete a user by their ID
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/${id}`);
      setUser(user.filter((item) => item._id !== id)); // Remove user from the state
      toast.success('User removed successfully!'); // Success toast
    } catch (error) {
      console.log(error);
      toast.error('Error removing user!'); // Error toast
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="container mt-5">
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick />

      <h1 className="mb-4">All Users</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 ? (
            user.map((item) => (
              <tr key={item._id}>
                <td>{item.username}   ({item.role})</td>
                <td>{item.email}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteUser(item._id)}
                  >
                    Remove User
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <section>
        <Allpost/>
      </section>
         
    </div>

  );
};

export default Allusers;
