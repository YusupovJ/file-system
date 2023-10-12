const fs = require("fs");
const path = require("path");

const readFile = () => {
	const fileName = path.join(__dirname, "fileToRead.txt");

	fs.readFile(fileName, { encoding: "utf8" }, (error, data) => {
		if (error) {
			console.log(error);
		} else {
			console.log(data);
		}
	});
};

readFile();
