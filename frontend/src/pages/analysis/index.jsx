import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone'; // Import react-dropzone
import AnnDataScatterPlot from '../../components/common/react-grid';

const AnalysisPage = () => {
  const [jsonData, setJsonData] = useState(null); // State to hold the uploaded JSON data
  const [isLoading, setIsLoading] = useState(false); // State to handle the loading spinner
  const [error, setError] = useState(null); // State to handle any errors
  const [isUploadedOpen, setIsUploadedOpen] = useState(true);

  useEffect(() => {
    if (jsonData) {
      setIsUploadedOpen(false);
    }
  }, [jsonData]);

  // Function to handle file upload
  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        setJsonData(data);
      } catch (err) {
        setError('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
  };

  // Function to simulate processing and show the spinner
  const processData = () => {
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second processing time
  };

  // react-dropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.json', // Only accept .json files
    onDrop: (acceptedFiles) => {
      handleFileUpload(acceptedFiles);
      processData();
    },
  });

  return (
    <div className="bg-white w-full -mt-[19em] min-h-screen px-[4em]">
      <div className="px-8 py-10">
        <div className="w-full bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Upload Your Single Cell Data(compressed)
          </h1>

          {/* Upload Section */}
          {isUploadedOpen && (
            <div
              {...getRootProps()}
              className="border-4 max-w-2xl border-dashed border-blue-300 p-8 text-center rounded-xl cursor-pointer hover:border-blue-500 transition duration-200"
            >
              <input {...getInputProps()} />
              <h2 className="text-2xl text-gray-700 mb-2">
                Drag and drop a file here, or click to select one.
              </h2>
              <p className="text-gray-500">Accepted file type: .json</p>
            </div>
          )}

          {/* Loading Spinner */}
          {isLoading && (
            <div className="flex justify-center mt-5">
              <div className="spinner-border animate-spin border-4 rounded-full h-16 w-16 text-blue-500"></div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="text-red-500 mt-5 text-center">{error}</div>
          )}

          {/* Render the plot once the data is processed */}
          {jsonData && !isLoading && (
            <div className="w-full mt-10">
              <AnnDataScatterPlot data={jsonData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
