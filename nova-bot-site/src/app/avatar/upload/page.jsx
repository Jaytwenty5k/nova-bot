'use client';

import { useState, useRef } from 'react';

export default function AvatarUploadPage() {
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);

  return (
    <>
      <h1>Upload Your Avatar</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          // Fehler 1: Entfernen des falschen Zugriffs auf `files.[0]`
          const file = inputFileRef.current.files[0];

          if (!file) {
            alert('Please select a file to upload.');
            return;
          }

          try {
            const response = await fetch(
              `/api/avatar/upload?filename=${encodeURIComponent(file.name)}`,
              {
                method: 'POST',
                body: file,
              },
            );

            if (!response.ok) {
              throw new Error('Failed to upload file');
            }

            // Fehler 2: Entfernen des nicht definierten Typs `PutBlobResult`
            const newBlob = await response.json();

            setBlob(newBlob);
          } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file. Please try again.');
          }
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url} target="_blank" rel="noopener noreferrer">{blob.url}</a>
        </div>
      )}
    </>
  );
}