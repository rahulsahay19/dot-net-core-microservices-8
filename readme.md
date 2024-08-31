# .Net Core Microservices using Clean Architecture Implementation

![updated_clean_architecture](https://github.com/user-attachments/assets/fae29e7d-c002-458e-acc4-342167ca68fc)


Hi Friends,

Microservices are a design pattern in which applications are composed of independent modules that communicate with each other within well defined boundaries. This makes it easier to develop, test, and deploy isolated parts of your application.

Welcome to "Microservices learning series" - the ultimate course for developers who want to learn how to build scalable, efficient, and robust Microservices using the .Net Core platform along with Docker, Kubernetes, Azure AD, Rabbit MQ, Angular 15, GRPC, Istio Service Mesh, SQL Server, MongoDB, PostGreSQL, Redis, Ocelot, Nginx, Azure, Helm Charts, and Auto Scale.

In this comprehensive course, you'll gain hands-on experience with Docker and Kubernetes to deploy and manage your Microservices. You'll learn how to integrate Azure AD for secure authentication and authorization, Rabbit MQ for messaging, and GRPC for efficient communication between Microservices.

You'll also learn how to use Istio Service Mesh to manage Microservices traffic, and how to configure and optimize SQL Server, MongoDB, PostGreSQL, and Redis for your Microservices. You'll use Ocelot and Nginx to manage your Microservices API gateway and deploy your Microservices to Azure using Helm Charts.

By the end of this course, you'll have a solid understanding of how to design, develop, and deploy Microservices using the latest industry-standard tools and practices, including auto-scaling.

Who Should Take This Course?

- Freshers who want to learn how to build scalable and efficient systems using Microservices architecture.

- Junior Developers who are looking to level up their skills and gain experience building real-world Microservices applications.

- Mid-Level Developers who want to learn how to build and deploy Microservices using the latest industry-standard tools and practices.

- Senior Developers who are looking to stay ahead of the curve and keep their skills up-to-date with the latest trends and technologies.

- Software Architects who want to learn how to design and develop scalable, distributed, and fault-tolerant systems using Microservices.

- Technical Leads who want to gain a deeper understanding of Microservices architecture and lead their teams in building scalable and efficient systems.

Enroll now and take the next step in your Microservices journey. 
Other parts include

2. Securing Microservices using Azure AD

3. Implementing Cross Cutting Concerns

4. Versioning Microservices

5. Building Angular Application for MicroServices

6. Deploying Microservices to Kubernetes and AKS

## Who Should Enroll

This course is suitable for anyone who wants to develop their personal and professional skills. Whether you are a student, a working professional, an entrepreneur, or someone who simply wants to learn and grow, this course is for you.

Having a basic understanding of C#, Docker, and Angular would be really helpful!. All you need is an open mind and a willingness to learn. By the end of this course, you will have a deeper understanding of yourself and the world around you, and be equipped with practical tools to help you succeed..

## Course Links:

- [Creating .Net Core Microservices using Clean Architecture](https://www.udemy.com/course/creating-net-core-microservices-using-clean-architecture/?couponCode=2CCD4C46CD20A6C4BAE0)
  
- [Building FullStack E-Commerce App using SpringBoot & React](https://www.udemy.com/course/building-fullstack-e-commerce-app-using-springboot-react/?couponCode=3570F02B303375EAF4B1)

- [Building FullStack E-Commerce App using SpringBoot & Angular](https://www.udemy.com/course/building-fullstack-ecommerce-app-using-springboot-angular/?couponCode=6B219FD3BDD2D7EEDAAF)

- [Building FullStack App using .NetCore, Angular & ChatGPT](https://www.udemy.com/course/building-fullstack-app-using-netcore-angular-chatgpt/?couponCode=CFCABDEFE5600A6EB267)

- [Docker & Kubernetes for .Net and Angular Developers](https://www.udemy.com/course/docker-for-net-and-angular-developers/?couponCode=3649D0167235A8D11778)

- [AI Mastery Unleashed: ChatGPT and Beyond](https://www.udemy.com/course/ai-mastery-unleashed-chatgpt-and-beyond/?couponCode=321CE2D0B80CB60D9F32)

## Blog

- [Medium](https://rahulsahay19.medium.com/)


## Introduction
In this section, you will learn how to build full fledged Ecommerce app using asp.net core, docker, kubernetes, helm charts, service mesh and angular 18. Below are the key takeaways from this project. Anyone who wants to learn and write professional enterpise projects can refer this project. This project not only illustrates how to implement all layers to the point rather it adheres to best practices as followed by industry.
 
Here, you will learn variety of technologies like

-	Clean Architecture
-	.Net Core
-	Docker
-	Kubernetes
-	Azure
-	Microservices
-	Service Mesh 
-	Angular
-	ELK Stack
-	Pub/Sub Pattern
-	GRPC
-	Repository Pattern
-	Unit of Work Pattern
-	Specification Pattern
-	Helm Charts

## How Project is structured 

Below, I have Pasted the high level glimpse project structure.

![image](https://github.com/user-attachments/assets/aa16083b-d89d-4974-862d-1a2d8dc6c373)

Client Structure goes like

![image](https://user-images.githubusercontent.com/3886381/223711577-17c37c86-35b4-424c-8c27-79f40317ac77.png)

## Deployments

![image](https://user-images.githubusercontent.com/3886381/223712628-2abbd0f1-ec32-4158-a9b2-842aed0f1096.png)

## Warning and Disclaimer

Every effort applied to make this project complete and accurate to the topic, but no warranty is implied. Any implementation in this project are MY OWN and also borrowed from best practices segment. ALL content presented AS-IS, for learning purposes only. Also this course will go  keep updated as and when new and stable framework gets released.

### Installation
Follow these steps to get your development environment set up: (Before Run Start the Docker Desktop)
1. Clone the repository
2. Once Docker for Desktop is installed, go to the **Settings > Advanced option**, from the Docker icon in the system tray, to configure the minimum amount of memory and CPU like so:
* **Memory: 7 GB**
* CPU: 5
3. At the root directory which include **docker-compose.yml** files, run below command:
```csharp
docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d
```

## Project Overview
![image](https://user-images.githubusercontent.com/3886381/221078142-269efa48-865c-42fe-8304-7c0d69603f52.png)

## Technologies Used
![image](https://user-images.githubusercontent.com/3886381/234681214-9891c443-f0f1-4066-baca-effdee7f183d.png)

## Workflow

![image](https://github.com/user-attachments/assets/7c3814a8-8b98-427e-b679-fa5972e89420)

![image](https://github.com/user-attachments/assets/e7aeba0e-0597-4156-abbf-08cbf1474014)

![image](https://github.com/user-attachments/assets/ba637c58-55c2-463c-8905-89a456c2f5f1)

![image](https://github.com/user-attachments/assets/ad979e15-0688-4a53-827a-d77cda4c2e8e)

![image](https://github.com/user-attachments/assets/f4358855-90a0-4e6f-8668-152f7eebca29)

![image](https://github.com/user-attachments/assets/0a13491b-e79e-4fb4-9462-19e8bd7a9e39)

![image](https://github.com/user-attachments/assets/afe67ae3-efbc-406a-a6d5-3a9d326dbe3d)

![image](https://github.com/user-attachments/assets/13da03f3-384a-4c7f-b170-37ddae856608)


## Pub/Sub Pattern

![image](https://user-images.githubusercontent.com/3886381/221078310-f5fda60f-e194-4fea-98b2-7d9ac1318017.png)

* In the above diagram as we can see before checkout event created basket gets deleted from Redis database.

### Container Management via Portainer

![image](https://github.com/user-attachments/assets/fdbea957-419b-4cdd-94d8-7b537cef3252)


## Elastic Search
![image](https://user-images.githubusercontent.com/3886381/223689686-55b3200b-8391-409f-ad23-bf329d8284de.png)

## ACR Workloads

![image](https://user-images.githubusercontent.com/3886381/223693223-a2add640-519b-45cf-b502-74b5564a2999.png)

## AKS Workloads

![image](https://user-images.githubusercontent.com/3886381/223701468-79b636dc-3448-4506-9a9a-6f115d42d93c.png)

## Pods Overview Kube Lens
![image](https://user-images.githubusercontent.com/3886381/223701662-e209e345-785c-414c-841e-fe0e076160ec.png)

## Deployments

![image](https://user-images.githubusercontent.com/3886381/223701850-c4bdfc70-3070-4322-bc35-852eb15ab815.png)

## Replicasets

![image](https://user-images.githubusercontent.com/3886381/223702827-788839c9-a60d-4f9f-80d6-c9c0eb613e84.png)

## ConfigMaps

![image](https://user-images.githubusercontent.com/3886381/223702048-8e792bf7-205e-4a2a-b4e8-30ff9c60604c.png)

## Secrets

![image](https://user-images.githubusercontent.com/3886381/223702144-294ef5ce-f129-4d26-9fcb-5d909cb936d5.png)

## HPA (Horizontal Pods AutoScaler)

![image](https://user-images.githubusercontent.com/3886381/223702329-520c6fdf-9d51-4994-8f8c-cae6c12883c3.png)

## Istio enabled

kubectl apply -f istio-init.yaml
kubectl apply -f istio-minikube.yaml
kubectl apply -f kiali-secret.yaml

![image](https://user-images.githubusercontent.com/3886381/223704261-9ce0ecab-9866-4633-b71b-7947b38fce76.png)

### Istio via Kubelens

![image](https://user-images.githubusercontent.com/3886381/223685878-0dd5e6ad-2e20-476a-9429-976bb3c4d1e6.png)

## Kiali (Service Mesh Management for Istio)

We can port forward for the same using lens

This will bring Kiali UI like 

![image](https://user-images.githubusercontent.com/3886381/223704652-66f033c3-c37d-4af0-987b-afe822b060a1.png)

## Kiali catalog Workload

![image](https://user-images.githubusercontent.com/3886381/223704911-47535b5b-4f0f-4560-843c-6ba4ed6d5cc8.png)

## Kiali Service Overview

![image](https://user-images.githubusercontent.com/3886381/223705013-5feca99f-d5a5-4969-8c02-89b283171d75.png)

## Graphana Visualization

![image](https://user-images.githubusercontent.com/3886381/223705814-8da56911-ee72-46be-b90a-19f1491260fe.png)

## What's Next

I will be adding Azure API Gateway and Azure AD shortly to this course. Till then stay tuned and Happy Coding.