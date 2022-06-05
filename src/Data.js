import {WiHumidity} from "react-icons/wi";
import {TbHeartRateMonitor} from "react-icons/tb";
// import {WiHumidity} from "react-icons/Wi";
// import {WiHumidity} from "react-icons/Wi";
// import {WiHumidity} from "react-icons/Wi";
import {MdBloodtype} from "react-icons/md";
import {SiOxygen} from "react-icons/si";
import {TbTemperatureFahrenheit} from "react-icons/tb";

export const ContainerData = [
  {id: 1, name: "ECG", value: "80 Bpm", icon: <WiHumidity />},
  {id: 2, name: "Heart Rate", value: "90 Bpm", icon: <TbHeartRateMonitor />},
  {id: 3, name: "Humidity", value: "50 Bpm", icon: <WiHumidity />},
  {id: 4, name: "IP", value: "60 Bpm", icon: <WiHumidity />},
  {id: 5, name: "LowerBp", value: "90 mmHg", icon: <MdBloodtype />},
  {id: 6, name: "Oxygen Level", value: "20 Bpm", icon: <SiOxygen />},
  {
    id: 7,
    name: "Temperature",
    value: "30 °F",
    icon: <TbTemperatureFahrenheit />,
  },
  {id: 8, name: "UpperBp", value: "190 mmHg", icon: <MdBloodtype />},
];

export const PatientData = [
  {
    id: 1,
    name: "Ramo Kaka",
    age: "24",
    disease: "Dengue",
    date: "06/05/2022",
    file: "abc",
  },
  {
    id: 2,
    name: "Richard",
    age: "28",
    disease: "Cholera",
    date: "06/07/2022",
    file: "abc",
  },
  {
    id: 3,
    name: "Gopang",
    age: "25",
    disease: "Allergy",
    date: "06/06/2022",
    file: "abc",
  },
];
