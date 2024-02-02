#!/usr/bin/env python

import asyncio
import json
import random

import websockets


async def handler(websocket):
    while True:
        await asyncio.sleep(5)
        # Get weather data from sensors here
        weather_data = {
            "type": "data",
            "wind_speed": random.randint(0, 30),  # Generate a random wind value between 0 and 60
            "wind_direction": random.randint(0, 360),  # Generate a random direction value between 0 and 360
            "gust_speed": random.randint(0, 30),  # Generate a random gust value between 0 and 30
        }
        print('Sending weather data')
        await websocket.send(json.dumps(weather_data))


async def main():
    async with websockets.serve(handler, "", 8001):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())

