import request from 'request';
import { parseString } from 'xml2js';

export class IletiMerkezi {
  constructor(options) {
    this.API_URL = 'https://api.iletimerkezi.com/v1/send-sms/get/';
    this.OPTIONS = options;
  }

  send(text, numbers, callback) {
    const { USERNAME, PASSWORD, SENDER } = this.OPTIONS;
    request.post(`${this.API_URL}?username=${USERNAME}&password=${PASSWORD}&sender=${SENDER}&text=${text}&receipents=${numbers.join(',')}`, (error, response, body) => {
      parseString(body, (err, { response: { status } }) => {
        const { code, message } = _.first(status);

        // return callback
        return callback(_.first(code), _.first(message));
      });
    })
  }
}
