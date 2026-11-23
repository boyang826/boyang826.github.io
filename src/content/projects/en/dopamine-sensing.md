---
title: "Wireless Dopamine-Sensing Prototype"
summary: "Getting a wireless electrochemical sensor for brain–computer interface research to stream complete, usable readings in real time."
role: Research assistant
org: UESTC
advisor: Prof. Lizhu Li
period: Jul – Aug 2025
year: 2025
order: 2
tags: [nRF24LE1, Embedded C, Keil C51, Altium Designer, MATLAB, Cyclic voltammetry]
cover: ../../../assets/images/projects/dopamine-sensing/cover.jpg
coverAlt: "The nRF24LE1 wireless board"
facts:
  - { value: '2.4 GHz', label: wireless link }
  - { value: 'V + I', label: in every packet }
  - { value: '0–1.25 V', label: configurable sweep }
gallery:
  - { src: ../../../assets/images/projects/dopamine-sensing/electrode.jpg, alt: Three-electrode setup in solution }
  - { src: ../../../assets/images/projects/dopamine-sensing/cv-curves.jpg, alt: Cyclic voltammetry curves on the host }
  - { src: ../../../assets/images/projects/dopamine-sensing/board-alt.jpg, alt: The receiver board }
---

## Context

The lab was reproducing a published wireless, implantable neural probe that measures dopamine electrochemically. My job was to get its wireless readout working end to end.

## What I did

- **Brought the link back.** The nRF24LE1-based board had circuit-topology faults. I reworked the PCB layout in Altium and the C firmware in Keil C51, and restored real-time 2.4 GHz transmission to the host.
- **Made the data complete.** The original firmware only sent current, but cyclic voltammetry needs current plotted against voltage. I redesigned the TX/RX packet to carry both the DAC sweep voltage and the ADC current, and made the 0–1.25 V sweep window configurable.
- **Made it visible.** I wrote an event-driven MATLAB serial plotter so researchers could watch CV curves form during an experiment.
- **Built a reference.** I brought up the open-source NanoStat Wi-Fi potentiostat as a comparison platform for in vitro dopamine detection.
- **Wrote it down.** I documented setup, flashing and troubleshooting so the next student could reproduce the system.

## What I learned

A sensor is only as useful as the data that reaches the person using it. The most valuable fix here was not the hardest one: sending voltage alongside current turned a stream of numbers into a curve a researcher could read.
