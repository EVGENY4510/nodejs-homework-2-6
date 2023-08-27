const multer = require("multer");
const path = require("path");

const tmpDir = path.join(__dirname, "..", "tmp");

const multerConfig = multer.diskStorage({
  destination: tmpDir,

  filename: (req, file, cb) => {
    const name = file.originalname;

    cb(null, name);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
