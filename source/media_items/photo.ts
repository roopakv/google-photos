class Photo {
  constructor(public cameraMake: string, public cameraModel: string, public focalLength: string, public apertureFNumber: string, public isoEquivalent: string, public exposureTime: string) { }

  setCameraMake(cameraMake: string) {
    this.cameraMake = cameraMake;
    return this;
  }

  setCameraModel(cameraModel: string) {
    this.cameraModel = cameraModel;
    return this;
  }

  setFocalLength(focalLength: string) {
    this.focalLength = focalLength;
    return this;
  }

  setApertureFNumber(apertureFNumber: string) {
    this.apertureFNumber = apertureFNumber;
    return this;
  }

  setIsoEquivalent(isoEquivalent: string) {
    this.isoEquivalent = isoEquivalent;
    return this;
  }

  setExposureTime(exposureTime: string) {
    this.exposureTime = exposureTime;
    return this;
  }

  toJSON() {
    return {
      cameraMake: this.cameraMake,
      cameraModel: this.cameraModel,
      focalLength: this.focalLength,
      apertureFNumber: this.apertureFNumber,
      isoEquivalent: this.isoEquivalent,
      exposureTime: this.exposureTime
    };
  }
}

export = Photo
