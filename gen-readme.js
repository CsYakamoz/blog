const fs = require("fs");
const { join, relative } = require("path");

const ARTICLE_DIR = join(__dirname, "article");

const README_NAME = "README.md";

function getContent(dirPath) {
  let content = "";
  const prefix = `## Article\n\n`;

  const fileObjList = fs.readdirSync(dirPath).map((name) => ({
    name,

    path: join(dirPath, name),
    isDirectory: fs.statSync(join(dirPath, name)).isDirectory(),
  }));

  for (const fileObj of fileObjList) {
    if (fileObj.isDirectory) {
      const relativePath = join(relative(__dirname, fileObj.path), README_NAME);
      content += `[${fileObj.name}](${relativePath})\n\n`;
    } else {
      const relativePath = relative(__dirname, fileObj.path);
      content += `[${fileObj.name}](${relativePath})\n\n`;
    }
  }

  return prefix + content.trimRight();
}

function main() {
  const prefix = `# blog\n\n**Legen - wait for it - dary! Legendary!**\n\n`;
  const content = getContent(ARTICLE_DIR);

  fs.writeFileSync(join(__dirname, README_NAME), prefix + content + "\n");
}

main(ARTICLE_DIR);
