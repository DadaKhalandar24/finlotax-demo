// // components/ClientDetails.js
// import React, { useState } from 'react';

// const ClientDetails = ({ client }) => {
//   const [activeTab, setActiveTab] = useState('personal');

//   const tabs = [
//     { id: 'personal', label: 'Personal Details' },
//     { id: 'invoices', label: 'Invoices' },
//     { id: 'documents', label: 'Documents' },
//     { id: 'signature', label: 'Signature' },
//     { id: 'notification', label: 'Notification' },
//   ];

//   const activities = [
//     "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
//     "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
//     "INV-00000302 has been created - Sep 08 2025 09:28",
//     "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
//     "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
//     "INV-00000302 has been created - Sep 08 2025 09:28",
//     "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
//     "INV-00000302 has been created - Sep 08 2025 09:28"
//   ];

//   if (!client) {
//     return (
//       <div className="p-6">
//         <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
//           <p className="text-gray-600">Select a client to view details</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Client {client.name}</h1>
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

//       <div className="bg-white rounded-lg shadow-sm border">
//         <div className="border-b">
//           <div className="flex">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-6 py-3 font-medium border-b-2 transition-colors ${
//                   activeTab === tab.id
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="p-6">
//           {activeTab === 'personal' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                     <p className="text-gray-900">Kiran Pasula</p>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                     <p className="text-gray-900">669-304-0733</p>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                     <p className="text-gray-900">kiranpasula@gmail.com</p>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Branch Office</label>
//                     <p className="text-gray-900">Sunnyvale - USA</p>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="space-y-4 mt-8">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Manager</label>
//                     <p className="text-gray-900">Prachi Babu</p>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Employee</label>
//                     <p className="text-gray-900">Ramya</p>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                     <p className="text-gray-900">Lorem Ipsum</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'invoices' && (
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Invoices</h3>
//               <div className="space-y-3">
//                 {activities.filter(a => a.includes('INV')).map((activity, index) => (
//                   <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded">
//                     <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                       <span className="text-sm">📄</span>
//                     </div>
//                     <div>
//                       <p className="text-gray-800">{activity.split(' - ')[0]}</p>
//                       <p className="text-sm text-gray-500">{activity.split(' - ')[1]}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'documents' && (
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Documents</h3>
//               <div className="space-y-3">
//                 {activities.filter(a => a.includes('uploaded')).map((activity, index) => (
//                   <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded">
//                     <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                       <span className="text-sm">📄</span>
//                     </div>
//                     <div>
//                       <p className="text-gray-800">{activity.split(' - ')[0]}</p>
//                       <p className="text-sm text-gray-500">{activity.split(' - ')[1]}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'notification' && (
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Notifications</h3>
//               <div className="space-y-3">
//                 {activities.map((activity, index) => (
//                   <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded">
//                     <input type="checkbox" className="rounded" />
//                     <div>
//                       <p className="text-gray-800">{activity.split(' - ')[0]}</p>
//                       <p className="text-sm text-gray-500">{activity.split(' - ')[1]}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientDetails;






import React, { useState } from 'react';

const ClientDetails = ({ client }) => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Details' },
    { id: 'invoices', label: 'Invoices' },
    { id: 'documents', label: 'Documents' },
    { id: 'signature', label: 'Signature' },
    { id: 'notification', label: 'Notification' },
  ];

  const activities = [
    "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
    "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
    "INV-00000302 has been created - Sep 08 2025 09:28",
    "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
    "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
    "INV-00000302 has been created - Sep 08 2025 09:28",
    "Client Kiran Pasula has uploaded new documents - Sep 08 2025 09:28",
    "INV-00000302 has been created - Sep 08 2025 09:28"
  ];

  if (!client) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <p className="text-gray-600">Select a client to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Client {client.name}</h1>
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

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'personal' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <p className="text-gray-900">Kiran Pasula</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <p className="text-gray-900">669-304-0733</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">kiranpasula@gmail.com</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Branch Office</label>
                    <p className="text-gray-900">Sunnyvale - USA</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4 mt-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Manager</label>
                    <p className="text-gray-900">Prachi Babu</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Employee</label>
                    <p className="text-gray-900">Ramya</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <p className="text-gray-900">Lorem Ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'invoices' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Invoices</h3>
              <div className="space-y-3">
                {activities.filter(a => a.includes('INV')).map((activity, index) => (
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
          )}

          {activeTab === 'documents' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Documents</h3>
              <div className="space-y-3">
                {activities.filter(a => a.includes('uploaded')).map((activity, index) => (
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
          )}

          {activeTab === 'notification' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Notifications</h3>
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded">
                    <input type="checkbox" className="rounded" defaultChecked={index % 2 === 0} />
                    <div>
                      <p className="text-gray-800">{activity.split(' - ')[0]}</p>
                      <p className="text-sm text-gray-500">{activity.split(' - ')[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;