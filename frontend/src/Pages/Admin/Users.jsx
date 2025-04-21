import React from 'react';

function Users() {
  // Mock user data
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah.wilson@example.com' },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center text-white mb-4">Users</h2>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover table-striped table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
