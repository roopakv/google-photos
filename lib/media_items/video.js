'use strict';

class Video {
  constructor(cameraMake, cameraModel, fps, status) {
    Object.assign(this, {cameraMake, cameraModel, fps, status});
  }

  setCameraMake(cameraMake) {
    this.cameraMake = cameraMake;
    return this;
  }

  setCameraModel(cameraModel) {
    this.cameraModel = cameraModel;
    return this;
  }

  setFPS(fps) {
    this.fps = fps;
    return this;
  }

  setStatus(status) {
    this.status = status;
    return this;
  }

  toJSON() {
    return {
      cameraMake: this.cameraMake,
      cameraModel: this.cameraModel,
      fps: this.fps,
      status: this.status,
    };
  }
}

module.exports = Video;
