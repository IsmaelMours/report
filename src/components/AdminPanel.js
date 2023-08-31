import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleUpdate = async (updatedUser) => {
    try {
      await axios.put(`http://localhost:3001/users/${updatedUser.id}`, updatedUser);
      setSelectedUser(null);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - User Management</h2>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user">
            <p>{user.fullName}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="user-edit-form">
          <h3>Edit User</h3>
          <input
            type="text"
            value={selectedUser.fullName}
            onChange={(e) =>
              setSelectedUser((prev) => ({ ...prev, fullName: e.target.value }))
            }
          />
          <input
            type="email"
            value={selectedUser.email}
            onChange={(e) =>
              setSelectedUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            type="text"
            value={selectedUser.role}
            onChange={(e) =>
              setSelectedUser((prev) => ({ ...prev, role: e.target.value }))
            }
          />
          <button onClick={() => handleUpdate(selectedUser)}>Update</button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
