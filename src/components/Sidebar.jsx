// // components/Sidebar.js
// import React from 'react';

// const Sidebar = ({ activeTab, setActiveTab }) => {
//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: '📊' },
//     { id: 'reports', label: 'Reports', icon: '📈' },
//     { id: 'clients', label: 'Clients', icon: '👥' },
//     { id: 'invoices', label: 'Invoices', icon: '🧾' },
//     { id: 'documents', label: 'Documents', icon: '📁' },
//   ];

//   return (
//     <div className="w-64 bg-blue-900 text-white h-full">
//       <div className="p-6 border-b border-blue-800">
//         <h1 className="text-2xl font-bold">FINLO<span className="text-blue-300">TAX</span></h1>
//       </div>
//       <nav className="mt-6">
//         {menuItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => setActiveTab(item.id)}
//             className={`w-full text-left px-6 py-3 flex items-center space-x-3 transition-colors ${
//               activeTab === item.id
//                 ? 'bg-blue-800 border-r-4 border-blue-300'
//                 : 'hover:bg-blue-800'
//             }`}
//           >
//             <span>{item.icon}</span>
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;




import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'clients', label: 'Clients', icon: '👥' },
    { id: 'invoices', label: 'Invoices', icon: '🧾' },
    { id: 'documents', label: 'Documents', icon: '📁' },
  ];

  return (
    <div className="w-64 bg-blue-900 text-white h-full">
      <div className="p-6 border-b border-blue-800">
        <h1 className="text-2xl font-bold">FINLO<span className="text-blue-300">TAX</span></h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full text-left px-6 py-3 flex items-center space-x-3 transition-colors ${
              activeTab === item.id
                ? 'bg-blue-800 border-r-4 border-blue-300'
                : 'hover:bg-blue-800'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;