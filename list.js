const fs = require("fs");
const path = require("path");

const selectFiles = () => {
	const filesFolder = path.join(__dirname, "files");

	fs.readdir(filesFolder, { encoding: "utf8" }, (error, files) => {
		if (error) {
			console.log(error);
		} else {
			console.log(files);
		}
	});
};

selectFiles();
