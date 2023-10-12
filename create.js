const fs = require("fs");

const createFile = () => {
	const fileName = "fresh.txt";
	const url = `${__dirname}/files/${fileName}`;
	const data = "I am fresh and young";
	const options = {
		flag: "wx",
		encoding: "utf8",
	};

	fs.writeFile(url, data, options, (error) => {
		if (error) {
			console.log(error.message);
		} else {
			console.log("File succecfully created!");
		}
	});
};

createFile();
