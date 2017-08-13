#!/usr/bin/env /usr/local/bin/node
/*
<bitbar.title>Space Papers</bitbar.title>
<bitbar.version>v1.2.0</bitbar.version>
<bitbar.author>Dale Manthei</bitbar.author>
<bitbar.author.github>dalemanthei</bitbar.author.github>
<bitbar.desc>Automatically changes your wallpapers based on time of day - Be sure to read the installation instructions here: https://github.com/dalemanthei/bitbar-space-papers</bitbar.desc>
<bitbar.image>https://raw.githubusercontent.com/kodie/bitbar-googlecal/master/screenshot.png</bitbar.image>
<bitbar.dependencies>node, npm</bitbar.dependencies>
<bitbar.dependencies.npm>npm/bitbar</bitbar.dependencies.npm>
<bitbar.abouturl>https://github.com/dalemanthei/bitbar-space-papers</bitbar.abouturl>
*/
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const options = require(path.join(process.env.HOME, '.space-papers.json'));
const papersDir = options.papersDir;

let files = fs.readdirSync(papersDir);
let paper1 = papersDir + files[randomInt(0, files.length)];
let paper2 = papersDir + files[randomInt(0, files.length)];
let paper3 = papersDir + files[randomInt(0, files.length)];
let paper4 = papersDir + files[randomInt(0, files.length)];

console.log('❤');
console.log(options.desktopCount);

// prettier-ignore
exec(`
  cp "${paper1}" "/Users/manthei/Documents/Wallpapers/space-papers/d1.png";
  cp "${paper2}" "/Users/manthei/Documents/Wallpapers/space-papers/d2.png";
  cp "${paper3}" "/Users/manthei/Documents/Wallpapers/space-papers/d3.png";
  cp "${paper4}" "/Users/manthei/Documents/Wallpapers/space-papers/d4.png";
  # osascript -e \'tell app "System Events" to display dialog "${paper1}"\' > /dev/null
  killall Dock
`);

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
