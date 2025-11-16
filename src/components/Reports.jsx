// // components/Reports.js
// import React, { useState } from 'react';

// const Reports = () => {
//   const [activeReport, setActiveReport] = useState('retail');

//   const reportTabs = [
//     { id: 'retail', label: 'Retail Invoice/Contract' },
//     { id: 'collection', label: 'Collection/Invoice Reports' },
//     { id: 'revenue', label: 'Revenue by Associate(Employee)' },
//   ];

//   const retailData = {
//     months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//   };

//   const collectionData = [
//     {
//       date: 'Sep 10, 2025',
//       customerId: 'CUST-001',
//       clientName: 'Kiran Pasula',
//       invoiceNo: 'INV-00000302',
//       email: 'kiranpasula@gmail.com',
//       phone: '669-304-0733',
//       handledBy: 'Ramya',
//       location: 'Sunnyvale-USA'
//     }
//   ];

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
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
//             {reportTabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveReport(tab.id)}
//                 className={`px-6 py-3 font-medium border-b-2 transition-colors ${
//                   activeReport === tab.id
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
//           {activeReport === 'retail' && (
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Retail Invoice / Contract</h3>
//               <div className="flex space-x-8 mb-6">
//                 <div>
//                   <h4 className="font-medium text-gray-700">Total Invoice</h4>
//                   <p className="text-2xl font-bold">September 780</p>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-700">Total Invoice</h4>
//                   <p className="text-2xl font-bold">September 780</p>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-6 gap-4">
//                 {retailData.months.map((month) => (
//                   <div key={month} className="text-center p-3 bg-gray-50 rounded-lg">
//                     <p className="font-medium">{month}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeReport === 'collection' && (
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Collection/ Invoice Reports</h3>
//               <div className="flex space-x-4 mb-6">
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
//                   <input type="date" className="w-full p-2 border rounded-md" />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
//                   <input type="date" className="w-full p-2 border rounded-md" />
//                 </div>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="w-full border-collapse">
//                   <thead>
//                     <tr className="bg-gray-50">
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Date</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Customer ID</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Client Name</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Invoice No.</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Email</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Phone</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Handled By</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Location</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {collectionData.map((row, index) => (
//                       <tr key={index} className="hover:bg-gray-50">
//                         <td className="p-3 border">{row.date}</td>
//                         <td className="p-3 border">{row.customerId}</td>
//                         <td className="p-3 border">{row.clientName}</td>
//                         <td className="p-3 border">{row.invoiceNo}</td>
//                         <td className="p-3 border">{row.email}</td>
//                         <td className="p-3 border">{row.phone}</td>
//                         <td className="p-3 border">{row.handledBy}</td>
//                         <td className="p-3 border">{row.location}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {activeReport === 'revenue' && (
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Revenue by Associate(Employee)</h3>
//               <div className="grid grid-cols-3 gap-4 mb-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
//                   <input type="date" className="w-full p-2 border rounded-md" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
//                   <input type="date" className="w-full p-2 border rounded-md" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Employee</label>
//                   <select className="w-full p-2 border rounded-md">
//                     <option>All Employees</option>
//                     <option>Ramya Subramanian</option>
//                     <option>Rajashnee Pawar</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="w-full border-collapse">
//                   <thead>
//                     <tr className="bg-gray-50">
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Date</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Customer ID</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Client Name</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Contract No./Invoice No.</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Email</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Phone</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Handled By</th>
//                       <th className="p-3 text-left text-sm font-medium text-gray-700 border">Location</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {collectionData.map((row, index) => (
//                       <tr key={index} className="hover:bg-gray-50">
//                         <td className="p-3 border">{row.date}</td>
//                         <td className="p-3 border">{row.customerId}</td>
//                         <td className="p-3 border">{row.clientName}</td>
//                         <td className="p-3 border">{row.invoiceNo}</td>
//                         <td className="p-3 border">{row.email}</td>
//                         <td className="p-3 border">{row.phone}</td>
//                         <td className="p-3 border">{row.handledBy}</td>
//                         <td className="p-3 border">{row.location}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reports;



import React, { useState } from 'react';

const Reports = () => {
  const [activeReport, setActiveReport] = useState('retail');

  const reportTabs = [
    { id: 'retail', label: 'Retail Invoice/Contract' },
    { id: 'collection', label: 'Collection/Invoice Reports' },
    { id: 'revenue', label: 'Revenue by Associate(Employee)' },
  ];

  const retailData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  const collectionData = [
    {
      date: 'Sep 10, 2025',
      customerId: 'CUST-001',
      clientName: 'Kiran Pasula',
      invoiceNo: 'INV-00000302',
      email: 'kiranpasula@gmail.com',
      phone: '669-304-0733',
      handledBy: 'Ramya',
      location: 'Sunnyvale-USA'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
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
            {reportTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveReport(tab.id)}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeReport === tab.id
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
          {activeReport === 'retail' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Retail Invoice / Contract</h3>
              <div className="flex space-x-8 mb-6">
                <div>
                  <h4 className="font-medium text-gray-700">Total Invoice</h4>
                  <p className="text-2xl font-bold">September 780</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Total Invoice</h4>
                  <p className="text-2xl font-bold">September 780</p>
                </div>
              </div>
              
              <div className="grid grid-cols-6 gap-4">
                {retailData.months.map((month) => (
                  <div key={month} className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium">{month}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeReport === 'collection' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Collection/ Invoice Reports</h3>
              <div className="flex space-x-4 mb-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input type="date" className="w-full p-2 border rounded-md" defaultValue="2025-09-01" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input type="date" className="w-full p-2 border rounded-md" defaultValue="2025-09-30" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Date</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Customer ID</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Client Name</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Invoice No.</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Email</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Phone</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Handled By</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collectionData.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-3 border">{row.date}</td>
                        <td className="p-3 border">{row.customerId}</td>
                        <td className="p-3 border">{row.clientName}</td>
                        <td className="p-3 border">{row.invoiceNo}</td>
                        <td className="p-3 border">{row.email}</td>
                        <td className="p-3 border">{row.phone}</td>
                        <td className="p-3 border">{row.handledBy}</td>
                        <td className="p-3 border">{row.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeReport === 'revenue' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Revenue by Associate(Employee)</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input type="date" className="w-full p-2 border rounded-md" defaultValue="2025-09-01" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input type="date" className="w-full p-2 border rounded-md" defaultValue="2025-09-30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Employee</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>All Employees</option>
                    <option>Ramya Subramanian</option>
                    <option>Rajashnee Pawar</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Date</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Customer ID</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Client Name</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Contract No./Invoice No.</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Email</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Phone</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Handled By</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700 border">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collectionData.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-3 border">{row.date}</td>
                        <td className="p-3 border">{row.customerId}</td>
                        <td className="p-3 border">{row.clientName}</td>
                        <td className="p-3 border">{row.invoiceNo}</td>
                        <td className="p-3 border">{row.email}</td>
                        <td className="p-3 border">{row.phone}</td>
                        <td className="p-3 border">{row.handledBy}</td>
                        <td className="p-3 border">{row.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;