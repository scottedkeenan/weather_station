console.log('sockets script loaded');

window.addEventListener("DOMContentLoaded", () => {
	  // Initialize the UI.
	  // TODO
	  // Open the WebSocket connection and register event handlers.
	  const websocket = new WebSocket("ws://localhost:8001/");
	  receiveData(websocket);
});

    function updateWeatherDataUI() {
        console.log("weather data");
    }

    function receiveData(websocket) {
	  websocket.addEventListener("message", ({ data }) => {
	    const event = JSON.parse(data);
	    switch (event.type) {
	      case "data":
		    // Update the UI with the data.

		    const ws_element = document.getElementById("wind_speed");
            ws_element.innerHTML = event.wind_speed;
		    const wd_element = document.getElementById("wind_direction");
            wd_element.innerHTML = event.wind_direction;
		    const gs_element = document.getElementById("gust_speed");
            gs_element.innerHTML = event.gust_speed;

		    console.log(data);
		updateWeatherDataUI();
		break;
	      case "error":
		showMessage(event.message);
		break;
	      default:
		throw new Error(`Unsupported event type: ${event.type}.`);
	    }
	  });
	}