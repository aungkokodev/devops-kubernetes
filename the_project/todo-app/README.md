# Todo App

A todo app server

## Deployment Steps

### 1. Build the Docker Image

```bash
docker build -t todo-app .
```

### 2. Create the Cluster

```bash
k3d cluster create -a 2
```

### 3. Import the Image to the Cluster

```bash
k3d image import todo-app
```

### 4. Create the Deployment

```bash
kubectl create deployment todo-app --image=todo-app
```

### 5. Edit Image Pull Policy

```bash
kubectl edit deployment todo
```

Set `imagePullPolicy` from `Always` to `IfNotPresent` or `Never`

### 6. Verify that Deployment is running

```bash
kubectl get pods
```

```bash
kubectl logs -f deployments/todo-app
```
