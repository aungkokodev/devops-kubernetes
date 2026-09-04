# Log Output

This app outputs a random string with a timestamp every 5 seconds.

## Deployment Steps

### 1. Build the Docker Image

```bash
docker build -t log-output .
```

### 2. Create the Cluster

```bash
k3d cluster create -a 2
```

### 3. Import the Image to the Cluster

```bash
k3d image import log-output
```

### 4. Create the Deployment

```bash
kubectl create deployment log-output --image=log-output
```

### 5. Edit Image Pull Policy

```bash
kubectl edit deployment log-output
```

Set `imagePullPolicy` from `Always` to `IfNotPresent` or `Never`

### 6. Verify that Deployment is running

```bash
kubectl get pods
```

```bash
kubectl logs -f deployments/log-output
```
