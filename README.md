# 🧠 Autonomous AI Payment Ecosystem
**AI Agents on Arc with USDC — Hackathon Project**

---

## 📌 Overview

The **Autonomous AI Payment Ecosystem** is an educational, frontend-based prototype developed for the **AI Agents on Arc with USDC** hackathon.  
The project demonstrates how **agent-based automation** can be applied to conditional payment workflows using a **rule-driven, explainable approach** in a simulated environment.

Rather than focusing on real blockchain deployment or self-learning AI models, this prototype emphasizes **workflow-level autonomy**, **system transparency**, and **clear agent responsibilities**.

---

## 🎯 Project Motivation

Modern payment systems often require automated decision-making while maintaining transparency and control.  
This project was created to explore how **modular software agents** can independently coordinate payment verification, execution, and monitoring once a workflow is initiated by a user.

The system is designed to be:

- easy to understand  
- ethically represented  
- suitable for academic and hackathon evaluation  

---

## 🧩 System Architecture

The system follows an **agent-based architecture** inspired by **Arc-style execution models**, where responsibilities are divided across modular agents coordinated through an orchestration layer.

### 🔹 Core Agents

**Verifier Agent**  
Validates payment details using rule-based checks, including amount, sender, receiver, and city.

**Payment Agent**  
Simulates the execution of a payment after successful verification.

**Monitor Agent**  
Records and displays structured logs to provide visibility into workflow execution.

Each agent operates independently and is coordinated through a centralized orchestration layer.

---

## ⚙️ Workflow Description

1. A user submits payment details through the frontend interface.
2. The system enters a temporary **PENDING** state.
3. The **Verifier Agent** evaluates the payment data.
4. If verification fails, the workflow terminates with **FAILED** status.
5. If verification succeeds, the **Payment Agent** executes the payment.
6. The **Monitor Agent** logs all actions performed by the system.
7. The workflow resolves into a final **PAID** or **FAILED** state.
8. Completed payments are stored in the **Payment History** for reference.

---
## 🤖 What “Autonomous” Means in This Project

In this context, *autonomous* refers to **workflow-level autonomy**, not cognitive or learning-based autonomy.

Once initiated, the system:

- executes all verification and payment steps automatically  
- requires no human intervention during execution  
- deterministically resolves into a final state  

This autonomy is **architectural**, not intelligent.

---

## 🔮 Future Extensibility

While the current implementation prioritizes rule-driven logic for clarity and evaluation, the architecture is intentionally designed as an **extensible foundation**.

In future iterations, the same agent-based structure could be adapted to:

- integrate blockchain-backed payment settlement  
- incorporate learning-based decision models  
- connect with external verification services  

These extensions are **conceptual** and are **not part of the current implementation**.

---

## 🛠️ Technology Stack

- **Frontend:** React + TypeScript  
- **Build Tool:** Vite  
- **State Management:** React Hooks  
- **Agent Logic:** Rule-based, deterministic logic  
- **UI Styling:** Custom CSS  
- **Deployment:** Vercel  

---
## 🚀 Running the Project Locally

To run the project locally, follow these steps:

```bash
npm install
npm run dev
```

---


---

## 🌐 Deployment

The project is deployed using Vercel as a static frontend application.

https://ai-agents-on-arc-autonomous-payment.vercel.app/
