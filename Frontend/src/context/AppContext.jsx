import { createContext, useEffect, useState } from "react";
import { doctors as staticDoctors } from "../assets/assets_frontend/assets";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [firebaseDoctors, setFirebaseDoctors] = useState([]);
  const [doctorsLoading, setDoctorsLoading] = useState(true);

  const getDoctorsData = async () => {
    try {
      setDoctorsLoading(true);

      // Optmized Query: Filter by role at server level to minimize network payload sizing
      const q = query(collection(db, "users"), where("role", "==", "doctor"));
      const snapshot = await getDocs(q);

      const doctorsFromFirebase = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }));

      setFirebaseDoctors(doctorsFromFirebase);
    } catch (error) {
      console.error("Error getting doctors:", error);
    } finally {
      setDoctorsLoading(false);
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  // 1. Unified Global Registry (Keeps profile history visible even if doctor toggles offline)
  const allDoctors = [...staticDoctors, ...firebaseDoctors];

  // 2. Specialized Array for Client Directory Search Grids (Hides unavailable rows gracefully)
  const availableDoctors = allDoctors.filter(docItem => docItem.available !== false);

  const value = {
    doctors: allDoctors,                // Used by profile details and old lookup grids
    availableDoctors,                   // Use this for home page card loops and directory filters!
    firebaseDoctors,
    doctorsLoading,
    refreshDoctors: getDoctorsData       // Allows components to pull a fresh batch manually
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};