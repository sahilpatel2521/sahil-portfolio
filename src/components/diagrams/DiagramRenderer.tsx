"use client";

import React from "react";
import { DiagramType } from "@/types/project";
import { BleProtocolDiagram } from "./BleProtocolDiagram";
import { TranslationPipelineDiagram } from "./TranslationPipelineDiagram";
import { UdpJitterBufferDiagram } from "./UdpJitterBufferDiagram";
import { AudioProcessingDiagram } from "./AudioProcessingDiagram";

export interface DiagramRendererProps {
  type: DiagramType;
  className?: string;
}

export const DiagramRenderer: React.FC<DiagramRendererProps> = ({ type, className }) => {
  switch (type) {
    case "ble-protocol":
      return <BleProtocolDiagram className={className} />;
    case "translation-pipeline":
      return <TranslationPipelineDiagram className={className} />;
    case "udp-jitter":
      return <UdpJitterBufferDiagram className={className} />;
    case "audio-processing":
      return <AudioProcessingDiagram className={className} />;
    default:
      return null;
  }
};
