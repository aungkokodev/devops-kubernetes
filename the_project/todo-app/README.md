# Todo App

A todo app server

## Deployment Steps

### 1. Create the Cluster

```bash
k3d cluster create -a 2
```

### 2. Create the Deployment

```bash
kubectl apply -f manifests/deployment.yaml
```

### 3. Verify that Deployment is running

```bash
kubectl get pods
```

```bash
kubectl logs -f deployments/todo-app
```
