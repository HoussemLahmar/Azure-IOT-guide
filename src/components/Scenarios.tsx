import React from 'react';
import { Activity, Thermometer, Factory, Stethoscope } from 'lucide-react';

const Scenarios = () => {
  const scenarios = [
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Temperature Monitoring",
      description: "Monitor and analyze temperature data from multiple sensors",
      code: `
// Temperature Monitoring Scenario
const tempSensor = {
  id: 'temp-sensor-01',
  location: 'Lab Room A',
  readings: []
};

function simulateTemperature() {
  const reading = {
    timestamp: new Date(),
    value: 20 + Math.random() * 5,
    unit: 'Celsius'
  };
  
  tempSensor.readings.push(reading);
  return reading;
}`,
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Industrial Equipment Monitoring",
      description: "Track industrial equipment performance and maintenance needs",
      code: `
// Equipment Monitoring
class EquipmentMonitor {
  constructor(equipmentId, type) {
    this.equipmentId = equipmentId;
    this.type = type;
    this.status = 'operational';
    this.metrics = {};
  }

  updateMetrics() {
    this.metrics = {
      temperature: 45 + Math.random() * 15,
      vibration: Math.random() * 0.5,
      runtime: Math.floor(Math.random() * 24)
    };
  }
}`,
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare Monitoring",
      description: "Monitor patient vital signs and medical equipment",
      code: `
// Healthcare Monitoring
class PatientMonitor {
  constructor(patientId) {
    this.patientId = patientId;
    this.vitals = {};
  }

  measureVitals() {
    this.vitals = {
      heartRate: 60 + Math.random() * 40,
      bloodPressure: {
        systolic: 110 + Math.random() * 30,
        diastolic: 70 + Math.random() * 20
      },
      temperature: 36.5 + Math.random()
    };
  }
}`,
    },
  ];

  return (
    <section id="scenarios" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Learning Scenarios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600">{scenario.icon}</div>
                  <h3 className="text-xl font-semibold">{scenario.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{scenario.description}</p>
                <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{scenario.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scenarios;