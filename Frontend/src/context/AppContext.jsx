import { createContext, useEffect, useState } from "react";
import { doctors as staticDoctors } from "../assets/assets_frontend/assets";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [firebaseDoctors, setFirebaseDoctors] = useState([]);
  const [doctorsLoading, setDoctorsLoading] = useState(true);

  useEffect(() => {
    const getDoctorsData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "users"));

        const doctorsFromFirebase = snapshot.docs
          .map((docItem) => ({
            id: docItem.id,
            ...docItem.data(),
          }))
          .filter(
            (user) => user.role === "doctor" && user.available !== false
          );

        setFirebaseDoctors(doctorsFromFirebase);
      } catch (error) {
        console.error("Error getting doctors:", error);
      } finally {
        setDoctorsLoading(false);
      }
    };

    getDoctorsData();
  }, []);

const allDoctors = [...staticDoctors, ...firebaseDoctors].map((doctor) => {
  const rating = Number((4.2 + Math.random() * 0.8).toFixed(1));

  const reviews = Math.floor(Math.random() * 180 + 120);

  return {
    ...doctor,
    rating,
    reviews,
  };
});
  const value = {
    doctors: allDoctors,
    firebaseDoctors,
    doctorsLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};