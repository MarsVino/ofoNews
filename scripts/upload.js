// 发布到测试环境
const co = require('co');
const OSS = require('ali-oss');
const fs = require('fs');
const { join } = require('path');

const client = new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: 'LTAIRo1h6IrfgBKB',
    accessKeySecret: 'cJxH9kYF5cElTI3RgQPfXpPhIwEiST',
    bucket: 'ofo-freego-image',
});

const filePath = '../dist';

var uploadPath = 'kankan/';
var options = process.argv;
if(options.length > 2){
    uploadPath = options[2];
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function findSync(startPath) {
    const result = [];
    function finder(path) {
        const files = fs.readdirSync(path);
        files.forEach((val, index) => {
            const fPath = join(path, val);
            const stats = fs.statSync(fPath);
            if (stats.isDirectory()) finder(fPath);
            // 是文件并且过滤空文件
            if (stats.isFile() && stats.size > 0) result.push(fPath);
        });
    }
    finder(startPath);
    return result;
}

// 检查文件名是否合法
function checkFileName(fileName) {
    const regEn = /[`~!#$%^&*()+<>?:"{},;']/im;
    if (regEn.test(fileName)) {
        console.log('文件包含特殊字符，跳过此文件');
        return false;
    }
    return true;
}

co(function* () {
    const newPath = filePath.replace('../', '');
    console.log(newPath)
    const fileNames = findSync(newPath);
    console.log(fileNames);
    for (const file of fileNames) {
        console.log(`开始上传: ${file}`);
        if (checkFileName(file)) {
            const newfilePath = file.replace(`${newPath}/`, '');
            const result = yield client.multipartUpload(`${uploadPath}${newfilePath}`, `${file}`, {
                *progress(p) {
                    console.log(`Progress: ${p}`);
                },
            });
        }
    }
    console.log('上传完成');
}).catch((err) => {
    console.log(err);
});
