// frontend/src/components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ setData }) => {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:5000/upload', formData, {
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted);
            }
        })
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
            <progress value={progress} max="100">{progress}%</progress>
        </div>
    );
};

export default FileUpload;
