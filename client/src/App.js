import './App.css';
const { RouteGuideClient } = require('./route_guide_grpc_web_pb');
const { Point, Feature } = require('./route_guide_pb.js');

var client = new RouteGuideClient('http://localhost:8080', null, null);

function App() {
  const callGrpcService = () => {
    const request = new Point();

    request.setLatitude(407838351);
    request.setLongitude(-746143763);


    client.getFeature(request, {}, (err, response) => {
      if (response == null) {
        console.log('Error', err)
      }else {
        console.log(response.getName());
        console.log(response.getLocation());
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button style={{padding:10}} onClick={callGrpcService}>Click for grpc request</button>
      </header>
    </div>
  );
}

export default App;
