import React from "react";

const complaints = [
  {
    id: 1,
    user: "Yash Kaul",
    time: "2d ago",
    fire: true,
    text:
      "Dirty water plagues Nanjappa Road residents as BWSSB fails to resolve decade-old contamination issues.",
    status: ["Pending", "Urgent"],
    upvotes: 359,
    comments: 37,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    user: "Saanvi Karka",
    time: "2d ago",
    fire: false,
    text:
      "Faridabad, india open garbage disposal is huge problem here, however no one pay attention to it.",
    status: ["In Progress", "Long-Term"],
    upvotes: 63,
    comments: 37,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    user: "Riya raj",
    time: "2d ago",
    fire: false,
    text:
      "Residents Struggle with Frequent Power Cuts, Urge Immediate Action . Unresolved Electricity Outages Disrupt Daily Life in Local Neighborhood.",
    status: ["Resolved", "Daily"],
    upvotes: 21,
    comments: 37,
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=200&q=80",
  },
];

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-12 pt-8">
        <h1 className="text-6xl font-extrabold text-blue-500">Lokally</h1>
        <div className="flex gap-6 text-2xl text-gray-700">
          <button><span className="material-symbols-outlined">notifications</span></button>
          <button><span className="material-symbols-outlined">settings</span></button>
          <button><span className="material-symbols-outlined">logout</span></button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex gap-8 px-12 mt-8">
        {/* Complaints List */}
        <div className="flex-1 bg-white rounded-xl border border-gray-400 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Complaints</h2>
            <div className="flex gap-2">
              <select className="border rounded px-3 py-1 text-gray-700">
                <option>Urgency</option>
              </select>
              <select className="border rounded px-3 py-1 text-gray-700">
                <option>Type</option>
              </select>
            </div>
          </div>
          <div className="space-y-8">
            {complaints.map((c) => (
              <div key={c.id} className="flex items-start gap-4 border-b pb-6 last:border-b-0">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-4 rounded-full border border-gray-400 inline-block"></span>
                    <span className="font-semibold text-gray-800 text-sm">{c.user}</span>
                    <span className="text-xs text-gray-400">{c.time}</span>
                    {c.fire && <span className="ml-1">🔥</span>}
                  </div>
                  <div className="font-bold text-lg text-gray-900 mb-2">{c.text}</div>
                  <div className="flex gap-2 mb-3">
                    {c.status.map((s, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          s === "Urgent"
                            ? "bg-red-500 text-white border-red-500"
                            : s === "Pending"
                            ? "bg-yellow-200 text-gray-800 border-yellow-400"
                            : s === "In Progress"
                            ? "bg-gray-200 text-gray-800 border-gray-400"
                            : s === "Long-Term"
                            ? "bg-gray-100 text-gray-800 border-gray-300"
                            : s === "Resolved"
                            ? "bg-blue-200 text-gray-800 border-blue-400"
                            : s === "Daily"
                            ? "bg-white text-blue-700 border-blue-400"
                            : "bg-gray-100 text-gray-800 border-gray-300"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 items-center">
                    <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-sm">
                      <span className="material-symbols-outlined text-base">arrow_upward</span>
                      {c.upvotes}
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 rounded-full border text-gray-700 font-semibold text-sm">
                      <span className="material-symbols-outlined text-base">chat_bubble</span>
                      {c.comments}
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 rounded-full border text-gray-700 font-semibold text-sm">
                      <span className="material-symbols-outlined text-base">sync</span>
                      Repost
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <a href="#" className="text-blue-600 font-semibold text-sm">View More</a>
                  <img src={c.image} alt="complaint" className="w-24 h-16 object-cover rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-96 flex flex-col gap-4">
          {/* Profile Card */}
          <div className="rounded-xl border border-gray-400 p-6 flex flex-col items-center bg-white">
            <div className="w-full h-16 bg-blue-100 rounded-t-xl mb-[-2.5rem]"></div>
            <div className="relative z-10 mb-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="profile"
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg -mt-8"
              />
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">Saksham Budhii</div>
              <div className="text-gray-500 text-sm">Designation</div>
              <div className="text-blue-500 text-xs">Location, Locality</div>
            </div>
          </div>
          {/* Your Complaints */}
          <div className="rounded-xl border border-gray-400 p-4 bg-white">
            <div className="font-bold text-lg mb-2">Your Complaints</div>
            <div className="flex justify-between text-sm mb-1">
              <span>Water Drainage</span>
              <span className="text-gray-500">3hrs ago</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Pipeline</span>
              <span className="text-gray-500">4days ago</span>
            </div>
          </div>
          {/* Urgent Problems */}
          <div className="rounded-xl border border-gray-400 p-4 bg-white">
            <div className="font-bold text-lg mb-2">Urgent Problems</div>
            <div className="flex justify-between text-sm mb-1">
              <span>Water Drainage</span>
              <span className="text-gray-500">3hrs ago</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Pipeline</span>
              <span className="text-gray-500">4days ago</span>
            </div>
          </div>
          {/* New Complaint Button */}
          <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl text-lg shadow flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-2xl">add</span>
            NEW COMPLAINT
          </button>
        </div>
      </div>
    </div>
  );
} 