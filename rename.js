const fs = require("fs");
const path = require("path");

const renameFile = () => {
	const renameFrom = path.join(__dirname, "wrongFilename.txt");
	const renameTo = path.join(__dirname, "properFilename.md");

	fs.rename(renameFrom, renameTo, (error) => {
		if (error) {
			console.log(error);
		} else {
			console.log("File renamed succesfully");
		}
	});
};

renameFile();
