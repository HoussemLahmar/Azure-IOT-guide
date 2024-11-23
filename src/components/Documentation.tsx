import React from 'react';
import { FileText, Download, Link as LinkIcon, Book } from 'lucide-react';

const Documentation = () => {
  const officialDocs = [
    {
      title: "Azure IoT Hub Documentation",
      url: "https://learn.microsoft.com/en-us/azure/iot-hub/",
      description: "Official Microsoft documentation for Azure IoT Hub"
    },
    {
      title: "Azure IoT Device SDK",
      url: "https://learn.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-sdks",
      description: "Device SDK documentation and implementation guides"
    },
    {
      title: "Azure Stream Analytics",
      url: "https://learn.microsoft.com/en-us/azure/stream-analytics/",
      description: "Real-time analytics service documentation"
    }
  ];

  const downloads = [
    {
      title: "Device Simulator Package",
      description: "Complete Node.js device simulator with examples",
      filename: "device-simulator.zip"
    },
    {
      title: "PowerShell Scripts",
      description: "Azure resource creation and configuration scripts",
      filename: "setup-scripts.zip"
    },
    {
      title: "Power BI Templates",
      description: "Pre-configured dashboard templates",
      filename: "powerbi-templates.zip"
    }
  ];

  return (
    <section id="docs" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Documentation & Resources</h2>

        {/* Official Documentation Links */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Book className="h-6 w-6 text-blue-600" />
            Official Documentation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officialDocs.map((doc, index) => (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <LinkIcon className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold">{doc.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{doc.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-600" />
            Code Examples
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Device Connection Example</h4>
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <pre className="language-javascript">
                  <code>{`const { clientFromConnectionString } = require('azure-iot-device-mqtt');
const { Message } = require('azure-iot-device');

class DeviceClient {
    constructor(connectionString) {
        this.client = clientFromConnectionString(connectionString);
        this.isConnected = false;
    }

    async connect() {
        try {
            await this.client.open();
            this.isConnected = true;
            console.log('Connected to IoT Hub');
        } catch (err) {
            console.error('Connection failed:', err);
        }
    }

    sendTelemetry(data) {
        if (!this.isConnected) {
            throw new Error('Client not connected');
        }
        
        const message = new Message(JSON.stringify(data));
        return this.client.sendEvent(message);
    }
}

module.exports = DeviceClient;`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Stream Analytics Query</h4>
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <pre className="language-sql">
                  <code>{`-- Calculate average temperature per device
WITH AggregatedData AS (
    SELECT
        DeviceId,
        AVG(Temperature) as AvgTemperature,
        System.Timestamp() as WindowEnd
    FROM
        DeviceReadings TIMESTAMP BY ReadingTime
    GROUP BY
        DeviceId,
        TumblingWindow(minute, 5)
)

-- Detect anomalies
SELECT
    DeviceId,
    AvgTemperature,
    WindowEnd,
    CASE
        WHEN AvgTemperature > 30 THEN 'High'
        WHEN AvgTemperature < 10 THEN 'Low'
        ELSE 'Normal'
    END as TemperatureStatus
INTO
    AnomalyOutput
FROM
    AggregatedData`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Downloadable Resources */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Download className="h-6 w-6 text-blue-600" />
            Downloadable Resources
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((resource, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">{resource.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <Download className="h-4 w-4" />
                  <span>Download {resource.filename}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;