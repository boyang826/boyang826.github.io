---
title: "无线多巴胺检测原型"
summary: "让一套用于脑机接口研究的无线电化学传感系统，实时传回完整、可用的数据。"
role: 研究助理
org: 电子科技大学
advisor: 李丽珠 教授
period: 2025.07 – 2025.08
year: 2025
order: 2
tags: [nRF24LE1, 嵌入式 C, Keil C51, Altium Designer, MATLAB, 循环伏安法]
cover: ../../../assets/images/projects/dopamine-sensing/cover.jpg
coverAlt: "nRF24LE1 无线电路板"
facts:
  - { value: '2.4 GHz', label: 无线链路 }
  - { value: 'V + I', label: 每个数据包同时回传 }
  - { value: '0–1.25 V', label: 扫描范围可配置 }
gallery:
  - { src: ../../../assets/images/projects/dopamine-sensing/electrode.jpg, alt: 溶液中的三电极 }
  - { src: ../../../assets/images/projects/dopamine-sensing/cv-curves.jpg, alt: 上位机上的循环伏安曲线 }
  - { src: ../../../assets/images/projects/dopamine-sensing/board-alt.jpg, alt: 接收端电路板 }
---

## 背景

实验室在复现一篇已发表的无线、可植入神经探针，它用电化学方法检测多巴胺。我的任务是让其中的无线读出系统从头到尾跑通。

## 我做了什么

- **恢复无线链路**：基于 nRF24LE1 的电路板存在拓扑故障。我在 Altium 中改进了 PCB 布局，在 Keil C51 中修改了 C 固件，恢复了到上位机的 2.4 GHz 实时传输。
- **让数据完整**：原固件只回传电流，但循环伏安分析需要电流对电压的曲线。我重新设计了收发两端的数据包，同时回传 DAC 扫描电压和 ADC 电流，并让 0–1.25 V 的扫描范围可以配置。
- **让数据看得见**：我编写了事件驱动的 MATLAB 串口上位机，研究人员可以在实验过程中实时看到 CV 曲线。
- **搭建对照平台**：我搭建了开源的 NanoStat Wi-Fi 恒电位仪，作为体外多巴胺检测的对照。
- **写成文档**：我整理了搭建、烧录和排障文档，方便后续同学复现整套系统。

## 收获

传感器有多大用处，取决于最终到达使用者手里的数据。这里最有价值的改动并不是最难的那个：把电压和电流一起传回来，一串数字就变成了研究人员能直接读懂的曲线。
