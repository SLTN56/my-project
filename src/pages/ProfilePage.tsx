import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold">User Information</h2>
          <p className="text-gray-600">
            Name: John Doe
            <br />
            Email: john@example.com
            <br />
            Membership: Premium
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Purchase History</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b pb-2 text-left">Event</th>
                <th className="border-b pb-2 text-right">Price</th>
                <th className="border-b pb-2 text-right">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-2">Live Concert: Afropop Fusion</td>
                <td className="border-b py-2 text-right">$9.99</td>
                <td className="border-b py-2 text-right">January 15, 2025</td>
              </tr>
              <tr>
                <td className="border-b py-2">Premier League Highlights</td>
                <td className="border-b py-2 text-right">$4.99</td>
                <td className="border-b py-2 text-right">January 22, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;