import React from "react"
import {
  FaEye,
  FaWaveSquare,
  FaLanguage,
  FaRegClock,
  FaGripLines,
  FaMicrochip,
  FaChartBar,
  FaMeteor,
} from "react-icons/fa"
export const projectTextData = {
  vision: {
    title: "Vision",
    des: "Classification, Object detection, Tracking",
    icon: <FaEye />,
  },
  e2e: {
    title: "End-to-end Data Pipeline",
    des: "Distributed, Highly available, Big data",
    icon: <FaGripLines />,
  },
  ts: {
    title: "Time-series",
    des:
      "Trend prediction, Demand forecasting, Fraud detection, Anomaly detection",
    icon: <FaRegClock />,
  },
  nlp: {
    title: "Natural Language Processing",
    des:
      "Natural language understanding, Recommendation, Document intelligence",
    icon: <FaLanguage />,
  },
  sp: {
    title: "Signal Processing",
    des: "Biomedical, Audio, Real-time, Offline, Localization, Sensor fusion",
    icon: <FaWaveSquare />,
  },
  ed: {
    title: "Embedded Development",
    des:
      "Ad-hoc sensor networks, Deep learning on the edge, Data acquisition, IMU",
    icon: <FaMicrochip />,
  },
  fpga: {
    title: "FPGA Design",
    des: "Deep learning implementation, Interface logic",
    icon: <FaMeteor />,
  },
  sm: {
    title: "Statistical Modelling",
    des: "Monte-Carlo methods, Bayesian methods",
    icon: <FaChartBar />,
  },
}
