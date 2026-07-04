// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doctors } from "../assets/assets_frontend/assets";
const RelatedDoctors = ({ docId, speciality }) => {
    const navigate = useNavigate();
    const [relDoc, setRelDoc] = useState([]);

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            // Filter doctors by specialty, exclude the current one, and limit to 5
            const doctorsData = doctors.filter(
                (doc) => doc.speciality === speciality && doc._id !== docId
            );
            setRelDoc(doctorsData.slice(0, 5));
        }
    }, [docId, speciality]);

    // Do not render the component if there are no related doctors
    if (relDoc.length === 0) return null;

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Related Doctors</h1>
            <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors.</p>
            
            <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                {relDoc.map((item, index) => (
                    <div 
                        key={index} 
                        onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0,0); }}
                        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
                    >
                        <img className="bg-blue-50" src={item.image} alt={item.name} />
                        <div className="p-4">
                            {/* Availability Badge */}
                            <div className={`flex items-center gap-2 text-sm text-center ${item.available !== false ? 'text-green-500' : 'text-gray-500'}`}>
                                <p className={`w-2 h-2 rounded-full ${item.available !== false ? 'bg-green-500' : 'bg-gray-500'}`}></p>
                                <p>{item.available !== false ? 'Available' : 'Not Available'}</p>
                            </div>
                            
                            <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                            <p className="text-gray-600 text-sm">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                onClick={() => { navigate('/doctors'); window.scrollTo(0,0); }} 
                className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
            >
                more
            </button>
        </div>
    );
};

export default RelatedDoctors;