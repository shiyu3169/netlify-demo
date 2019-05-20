const randomWords = require('random-words');

exports.handler = async (event, context) => {
  try {
    const subject = randomWords().toUpperCase();
    return { statusCode: 200, body: `${subject}` };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
