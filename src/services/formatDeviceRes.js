const formatDeviceRes = (device) => {
  const images_length = device.images_list.length;
  console.log(images_length);
  return {
    id: device._id,
    battery: device.battery,
    brightness: device.brightness,
    coordinates: device.coordinates,
    humi: device.humi,
    led_color: device.led_color,
    location: device.location,
    optic: device.optic,
    temp: device.temp,
    rain: device.rain,
    status: device.status,
    grid_status: device.grid_status,
    time_end: device.time_end,
    time_start: device.time_start,
    time_send: device.time_send,
    image: images_length
      ? {
          url: device.images_list[images_length - 1].url,
          created_at: device.images_list[images_length - 1].created_at,
          updated_at: device.images_list[images_length - 1].updated_at,
        }
      : null,
  };
};

export default formatDeviceRes;
