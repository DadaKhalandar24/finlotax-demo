// // components/Dashboard.js
// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
//             RK
//           </div>
//           <div>
//             <p className="font-semibold">Rohit Kumar</p>
//             <p className="text-sm text-gray-600">Admin</p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-sm border">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-2xl font-bold text-gray-800">$42,580</p>
//               <p className="text-gray-600">Total Revenue</p>
//             </div>
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//               <span className="text-2xl">💰</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm border">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-2xl font-bold text-gray-800">128</p>
//               <p className="text-gray-600">Active Clients</p>
//             </div>
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//               <span className="text-2xl">👥</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm border">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-2xl font-bold text-gray-800">+12.5%</p>
//               <p className="text-gray-600">Growth This Month</p>
//             </div>
//             <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//               <span className="text-2xl">📈</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow-sm border p-6">
//         <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
//         <div className="space-y-4">
//           {[
//             "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
//             "INV-00000302 has been created - Sep 08 2025 09:28",
//             "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
//             "INV-00000302 has been created - Sep 08 2025 09:28"
//           ].map((activity, index) => (
//             <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded">
//               <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                 <span className="text-sm">📄</span>
//               </div>
//               <div>
//                 <p className="text-gray-800">{activity.split(' - ')[0]}</p>
//                 <p className="text-sm text-gray-500">{activity.split(' - ')[1]}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            RK
          </div>
          <div>
            <p className="font-semibold">Rohit Kumar</p>
            <p className="text-sm text-gray-600">Admin</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-800">$42,580</p>
              <p className="text-gray-600">Total Revenue</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-800">128</p>
              <p className="text-gray-600">Active Clients</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-800">+12.5%</p>
              <p className="text-gray-600">Growth This Month</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
            "INV-00000302 has been created - Sep 08 2025 09:28",
            "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
            "INV-00000302 has been created - Sep 08 2025 09:28"
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm">📄</span>
              </div>
              <div>
                <p className="text-gray-800">{activity.split(' - ')[0]}</p>
                <p className="text-sm text-gray-500">{activity.split(' - ')[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;