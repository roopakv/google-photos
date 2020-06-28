import fs from 'fs';
import apiConstants from './constants/api';
import ky from 'ky-universal';

const kyRequest = ky.create({
  prefixUrl: apiConstants.HOST
});

class Transport {
  private readonly headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.authToken}`
  }

  constructor(public readonly authToken: string) { }

  get(endpoint: string, options?: Record<string, string | number | boolean>): Promise<object> {
    return kyRequest(endpoint, {
      headers: this.headers,
      searchParams: options
    }).json();
  }

  upload(fileName: string, filePath: string): Promise<object> {
    return kyRequest
      .post('/v1/uploads', {
        headers: {
          'Content-Type': 'application/octet-stream',
          Authorization: `Bearer ${this.authToken}`,
          'X-Goog-Upload-File-Name': fileName,
          'X-Goog-Upload-Protocol': 'raw'
        },
        body: fs.createReadStream(filePath) as any // node-fetch supports ReadStreams
      })
      .json();
  }

  post(endpoint: string, options?: object): Promise<object> {
    return kyRequest
      .post(endpoint, {
        headers: this.headers,
        json: options
      })
      .json();
  }
}

export = Transport
