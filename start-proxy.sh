docker stop envoy
docker rm envoy
docker build -t andrl/grpc-react-test .
docker run -d -p 8080:8080 --name envoy  andrl/grpc-react-test
docker ps