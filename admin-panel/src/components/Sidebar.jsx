import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='min-h-screen bg-white border-r'>
      <ul className='text-[#515151] mt-5'>

        {/* Dashboard */}
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 py-3.5 px-6 md:px-9 md:min-w-72 cursor-pointer transition-all ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F6FFF]' : ''
            }`
          } 
          to={'/admin-dashboard'}
        >
          <img className='w-5' src={assets.home_icon} alt="" />
          <p className='hidden md:block'>Dashboard</p>
        </NavLink>

        {/* Appointments */}
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 py-3.5 px-6 md:px-9 md:min-w-72 cursor-pointer transition-all ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F6FFF]' : ''
            }`
          } 
          to={'/all-appointments'}
        >
          <img className='w-5' src={assets.appointment_icon} alt="" />
          <p className='hidden md:block'>Appointments</p>
        </NavLink>

        {/* Add Doctor */}
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 py-3.5 px-6 md:px-9 md:min-w-72 cursor-pointer transition-all ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F6FFF]' : ''
            }`
          } 
          to={'/add-doctor'}
        >
          <img className='w-5' src={assets.add_icon} alt="" />
          <p className='hidden md:block'>Add Doctor</p>
        </NavLink>

        {/* Doctors List */}
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 py-3.5 px-6 md:px-9 md:min-w-72 cursor-pointer transition-all ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F6FFF]' : ''
            }`
          } 
          to={'/doctor-list'}
        >
          <img className='w-5' src={assets.people_icon} alt="" />
          <p className='hidden md:block'>Doctors List</p>
        </NavLink>

      </ul>
    </div>
  );
};

export default Sidebar;







// دا باستخدام الباك ايند

// import React, { useContext } from 'react';
// import { AdminContext } from '../context/AdminContext';
// import { NavLink } from 'react-router-dom';
// import { assets } from '../assets/assets'; // Adjust path based on your file structure

// const Sidebar = () => {
//   const { aToken } = useContext(AdminContext);

//   return (
//     <div className='min-h-screen bg-white border-r'>
//       {aToken && (
//         <ul className='text-[#515151] mt-5'>
          
//           {/* Dashboard Link */}
//           <NavLink 
//             className={({ isActive }) => 
//               `flex items-center gap-3 py-3.5 px-6 md:px-9 md:min-w-72 cursor-pointer transition-all ${
//                 isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F6FFF]' : ''
//               }`
//             } 
//             to={'/admin-dashboard'}
//           >
//             <img className='w-5' src={assets.home_icon} alt="Dashboard Icon" />
//             <p className='hidden md:block'>Dashboard</p>
//           </NavLink>

//           {/* Appointments Link */}
//           <NavLink 
//             className={({ isActive }) => 
//               `flex items-center gap-3 py-3.5 px-6 md:px-9 md:min-w-72 cursor-pointer transition-all ${
//                 isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F6FFF]' : ''
//               }`
//             } 
//             to={'/all-appointments'}
//           >
//             <img className='w-5' src={assets.appointment_icon} alt="Appointment Icon" />
//             <p className='hidden md:block'>Appointments</p>
//           </NavLink>

//           {/* Add Doctor Link */}
//           <NavLink 
//             className={({ isActive }) => 
//               `flex items-center gap-3 py-3.5 px-6 md:px-9 md:min-w-72 cursor-pointer transition-all ${
//                 isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F6FFF]' : ''
//               }`
//             } 
//             to={'/add-doctor'}
//           >
//             <img className='w-5' src={assets.add_icon} alt="Add Doctor Icon" />
//             <p className='hidden md:block'>Add Doctor</p>
//           </NavLink>

//           {/* Doctors List Link */}
//           <NavLink 
//             className={({ isActive }) => 
//               `flex items-center gap-3 py-3.5 px-6 md:px-9 md:min-w-72 cursor-pointer transition-all ${
//                 isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F6FFF]' : ''
//               }`
//             } 
//             to={'/doctor-list'}
//           >
//             <img className='w-5' src={assets.people_icon} alt="Doctors List Icon" />
//             <p className='hidden md:block'>Doctors List</p>
//           </NavLink>

//         </ul>
//       )}
//     </div>
//   );
// };

// export default Sidebar;