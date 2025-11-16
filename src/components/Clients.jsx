// // components/Clients.js
// import React from 'react';

// const Clients = ({ onClientSelect }) => {
//   const clients = [
//     {
//       id: 1,
//       name: 'Kiran Pasula',
//       email: 'kiranpasula@gmail.com',
//       branch: 'Sunnyvale-USA',
//       phone: '+1(408) 555-9876',
//       manager: 'Rajashnee Pawar',
//       employee: 'Ramya Subramanian'
//     },
//     {
//       id: 2,
//       name: 'Kiran Pasula',
//       email: 'kiranpasula@gmail.com',
//       branch: 'Sunnyvale-USA',
//       phone: '+1(408) 555-9876',
//       manager: 'Rajashnee Pawar',
//       employee: 'Ramya Subramanian'
//     },
//     {
//       id: 3,
//       name: 'Kiran Pasula',
//       email: 'kiranpasula@gmail.com',
//       branch: 'Sunnyvale-USA',
//       phone: '+1(408) 555-9876',
//       manager: 'Rajashnee Pawar',
//       employee: 'Ramya Subramanian'
//     },
//     {
//       id: 4,
//       name: 'Kiran Pasula',
//       email: 'kiranpasula@gmail.com',
//       branch: 'Sunnyvale-USA',
//       phone: '+1(408) 555-9876',
//       manager: 'Rajashnee Pawar',
//       employee: 'Ramya Subramanian'
//     }
//   ];

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Clients</h1>
//         <div className="flex items-center space-x-4">
//           <div className="text-right">
//             <p className="font-semibold">Rohit Kumar</p>
//           </div>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//             Create Client
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">S.No</th>
//               <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Client Name</th>
//               <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Branch Office</th>
//               <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Phone</th>
//               <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Manager</th>
//               <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Employee</th>
//               <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client, index) => (
//               <tr 
//                 key={client.id} 
//                 className="hover:bg-gray-50 cursor-pointer border-b"
//                 onClick={() => onClientSelect(client)}
//               >
//                 <td className="p-4">{index + 1}.</td>
//                 <td className="p-4">
//                   <div className="font-medium">{client.name}</div>
//                   <div className="text-sm text-gray-500">{client.email}</div>
//                 </td>
//                 <td className="p-4">{client.branch}</td>
//                 <td className="p-4">{client.phone}</td>
//                 <td className="p-4">{client.manager}</td>
//                 <td className="p-4">{client.employee}</td>
//                 <td className="p-4">
//                   <span className="text-green-600 font-bold">✓</span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Clients;









import React from 'react';

const Clients = ({ onClientSelect }) => {
  const clients = [
    {
      id: 1,
      name: 'Kiran Pasula',
      email: 'kiranpasula@gmail.com',
      branch: 'Sunnyvale-USA',
      phone: '+1(408) 555-9876',
      manager: 'Rajashnee Pawar',
      employee: 'Ramya Subramanian'
    },
    {
      id: 2,
      name: 'Kiran Pasula',
      email: 'kiranpasula@gmail.com',
      branch: 'Sunnyvale-USA',
      phone: '+1(408) 555-9876',
      manager: 'Rajashnee Pawar',
      employee: 'Ramya Subramanian'
    },
    {
      id: 3,
      name: 'Kiran Pasula',
      email: 'kiranpasula@gmail.com',
      branch: 'Sunnyvale-USA',
      phone: '+1(408) 555-9876',
      manager: 'Rajashnee Pawar',
      employee: 'Ramya Subramanian'
    },
    {
      id: 4,
      name: 'Kiran Pasula',
      email: 'kiranpasula@gmail.com',
      branch: 'Sunnyvale-USA',
      phone: '+1(408) 555-9876',
      manager: 'Rajashnee Pawar',
      employee: 'Ramya Subramanian'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Clients</h1>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="font-semibold">Rohit Kumar</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Create Client
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">S.No</th>
              <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Client Name</th>
              <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Branch Office</th>
              <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Phone</th>
              <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Manager</th>
              <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Employee</th>
              <th className="p-4 text-left text-sm font-medium text-gray-700 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr 
                key={client.id} 
                className="hover:bg-gray-50 cursor-pointer border-b"
                onClick={() => onClientSelect(client)}
              >
                <td className="p-4">{index + 1}.</td>
                <td className="p-4">
                  <div className="font-medium">{client.name}</div>
                  <div className="text-sm text-gray-500">{client.email}</div>
                </td>
                <td className="p-4">{client.branch}</td>
                <td className="p-4">{client.phone}</td>
                <td className="p-4">{client.manager}</td>
                <td className="p-4">{client.employee}</td>
                <td className="p-4">
                  <span className="text-green-600 font-bold">✓</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clients;