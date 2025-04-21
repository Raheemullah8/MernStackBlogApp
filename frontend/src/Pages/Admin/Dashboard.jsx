import React from 'react';

function Dashboard() {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Total Users */}
        <div className="col-12 col-md-4 mb-4">
          <div className="dashboard-box bg-primary text-white text-center p-4 rounded">
            <h3>Total Users</h3>
            <p>120</p>
          </div>
        </div>

        {/* Total Posts */}
        <div className="col-12 col-md-4 mb-4">
          <div className="dashboard-box bg-success text-white text-center p-4 rounded">
            <h3>Total Posts</h3>
            <p>56</p>
          </div>
        </div>

        {/* Total Comments */}
        <div className="col-12 col-md-4 mb-4">
          <div className="dashboard-box bg-warning text-white text-center p-4 rounded">
            <h3>Total Comments</h3>
            <p>300</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
