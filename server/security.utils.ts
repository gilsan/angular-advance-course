import util = require('util');
import crypto = require('crypto');

export const randomBytes = util.promisify(crypto.randomBytes);
