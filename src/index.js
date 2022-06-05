const path = require("path");
const core = require("@actions/core");
const tc = require("@actions/tool-cache");
const { getDownloadUrl } = require("./download");

async function setup() {
  try {
    const version = core.getInput("version");
    const downloadUrl = getDownloadUrl(version);

    const pathToTarball = await tc.downloadTool(downloadUrl);

    const pathToCLI = await tc.extractTar(pathToTarball);
    core.addPath(pathToCLI);
  } catch (e) {
    core.setFailed(e);
  }
}

module.exports = setup;

if (require.main === module) {
  setup();
}
