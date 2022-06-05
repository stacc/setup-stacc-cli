const os = require("os");
const path = require("path");

// arch in [arm, x32, x64...] (https://nodejs.org/api/os.html#os_os_arch)
// return value in [amd64, 386, arm]
function mapArch(arch) {
  const mappings = {
    x32: "i386",
    amd64: "x86_64",
    x64: "x86_64"
  };
  return mappings[arch] || arch;
}

// os in [darwin, linux, win32...] (https://nodejs.org/api/os.html#os_os_platform)
// return value in [darwin, linux, windows]
function mapOS(os) {
  const mappings = {
    darwin: "Darwin",
    win32: "Windows",
    linux: "Linux"
  };
  return mappings[os] || os;
}

function getDownloadUrl(version) {
  const platform = os.platform();
  const filename = `stacc_${version}_${mapOS(platform)}_${mapArch(os.arch())}`;
  return `https://github.com/stacc/cli-next/releases/download/v${version}/${filename}.tar.gz`;
}

module.exports = { getDownloadUrl };
