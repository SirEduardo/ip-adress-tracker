import MapView from "./components/MapView";


function App() {
  return (
    <main className="w-screen h-screen">
      <header
        className="bg-[url('./images/pattern-bg-desktop.png')] 
      h-56 flex flex-col pt-5 items-center
      gap-4 w-screen"
      >
        <div className="text-white text-xl font-bold">IP Address Tracker</div>
        <input
          type=""
          placeholder="Search for any IP address or domain"
          className="p-3 w-2/5 rounded-lg "
        />
      </header>
      <div className="flex justify-center -mt-12 ">
        <div
          className="flex bg-gray-100 p-7 
            justify-around w-4/5 rounded-lg
        "
        >
          <div>
            <p>IP ADDRESS</p>
            <strong>192.212.174.101</strong>
          </div>
          <div>
            <p>LOCATION</p>
            <strong>Brooklyn,Ny 10001</strong>
          </div>
          <div>
            <p>TIMEZONE</p>
            <strong>UTC-05:00</strong>
          </div>
          <div>
            <p>ISP</p>
            <strong>SpaceX Starlink</strong>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen" >
        <MapView/>
      </div>
    </main>
  );
}

export default App;
