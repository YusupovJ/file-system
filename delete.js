const fs = require("fs");
const path = require("path");

const deleteFile = () => {
	const file = path.join(__dirname, "fileToRemove.txt");

	fs.rm(file, (error) => {
		if (error) {
			console.log(error);
		} else {
			console.log("File succesfully deleted");
		}
	});
};

deleteFile();
