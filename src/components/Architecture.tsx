import React from 'react';

const Architecture = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-8">
        <pre className="overflow-auto">
          <code className="language-mermaid">{`
graph TD
    A[IoT Devices/Sensors] -->|Data| B[Azure IoT Hub]
    B -->|Stream| C[Stream Analytics]
    B -->|Cold Path| D[Azure Storage]
    C -->|Real-time| E[Power BI]
    C -->|Processing| F[Azure Functions]
    F -->|Store| G[Cosmos DB]
    H[Device Simulator] -->|Test Data| B
    I[Security Center] -->|Monitor| B
          `}</code>
        </pre>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Components Overview</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>IoT Devices/Sensors:</strong> Physical or simulated devices sending telemetry data</li>
            <li><strong>Azure IoT Hub:</strong> Central message hub for bi-directional communication</li>
            <li><strong>Stream Analytics:</strong> Real-time data processing and analysis</li>
            <li><strong>Azure Functions:</strong> Serverless compute for data processing</li>
            <li><strong>Cosmos DB:</strong> Scalable NoSQL database for device data</li>
            <li><strong>Power BI:</strong> Business intelligence and visualization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Data Flow</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Devices send telemetry data to IoT Hub</li>
            <li>Stream Analytics processes data in real-time</li>
            <li>Azure Functions handle complex processing</li>
            <li>Data is stored in Cosmos DB for persistence</li>
            <li>Power BI creates real-time dashboards</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Architecture;