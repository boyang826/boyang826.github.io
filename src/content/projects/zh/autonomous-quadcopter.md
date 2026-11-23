---
title: "自主四旋翼无人机"
summary: "一架 25 cm 轴距、预算 2,500 元的四旋翼，无人操控完成四项任务，在 18 支队伍中拿到第一。"
role: 项目负责人 · 6 人团队
org: 电子科技大学
advisor: Sajjad Hussain 教授
period: 2025.02 – 2025.06
year: 2025
order: 1
tags: [STM32F4, OpenMV, MicroPython, 传感器融合, 串级 PID, UART]
cover: ../../../assets/images/projects/autonomous-quadcopter/cover.jpg
coverAlt: "带舵机夹爪的四旋翼正面"
facts:
  - { value: '1st / 18', label: 最终排名 }
  - { value: '2,500 元', label: 总预算 }
  - { value: '10+', label: 集成部件 }
  - { value: '~1,100', label: 行 OpenMV 代码 }
gallery:
  - { src: ../../../assets/images/projects/autonomous-quadcopter/airframe.jpg, alt: 完成后的机架 }
  - { src: ../../../assets/images/projects/autonomous-quadcopter/optical-flow.jpg, alt: 用于定高的光流传感器 }
  - { src: ../../../assets/images/projects/autonomous-quadcopter/grasp.jpg, alt: 抓取目标物块 }
  - { src: ../../../assets/images/projects/autonomous-quadcopter/gate.jpg, alt: 对准框门 }
  - { src: ../../../assets/images/projects/autonomous-quadcopter/landing-pad.jpg, alt: 精准降落在标记上 }
  - { src: ../../../assets/images/projects/autonomous-quadcopter/top-view.jpg, alt: 俯视抓取区域 }
---

## 任务

做一架低成本四旋翼，在无人操控的情况下完成四项任务：避障、识别并抓取物体、穿越隧道、精准降落在标记上。整机预算 2,500 元。

## 我的角色

我带领 6 人团队，负责整体系统架构：飞控、视觉模块、传感器和夹爪怎样装进 25 cm 轴距的机身，又怎样相互通信。

## 系统怎么工作

- **飞行控制**：STM32F4 飞控运行角速度、角度、速度三级串级 PID。
- **视觉与任务逻辑**：OpenMV 摄像头上运行约 1,100 行 MicroPython，负责色块目标识别、夹爪舵机控制和分步骤的任务状态机，并通过 UART（115200 波特率）向飞控发送指令。
- **定高**：为了在隧道里稳定保持高度，我们融合了光流和气压计数据。

## 迭代

大部分时间花在试飞上。数百次试飞中，我们逐个排查失败原因，并重新整定 PID 参数来抑制机身振动。

## 结果

无人机完成了全部四项自主任务，在 **18 支队伍中获得第一名**。我把项目成果整理成第一作者论文，被 AIAC 2025 录用。
