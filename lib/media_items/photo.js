'use strict';

class Photo {
  constructor(cameraMake, cameraModel, focalLength, apertureFNumber, isoEquivalent, exposureTime) {
    Object.assign(this, {
      cameraMake,
      cameraModel,
      focalLength,
      apertureFNumber,
      isoEquivalent,
      exposureTime,
    });
  }

  setCameraMake(cameraMake) {
    this.cameraMake = cameraMake;
    return this;
  }

  setCameraModel(cameraModel) {
    this.cameraModel = cameraModel;
    return this;
  }

  setFocalLength(focalLength) {
    this.focalLength = focalLength;
    return this;
  }

  setApertureFNumber(apertureFNumber) {
    this.apertureFNumber = apertureFNumber;
    return this;
  }

  setIsoEquivalent(isoEquivalent) {
    this.isoEquivalent = isoEquivalent;
    return this;
  }

  setExposureTime(exposureTime) {
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
      exposureTime: this.exposureTime,
    };
  }
}

module.exports = Photo;
