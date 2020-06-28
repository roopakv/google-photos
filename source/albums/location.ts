class Location {
  constructor(public locationName: string, public latitude: number, public longitude: number) { }

  setLocation(locationName: string, latitude: number, longitude: number) {
    this.locationName = locationName;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getLocation() {
    return {
      locationName: this.locationName,
      latlng: {
        latitude: this.latitude,
        longitude: this.longitude
      }
    };
  }
}

export = Location
