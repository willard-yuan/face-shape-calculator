import React from "react";
import { useLocation } from "react-router-dom";
import Results from "../../components/Results";

const FaceShapeTypeResult: React.FC = () => {
  const location = useLocation();
  const {
    faceShape,
    faceLength,
    faceWidth,
    jawlineWidth,
    probabilities,
    previewUrl,
  } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Face Shape Analysis Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {previewUrl && (
            <img
              src={previewUrl}
              alt="User uploaded"
              className="rounded-lg shadow-lg"
            />
          )}
        </div>
        <Results
          faceShape={faceShape}
          faceLength={faceLength}
          faceWidth={faceWidth}
          jawlineWidth={jawlineWidth}
          probabilities={probabilities}
          isProcessing={false}
          showMeasurements={true}
          toggleMeasurements={() => {}}
          showFaceMesh={false}
          toggleFaceMesh={() => {}}
        />
      </div>
    </div>
  );
};

export default FaceShapeTypeResult;