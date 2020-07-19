#!/usr/bin/env node

const fs = require("fs");
const { join, relative, basename } = require("path");

const ARTICLE_DIR = join(__dirname, "article");

const README_NAME = "README.md";
const EOF = "\n\n";

function handleDirectory(dirPath) {
  const content = fs
    .readdirSync(dirPath)
    .filter((name) => name !== README_NAME && name.endsWith(".md"))
    .map((name) => ({
      name,
      path: join(dirPath, name),
    }))
    .reduce((content, { name, path }) => {
      const prefix = "- ";
      const relativePath = relative(__dirname, path);

      return content + prefix + `[${basename(name, ".md")}](${relativePath})\n`;
    }, "");

  return content.length !== 0 ? content + "\n" : content;
}

function getArticle(dirPath) {
  const prefix = `## Article${EOF}`;

  const content = fs
    .readdirSync(dirPath)
    .map((name) => ({
      name,

      path: join(dirPath, name),
    }))
    .reduce((content, { name, path }) => {
      const relativePath = relative(__dirname, path);
      content += `[${name}](${relativePath})\n\n`;
      content += handleDirectory(path);

      return content;
    }, "");

  return prefix + content.trimRight();
}

function main() {
  const prefix = `# blog${EOF}**Legen - wait for it - dary! Legendary!**${EOF}`;
  const content = getArticle(ARTICLE_DIR);

  fs.writeFileSync(join(__dirname, README_NAME), prefix + content + "\n");
}

main(ARTICLE_DIR);
