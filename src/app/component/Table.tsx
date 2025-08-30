import React from 'react'
import { Search, Filter, FileText, Image, Video, File } from "lucide-react";

const documents = [
  { name: "Tech requirements.pdf", size: "200 KB", type: "PDF", tag: "Legal", ai: true, dashboard: true, stage: "Full" },
  { name: "Dashboard screenshot.jpg", size: "720 KB", type: "IMG", tag: "Vendors & Assets", ai: true, dashboard: true, stage: "Onboarding" },
  { name: "Dashboard prototype recording.mp4", size: "16 MB", type: "VIDEO", tag: "Technology", ai: false, dashboard: true, stage: "Franchisee" },
  { name: "Financial Overview", size: "4.2 MB", type: "DOC", tag: "Financial", ai: true, dashboard: false, stage: "Prospect" },
  { name: "UX Design Guidelines.docx", size: "400 KB", type: "DOC", tag: "Legal", ai: false, dashboard: true, stage: "Onboarding" },
  { name: "Dashboard interaction.aep", size: "8 MB", type: "PDF", tag: "Legal", ai: true, dashboard: true, stage: "Onboarding" },
  { name: "Briefing call recording.mp3", size: "18.6 MB", type: "AUDIO", tag: "Financial", ai: false, dashboard: false, stage: "Prospect" },
];

function Table() {
  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow border">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-2">My Uploads</h2>
      <p className="text-sm text-gray-500 mb-4">Documents that are uploaded by you.</p>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 mb-4 border rounded-lg p-2">
        <div className="flex items-center w-full sm:w-1/2 px-2 border rounded-md">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search here.."
            className="w-full p-2 outline-none text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm hover:bg-gray-50">
          <Filter className="h-4 w-4" /> Filters
        </button>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-7 text-sm font-medium text-gray-600 border-b py-2">
        <span>Document Name</span>
        <span>Document Type</span>
        <span>AI App Inclusion</span>
        <span>Dashboard Inclusion</span>
        <span>Stage Access</span>
        <span className="col-span-2">Actions</span>
      </div>

      {/* Table Rows */}
      {documents.map((doc, i) => (
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-7 items-center text-sm border-b py-3 gap-2"
        >
          {/* Name */}
          <div className="flex items-center gap-2">
            {doc.type === "PDF" && <FileText className="h-5 w-5 text-red-500" />}
            {doc.type === "IMG" && <Image className="h-5 w-5 text-green-500" />}
            {doc.type === "VIDEO" && <Video className="h-5 w-5 text-blue-500" />}
            {doc.type === "DOC" && <File className="h-5 w-5 text-indigo-500" />}
            <div>
              <p className="font-medium">{doc.name}</p>
              <p className="text-xs text-gray-400">{doc.size}</p>
            </div>
          </div>

          {/* Type Tag */}
          <span className="hidden md:inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
            {doc.tag}
          </span>

          {/* AI Toggle */}
          <div className="hidden md:flex justify-center">
            <input type="checkbox" defaultChecked={doc.ai} className="toggle-checkbox" />
          </div>

          {/* Dashboard Toggle */}
          <div className="hidden md:flex justify-center">
            <input type="checkbox" defaultChecked={doc.dashboard} className="toggle-checkbox" />
          </div>

          {/* Stage */}
          <span className="hidden md:inline-block text-gray-700">{doc.stage}</span>

          {/* Actions */}
          <div className="flex gap-3 text-blue-600">
            <button className="hover:underline">Edit</button>
            <button className="hover:underline text-red-500">Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Table
