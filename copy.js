const fs = require("fs");
const path = require("path");

const copyFile = () => {
	const filesFolder = path.join(__dirname, "files");
	const filesCopy = path.join(__dirname, "files_copy");

	fs.readdir(filesFolder, { encoding: "utf8" }, (error, files) => {
		if (error) console.log(error);

		if (!fs.existsSync(filesCopy)) {
			fs.mkdirSync(filesCopy);

			files.forEach((fileName) => {
				const copyFrom = path.join(filesFolder, fileName);
				const copyTo = path.join(filesCopy, fileName);

				fs.copyFile(copyFrom, copyTo, (error) => {
					if (error) console.log(error);

					console.log("Files succesfully copied");
				});
			});
		} else {
			console.error("Files folder is already created, remove it!");
		}
	});
};

copyFile();
