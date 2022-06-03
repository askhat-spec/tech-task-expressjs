const express = require("express");
const router = express.Router();
const path = require("path");
const sharp = require("sharp");
const { v4: uuidv4 } = require('uuid');
const multer  = require("multer");

// Валидация типа файла при загрузке
const upload = multer({
    fileFilter: (req, file, cb) => {
        const whitelist = [
            'image/png',
            'image/jpeg',
            'image/jpg',
        ]
        if (!whitelist.includes(file.mimetype)) {
            return cb(new Error(`Allowed files: ${whitelist}`))
        }
        cb(null, true)
    }
})
.single("image");

// Функция для конвертации
const convertToWebp = (buffer) => {
    const fileName = `${uuidv4()}.webp`
    sharp(buffer)
    .webp({
        quality: 100,
        lossless: true,
        force: true,
    })
    .toFile(path.join(__dirname, 'converted', fileName))
    return fileName
};

router.post('/webp', function (req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({"UploadError": err.message});
        } else if (err) {
            return res.status(400).json({"FileError": err.message});
        }
        result = convertToWebp(req.file.buffer)
        return res.status(200).json({"name": result});
    })
});

module.exports = router;