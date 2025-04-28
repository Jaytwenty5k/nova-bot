'use client';

import { useState, useRef } from 'react';

export default function AvatarUploadPage() {
  const inputFileRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = async (event) => {
    event.preventDefault();

    const file = inputFileRef.current?.files[0];
    if (!file) {
      alert('Bitte wähle eine Datei aus.');
      return;
    }

    try {
      const response = await fetch('/api/avatar/upload', {
        method: 'POST',
        body: file,
      });

      if (!response.ok) {
        throw new Error('Fehler beim Hochladen der Datei.');
      }

      const result = await response.json();
      setUploadedFile(result);
    } catch (error) {
      console.error('Fehler beim Hochladen:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Avatar hochladen</h1>
      <form onSubmit={handleFileUpload} className="flex flex-col items-center space-y-4">
        <input type="file" ref={inputFileRef} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Hochladen
        </button>
      </form>
      {uploadedFile && (
        <div className="mt-4">
          <p>Hochgeladene Datei:</p>
          <img src={uploadedFile.url} alt="Hochgeladener Avatar" className="w-32 h-32 rounded-full" />
        </div>
      )}
    </div>
  );
}