---
title: WASMICO - Micro-containerization in Microcontrollers for the IoT
image: thesis.png
startDate: "2021-11"
endDate: "2022-06"
teamSize: 1
tags: [C++, WebAssembly, Arduino, ESP-IDF]
---
* Masters Thesis, with a final score of 17/20.
* WASMICO is a **micro-containerization platform built on top of Arduino and ESP-IDF** that allows the **execution of WebAssembly modules on-demand** on a resource-constrained IoT device. By using a Wasm3 interpreter, it supports any programming language that can be compiled to WASM, like C++, Go, Rust, among many others. It supports operations that enable the user to control and manage the complete lifecycle of their tasks and containers, all through the HTTP protocol, in an **over-the-air (OTA)** manner that does not require a reboot of the device or a physical connection to it.
* WASMICO also acts as an abstraction between the high-level specifications and the device's low-level capabilities, like reading and writing to pins and printing to the serial port. Furthermore, it increases code portability to other devices, and isolation and security, given that a crash of a task does not affect other running tasks or the rest of the system. 
* Benchmarked the tool against other state-of-the-art solutions, both in terms of efficiency and computation and in terms of RAM and memory usage, with WASMICO having the overall better performance.