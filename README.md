<div align="center">

# ☕ Starbucks Clone — DevSecOps on AWS 

### End-to-end CI/CD, Security Scanning & Kubernetes Deployment Pipeline

[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](#-cicd-pipeline-github-actions)
[![Docker](https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](#-docker-build-and-run)
[![Kubernetes](https://img.shields.io/badge/Orchestration-Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](#%EF%B8%8F-deploy-application-to-kubernetes)
[![AWS EKS](https://img.shields.io/badge/Cloud-AWS%20EKS-FF9900?style=for-the-badge&logo=amazoneks&logoColor=white)](#%EF%B8%8F-create-aws-eks-cluster)
[![Security](https://img.shields.io/badge/Security-Trivy-1904DA?style=for-the-badge&logo=aquasecurity&logoColor=white)](#-security-scanning-with-trivy)
[![Monitoring](https://img.shields.io/badge/Monitoring-Prometheus%20%7C%20Grafana-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)](#-monitoring-with-prometheus-and-grafana)

</div>

---

## 📖 Overview

This project demonstrates a complete, production-style **DevSecOps** pipeline for deploying a **React-based Starbucks Clone** application on **AWS Elastic Kubernetes Service (EKS)**.

It integrates CI/CD automation, container security scanning, containerization, Kubernetes orchestration, configuration management with Ansible, and full-stack observability with Prometheus and Grafana — following modern DevSecOps practices from code commit all the way to a monitored, live deployment.

---

## 📑 Table of Contents

- [Architecture](#-architecture)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Clone Repository](#-clone-repository)
- [Run Application Locally](#-run-application-locally)
- [Docker Build and Run](#-docker-build-and-run)
- [Security Scanning with Trivy](#-security-scanning-with-trivy)
- [Push Image to Docker Hub](#-push-image-to-docker-hub)
- [CI/CD Pipeline (GitHub Actions)](#-cicd-pipeline-github-actions)
- [Ansible Automation](#-ansible-automation)
- [Create AWS EKS Cluster](#%EF%B8%8F-create-aws-eks-cluster)
- [Deploy Application to Kubernetes](#%EF%B8%8F-deploy-application-to-kubernetes)
- [Access Application](#-access-application)
- [Monitoring with Prometheus and Grafana](#-monitoring-with-prometheus-and-grafana)
- [Project Screenshots](#-project-screenshots)
- [Useful Commands](#-useful-commands)
- [Security Best Practices](#%EF%B8%8F-security-best-practices)
- [Project Outcome](#-project-outcome)
- [Author](#-author)
- [Support](#-support)

---

## 🏗️ Architecture

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions CI/CD Pipeline
    │
    ├── Source Code Checkout
    ├── Install Dependencies
    ├── Build React Application
    ├── Trivy Security Scan
    ├── Docker Build
    ├── Docker Push
    └── Kubernetes Deployment
    │
    ▼
AWS ECR 
    │
    ▼
AWS EKS Cluster
    │
    ▼
Kubernetes
    │
    ├── Deployment
    ├── Pods
    ├── Services
    └── Load Balancer
    │
    ▼
Prometheus + Grafana Monitoring

Ansible
    │
    ├── EC2 Provisioning
    ├── Docker Installation
    ├── AWS CLI Installation
    ├── kubectl Installation
    ├── Helm Installation
    └── Environment Configuration
```
## 📸 Project Screenshots

### Application
<img width="1763" height="2760" alt="Screenshot_5-7-2026_1722_a6c3916f2075b469cb548d6f4784641b-316636329 ap-south-1 elb amazonaws com" src="https://github.com/user-attachments/assets/2b4e7dbb-cef3-494c-af44-ededd4c0dac8" />


### SonarQube
<img width="1763" height="1581" alt="Screenshot_5-7-2026_154356_43 205 120 247" src="https://github.com/user-attachments/assets/8f849c5e-2a88-476e-ae4e-9be6ac96b00c" />


<img width="1920" height="1020" alt="sonarqubesqa" src="https://github.com/user-attachments/assets/255491fa-db48-4d05-9457-82891f03228d" />


### Trivy


<img width="1920" height="1080" alt="trivy scan" src="https://github.com/user-attachments/assets/8afec4a2-32ef-473f-997e-b7ea3be126a0" />


## Grafana

<img width="1763" height="805" alt="Screenshot_5-7-2026_184226_a8065bed5a9fd451299141f3f029884e-2126466575 ap-south-1 elb amazonaws com" src="https://github.com/user-attachments/assets/8b1330cb-be57-415c-8155-3016a12ba990" />




<img width="1763" height="805" alt="Screenshot_5-7-2026_183727_a8065bed5a9fd451299141f3f029884e-2126466575 ap-south-1 elb amazonaws com" src="https://github.com/user-attachments/assets/68b3d288-62ca-4080-a6bd-44d8b1dc12c7" />







---

## 🚀 Features

| | |
|---|---|
| ✅ CI/CD using GitHub Actions | ✅ Docker Containerization |
| ✅ Trivy Security Scanning | ✅ Docker Hub Integration |
| ✅ AWS EKS Deployment | ✅ Kubernetes Orchestration |
| ✅ Ansible Automation | ✅ Prometheus Monitoring |
| ✅ Grafana Dashboards | ✅ Load Balancer Exposure |
| ✅ Cloud-Native Deployment | |

---

## 🛠️ Technology Stack

| Category | Tools |
|---|---|
| **Frontend** | ReactJS |
| **Version Control** | Git & GitHub |
| **CI/CD** | GitHub Actions |
| **Configuration Management** | Ansible |
| **Containerization** | Docker |
| **Security Scanning** | Trivy |
| **Cloud Platform** | AWS |
| **Container Registry** | Docker Hub |
| **Kubernetes Service** | AWS EKS |
| **Orchestration** | Kubernetes |
| **Package Manager** | Helm |
| **Monitoring** | Prometheus |
| **Visualization** | Grafana |

---

## 📂 Project Structure

```text
starbucks-clone/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── ansible/
│   ├── inventory
│   └── setup.yml
│
├── kubernetes/
│   └── deployment-service.yml
│
├── public/
├── src/
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Prerequisites

Install the following tools before starting:

- Git
- Docker
- Node.js
- AWS CLI
- kubectl
- eksctl
- Helm
- Ansible

Verify installations:

```bash
git --version
docker --version
aws --version
kubectl version --client
eksctl version
helm version
ansible --version
node --version
```

---

## 📥 Clone Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd starbucks-clone
```

---

## 🖥️ Run Application Locally

Install dependencies:

```bash
npm install
```

Start application:

```bash
npm start
```

Access application:

```text
http://localhost:3000
```

---

## 🐳 Docker Build and Run

Build image:

```bash
docker build -t starbucks-clone .
```

Run container:

```bash
docker run -d -p 3000:3000 starbucks-clone
```

Verify:

```bash
docker ps
```

---

## 🔐 Security Scanning with Trivy

**Filesystem Scan:**

```bash
trivy fs .
```

**Docker Image Scan:**

```bash
trivy image starbucks-clone:latest
```

> This scan helps identify vulnerabilities and security risks before deployment.

---

## 📤 Push Image to Docker Hub

Login:

```bash
docker login
```

Tag image:

```bash
docker tag starbucks-clone <DOCKERHUB_USERNAME>/starbucks-clone:latest
```

Push image:

```bash
docker push <DOCKERHUB_USERNAME>/starbucks-clone:latest
```

---

## 🔄 CI/CD Pipeline (GitHub Actions)

The GitHub Actions pipeline automates:

1. Source Code Checkout
2. Dependency Installation
3. Application Build
4. Trivy Security Scan
5. Docker Image Build
6. Docker Image Push
7. Kubernetes Deployment

**Required GitHub Secrets:**

| Secret | Description |
|---|---|
| `DOCKER_USERNAME` | Docker Hub username |
| `DOCKER_PASSWORD` | Docker Hub password / access token |
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `AWS_REGION` | Target AWS region |

**Workflow Location:**

```text
.github/workflows/main.yml
```

---

## 🤖 Ansible Automation

Ansible is used to automate server setup and software installation. used runner config to c7i-flex large and keep 30gig volume

### Inventory

```ini
[devsecops]
<EC2_PUBLIC_IP> ansible_user=ubuntu
```

### Verify Connectivity

```bash
ansible all -i inventory -m ping
```

Expected Output:

```text
SUCCESS => pong
```

### Execute Playbook

```bash
ansible-playbook -i inventory setup.yml
```

### Automated Tasks

- Docker Installation
- AWS CLI Installation
- kubectl Installation
- Helm Installation
- Kubernetes Setup
- Monitoring Setup
- GitHub Actions Runner Preparation

---

## ☁️ Create AWS EKS Cluster

Create Cluster:

```bash
eksctl create cluster \
  --name starbucks-cluster \
  --region us-east-1 \
  --nodegroup-name workers \
  --node-type t3.medium \
  --nodes 2
```

Verify Nodes:

```bash
kubectl get nodes
```

Expected Output:

```text
NAME                     STATUS
worker-node-1            Ready
worker-node-2            Ready
```

---

## ☸️ Deploy Application to Kubernetes

Deploy Resources:

```bash
kubectl apply -f deployment-service.yml
```

Verify Deployment:

```bash
kubectl get deployments
```

Verify Pods:

```bash
kubectl get pods
```

Verify Services:

```bash
kubectl get svc
```

---

## 🌐 Access Application

Retrieve External Load Balancer:

```bash
kubectl get svc
```

Example Output:

```text
EXTERNAL-IP
a1b2c3d4e5.us-east-1.elb.amazonaws.com
```

Access:

```text
http://<EXTERNAL-IP>
```

---

## 📊 Monitoring with Prometheus and Grafana

### Add Helm Repository

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

### Install Monitoring Stack

```bash
helm install monitoring prometheus-community/kube-prometheus-stack \
  -n monitoring \
  --create-namespace
```

Verify:

```bash
kubectl get pods -n monitoring
```

### Get Monitoring Services

```bash
kubectl get svc -n monitoring
```

### Retrieve Grafana Password

```bash
kubectl get secret monitoring-grafana \
  -n monitoring \
  -o jsonpath="{.data.admin-password}" | base64 --decode
```

Default Username:

```text
admin
```

---

## 🧪 Useful Commands

| Purpose | Command |
|---|---|
| View Pods | `kubectl get pods` |
| View Services | `kubectl get svc` |
| View Deployments | `kubectl get deployments` |
| View Monitoring Pods | `kubectl get pods -n monitoring` |
| View Logs | `kubectl logs <pod-name>` |
| Describe Pod | `kubectl describe pod <pod-name>` |

---

## 🛡️ Security Best Practices

- Use GitHub Secrets for credentials.
- Scan source code and images using Trivy.
- Avoid hardcoded credentials.
- Follow IAM least-privilege principles.
- Regularly update dependencies.
- Monitor vulnerabilities continuously.
- Restrict cluster access using RBAC.

---

## 🎯 Project Outcome

Successfully implemented a complete DevSecOps pipeline that automates:

- Application Build
- Security Validation
- Docker Image Creation
- Docker Registry Push
- Kubernetes Deployment
- Infrastructure Automation
- Monitoring and Observability

This project demonstrates real-world DevSecOps practices commonly used in enterprise cloud environments.

---

## 👨‍💻 Author

<div align="center">

**Shakeer Mohammed**

*DevOps | Cloud | Kubernetes | AWS | DevSecOps *

📧 [mds.shakeer@gmail.com](mailto:mds.shakeer@gmail.com) &nbsp;|&nbsp; 📍 Hyderabad, India

</div>

---

## ⭐ Support

If you found this project useful, consider giving the repository a **star** ⭐ and sharing your feedback!
