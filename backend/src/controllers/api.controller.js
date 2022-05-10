
const whitelistMembers = require('../whitelist/whitelist').whitelist.array;
const signMessage = require('../services/sign');

exports.getWhitelist = async (req, res) => {
  const address = req.params.address;
  let signature = null;
  let success = false;
  if (whitelistMembers.findIndex((item) => address === item) !== -1 ) {
    signature = await signMessage(address);
    success = true;
  } else {
    signature = [];
    success = false;
  }

  res.status(200).send({
    signature,
    success
  });
};

exports.getWhitelistCount = (req, res) => {
  res.status(200).send({
    count: whitelistMembers.length,
    success: true,
  });
}