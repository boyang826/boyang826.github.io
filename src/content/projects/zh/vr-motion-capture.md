---
title: "VR 动作捕捉游戏原型"
summary: "把一间布满红外传感器的房间变成游戏手柄，让玩家真实的动作驱动 VR 里的角色。"
role: 项目成员
org: 格拉斯哥大学
advisor: Julien Le Kernec 博士
period: 2024.07 – 2024.08
year: 2024
order: 3
tags: [Motive, Unity, 动作捕捉, VR, 实时数据流]
cover: ../../../assets/images/projects/vr-motion-capture/cover.jpg
coverAlt: "在动捕空间里测试动捕服"
facts:
  - { value: '24', label: 个红外传感器 }
  - { value: '实时', label: 骨骼数据传入 Unity }
gallery:
  - { src: ../../../assets/images/projects/vr-motion-capture/suit.jpg, alt: 穿上带标记点的动捕服 }
  - { src: ../../../assets/images/projects/vr-motion-capture/arm.jpg, alt: 检查手臂追踪 }
  - { src: ../../../assets/images/projects/vr-motion-capture/studio.jpg, alt: 动作捕捉空间 }
---

## 想法

做一个不用按键的 VR 游戏：你的身体就是手柄。

## 我们做了什么

- **搭建动捕空间**：布置了 24 个红外传感器，用 Motive 平台实时重建玩家的骨骼。
- **接入游戏**：把 Motive 的骨骼数据实时传进 Unity，映射到虚拟角色上，现实中的动作会立刻出现在游戏里。
- **调手感**：优化传感与软件之间的衔接，降低延迟、提高追踪精度，因为延迟最先破坏沉浸感。
