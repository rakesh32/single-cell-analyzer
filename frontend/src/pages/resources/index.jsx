import React from "react";

const ResourcePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 -mt-[19em]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 text-white">
            <h1 className="text-3xl lg:text-4xl font-bold">Single-Cell RNA Sequencing Data Clustering Project</h1>
          </div>
          <div className="p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                This project focuses on clustering single-cell RNA sequencing (scRNA-seq) data, an essential computational approach in bioinformatics that allows researchers to analyze gene expression at the single-cell level. The project is a robust solution combining modern web technologies with advanced data science methodologies to deliver an intuitive platform for scRNA-seq data analysis.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The project employs a Python-based backend, utilizing <span className="font-semibold">FastAPI</span> for its high performance, scalability, and ease of integration. On the frontend, it uses <span className="font-semibold">React.js</span> to provide a dynamic, responsive, and user-friendly interface. This combination ensures a seamless and interactive experience for researchers and biologists working with complex datasets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mt-4">
                <li>
                  <span className="font-semibold">Data Upload and Preprocessing:</span> 
                  Users can upload raw scRNA-seq data in standard file formats such as CSV or TSV. The backend processes this data, handling tasks like normalization, dimensionality reduction (e.g., PCA), and gene filtering.
                </li>
                <li>
                  <span className="font-semibold">Clustering Algorithms:</span> 
                  The project supports popular clustering methods, including K-means, hierarchical clustering, and graph-based approaches like Louvain or Leiden algorithms, implemented using Python libraries such as Scikit-learn and Scanpy.
                </li>
                <li>
                  <span className="font-semibold">Interactive Visualization:</span> 
                  Visualizations such as UMAP or t-SNE plots are rendered dynamically, enabling users to explore clustering results interactively.
                </li>
                <li>
                  <span className="font-semibold">Real-Time Feedback:</span> 
                  React.js and WebSocket support in FastAPI ensure smooth workflows with real-time updates on processing tasks.
                </li>
                <li>
                  <span className="font-semibold">Scalable Architecture:</span> 
                  Built with scalability in mind, the application efficiently handles large datasets and concurrent requests.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">Applications</h2>
              <p className="text-gray-700 leading-relaxed">
                This project caters to researchers, biologists, and data scientists, helping them analyze complex single-cell data with ease. It provides insights into biological processes, aiding in discoveries and advancements in personalized medicine and drug development.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This platform combines cutting-edge technology with powerful analytical tools, empowering users to unlock the potential of single-cell RNA sequencing data.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
