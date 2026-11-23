---
title: "VR Motion-Capture Game Prototype"
summary: "Turning a room of infrared sensors into a game controller, so a player's real movement drives their avatar in VR."
role: Project member
org: University of Glasgow
advisor: Dr. Julien Le Kernec
period: Jul – Aug 2024
year: 2024
order: 3
tags: [Motive, Unity, Motion capture, VR, Real-time streaming]
cover: ../../../assets/images/projects/vr-motion-capture/cover.jpg
coverAlt: "Testing the motion-capture suit in the capture volume"
facts:
  - { value: '24', label: infrared sensors }
  - { value: 'Real time', label: skeleton streaming to Unity }
gallery:
  - { src: ../../../assets/images/projects/vr-motion-capture/suit.jpg, alt: Suited up with tracking markers }
  - { src: ../../../assets/images/projects/vr-motion-capture/arm.jpg, alt: Checking arm tracking }
  - { src: ../../../assets/images/projects/vr-motion-capture/studio.jpg, alt: The capture volume }
---

## The idea

A VR game where you don't press buttons: your body is the controller.

## What we built

- **A capture volume.** We set up 24 infrared sensors and used the Motive platform to reconstruct a player's skeleton in real time.
- **A live link into the game.** We streamed the skeletal data from Motive into Unity and mapped it onto a digital avatar, so physical movement shows up in the game instantly.
- **Tuning for feel.** We worked on how sensing and software fit together to keep latency low and tracking accurate, because lag is what breaks immersion first.
