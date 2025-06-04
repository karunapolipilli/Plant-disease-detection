import React from 'react';
export function Home(){
    return(
        <div className="home-content">
            <h1>Welcome To Plant Disease Detection System</h1>
            <h3>Guidance to Any type of plant disease</h3>
        </div>
    );
} 
export function About(){
    return(
        <div className="about-section">
            <div className="about">
                <h2>About Our System</h2>
                <p>
                    Our Plant Disease Detection System is a web-based application designed to help farmers and gardeners quickly identify plant diseases using image-based diagnosis.
                  Users can upload a photo of a diseased plant leaf, and the system predicts the disease using a trained machine learning model.
                 </p>
                  <p>
                   This tool aims to reduce crop loss by enabling early detection and treatment of plant diseases. 
                   </p>
                   <p>
                    The system uses <strong>Convolutional Neural Networks (CNN)</strong> for image classification and is built using:
                    </p>
                     <ul>
                           <li>🧠 Python (Gradio for backend)</li>
                            <li>⚛️ React.js for frontend</li>
                            <li>🔬 TensorFlow/Keras for model training</li>
                     </ul>

                     <p>
                       By simplifying disease detection, our platform supports smarter agriculture, especially in rural areas where expert access may be limited.
                        </p>
        
            </div>
            </div>
    );
}

export function Features(){
    return(
        <div className="features-section">
            <div className="feature-grid">
            <div className="feature-card">
            <h3>🔍 Image-Based Disease Detection</h3>
           
             <p>
                 Upload an image of a plant leaf, and the system accurately identifies the disease using a trained CNN model.
             </p>
              </div>
             <div className="feature-card">
              <h3>  ⚡ Fast and Lightweight</h3>
               <p>
                 Get instant results without long wait times — works smoothly even on slower networks or low-end devices.
               </p>
               </div>
               <div className="feature-card">
               <h3> 🧪 Detailed Disease Info</h3>
                <p>
                  After prediction, users receive the disease name along with possible symptoms and care suggestions (if available).
               </p>
            </div>
            </div>
        </div>
    );
}


export function Detect() {
     const openGradioApp = () => {
    window.open("http://127.0.0.1:7860", "_blank");
  };
  return (
     <div className="detect-container">
        <h2>Plant Disease Detection main page</h2>
      <p>Click the button below to open the classifier in a new tab.</p>
      <button onClick={openGradioApp} className="detect-button">
        Open Detection Tool
      </button>
    </div>
  );
};

