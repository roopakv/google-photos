class Video {
  constructor(public cameraMake: string, public cameraModel: string, public fps: string, public status: string) { }

  setCameraMake(cameraMake: string) {
    this.cameraMake = cameraMake;
    return this;
  }

  setCameraModel(cameraModel: string) {
    this.cameraModel = cameraModel;
    return this;
  }

  setFPS(fps: string) {
    this.fps = fps;
    return this;
  }

  setStatus(status: string) {
    this.status = status;
    return this;
  }

  toJSON() {
    return {
      cameraMake: this.cameraMake,
      cameraModel: this.cameraModel,
      fps: this.fps,
      status: this.status
    };
  }
}

export = Video
