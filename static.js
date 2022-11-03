const fs = require('fs');
const imgExtension = ",JPG,PNG,GIF,TIFF,PSD,PDF,EPS,AI,INDD,RAW"
const styleExtension = ",CSS"
const htmlExtension = ",HTML,HTM"

module.exports = {

    contents: function (request, response) {

        if (request.url === '/') {
            fs.readFile('./index.html', 'utf8', function (errors, contents) {
                response.write(contents);
                response.end();
            });
        } else {
            let url = request.url;
            let filename = url.substring(url.lastIndexOf('/') + 1);
            let fileExtension = filename.substring(filename.lastIndexOf('.') + 1);

            // console.log(url, filename, fileExtension);

            // JPEG (or JPG) - Joint Photographic Experts Group
            // PNG - Portable Network Graphics
            // GIF - Graphics Interchange Format
            // TIFF - Tagged Image File
            // PSD - Photoshop Document
            // PDF - Portable Document Format
            // EPS - Encapsulated Postscript
            // AI - Adobe Illustrator Document
            // INDD - Adobe Indesign Document
            // RAW - Raw Image Formats

            // console.log('valor:' + imgExtension.indexOf(fileExtension.toUpperCase()));

            if (imgExtension.indexOf(fileExtension.toUpperCase()) > 0) {
                fs.readFile('./img/' + filename, function (errors, contents) {
                    response.writeHead(200, { 'Content-type': 'image/' + fileExtension.toLowerCase() });
                    response.write(contents);
                    response.end();
                });

            } else if (styleExtension.indexOf(fileExtension.toUpperCase()) > 0) {
                fs.readFile('./css/' + filename, 'utf8', function (errors, contents) {
                    response.writeHead(200, { 'Content-type': 'text/' + fileExtension.toLowerCase() });
                    response.write(contents);
                    response.end();
                });

            } else if (htmlExtension.indexOf(fileExtension.toUpperCase()) > 0) {
                fs.readFile('./vistas/' + filename, 'utf8', function (errors, contents) {
                    response.writeHead(200, { 'Content-type': 'text/' + fileExtension.toLowerCase() });
                    response.write(contents);
                    response.end();
                });
            } 
        }
    }
}
