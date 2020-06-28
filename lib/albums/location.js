'use strict';

class Location {
  constructor(locationName, latitude, longitude) {
    this.locationName = locationName;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  setLocation(locationName, latitude, longitude) {
    this.locationName = locationName;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getLocation() {
    return {
      locationName: this.locationName,
      latlng: {
        latitude: this.latitude,
        longitude: this.longitude,
      },
    };
  }
}

module.exports = Location;
