PATH=$PATH:node_modules/.bin
protoc -I=/home/andrey/work/examples/grpc/examples/protos route_guide.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
