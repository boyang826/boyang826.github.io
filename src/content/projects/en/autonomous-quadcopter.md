---
title: "Autonomous Quadcopter"
summary: "A 25 cm quadcopter, built on a 2,500 CNY budget, that flew four missions with no pilot — and finished first of 18 teams."
role: Team lead · 6 people
org: UESTC
advisor: Prof. Sajjad Hussain
period: Feb – Jun 2025
year: 2025
order: 1
tags: [STM32F4, OpenMV, MicroPython, Sensor fusion, Cascaded PID, UART]
cover: ../../../assets/images/projects/autonomous-quadcopter/cover.jpg
coverAlt: "The quadcopter with its servo gripper, front view"
facts:
  - { value: '1st / 18', label: final ranking }
  - { value: '2,500 CNY', label: total budget }
  - { value: '10+', label: components integrated }
  - { value: '~1,100', label: lines of OpenMV code }
gallery:
  - { src: ../../../assets/images/projects/autonomous-quadcopter/airframe.jpg, alt: The finished airframe }
  - { src: ../../../assets/images/projects/autonomous-quadcopter/optical-flow.jpg, alt: Optical-flow sensor used for altitude hold }
  - { src: ../../../assets/images/projects/autonomous-quadcopter/grasp.jpg, alt: Picking up the target block }
  - { src: ../../../assets/images/projects/autonomous-quadcopter/gate.jpg, alt: Lining up a gate }
  - { src: ../../../assets/images/projects/autonomous-quadcopter/landing-pad.jpg, alt: Precision landing on the marked pad }
  - { src: ../../../assets/images/projects/autonomous-quadcopter/top-view.jpg, alt: Top view over the grasping area }
---

## The brief

Build a low-cost quadcopter that completes four tasks with no pilot input: avoid obstacles, recognize and grasp an object, fly through a tunnel, and land precisely on a marked pad. The budget for everything was 2,500 CNY.

## My role

I led a team of six and owned the system architecture: how the flight controller, vision module, sensors and gripper fit on a compact 25 cm frame and talk to each other.

## How it works

- **Flight control.** An STM32F4 flight controller runs cascaded PID loops for angular rate, angle and velocity.
- **Vision and mission logic.** An OpenMV camera runs about 1,100 lines of MicroPython: color-blob target detection, gripper servo control, and a step-by-step task state machine. It sends commands to the flight controller over UART at 115,200 baud.
- **Altitude.** To hold height reliably through the tunnel, we fused optical-flow and barometer data.

## Iterating

Most of the work was flight testing. Over hundreds of test flights we chased down failures one at a time and retuned the PID loops to suppress mechanical vibration.

## Outcome

The drone completed all four autonomous tasks and placed **first among 18 teams**. I wrote the work up as a first-author paper, accepted at AIAC 2025.
