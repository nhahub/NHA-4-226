import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, orderBy, query, doc, updateDoc, deleteDoc } from "firebase/firestore";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllMessages = async () => {
    try {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  const markAsRead = async (id) => {
    try {
      await updateDoc(doc(db, "messages", id), { read: true });
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, read: true } : m))
      );
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "messages", id));
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">Messages</h1>

      {loading ? (
        <p className="mt-5 text-gray-500">Loading...</p>
      ) : messages.length === 0 ? (
        <p className="mt-5 text-gray-500">No messages found.</p>
      ) : (
        <div className="w-full flex flex-col gap-4 pt-5">
          {messages.map((item) => (
            <div
              key={item.id}
              className={`border rounded-xl p-4 ${
                item.read ? "border-gray-200 bg-white" : "border-indigo-300 bg-indigo-50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-neutral-800 text-base font-medium">
                    {item.name}
                  </p>
                  <p className="text-zinc-600 text-sm">{item.email}</p>
                  {item.phone && (
                    <p className="text-zinc-600 text-sm">{item.phone}</p>
                  )}
                </div>

                {!item.read && (
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>

              <p className="text-zinc-700 text-sm mt-3 whitespace-pre-line">
                {item.message}
              </p>

              <div className="flex gap-3 mt-4">
                {!item.read && (
                  <button
                    onClick={() => markAsRead(item.id)}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200 transition-all"
                  >
                    Mark as read
                  </button>
                )}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;