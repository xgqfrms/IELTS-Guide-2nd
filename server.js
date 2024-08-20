// import fs, {stat} from 'node:fs';
import fs from 'node:fs';
import path from 'node:path';

const rootFolder = '/Users/xgqfrms-mm/Documents/github/IELTS-Guide-2th/docs/《雅思考试官方指南》（第2版）';

try {
  let treeFilePath = rootFolder + `tree.md`;
  if (!fs.existsSync(treeFilePath)) {
    fs.writeFileSync(treeFilePath, ``, err => {
      // init
    });
  } else {
    fs.writeFileSync(treeFilePath, ``, err => {
      // clear
    });
  }
  // await fs.appendFile(rootFolder + `tree.md`, content);
  // fs.writeFile(rootFolder + `tree.md`, content, err => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     // file written successfully
  //   }
  // });
} catch (err) {
  console.error(err);
}


// const isFile = fileName => {
//   return fs.lstatSync(fileName).isFile() || false;
// };
// const isFolder = fileName => {
//   return fs.lstatSync(fileName).isDirectory() || false;
// };

const results = [];

const treeGenerator = async (results = [], folderName = rootFolder) => {
  // 读取文件夹
  console.log(`🚀 folderName =`, folderName);
  await fs.readdirSync(folderName).map(fileName => {
    // console.log(`❓ fileName =`, fileName);
    // path
    const pathName = path.join(folderName, fileName);
    // stat(pathName, (err, stats) => {
    fs.stat(pathName, async (err, stats) => {
      // console.log(stats);
      // Stats {
      //   dev: 16777220,
      //   mode: 16877,
      //   nlink: 12,
      //   uid: 501,
      //   gid: 20,
      //   rdev: 0,
      //   blksize: 4096,
      //   ino: 64334171,
      //   size: 384,
      //   blocks: 0,
      //   atimeMs: 1723572008018.5503,
      //   mtimeMs: 1723572008013.725,
      //   ctimeMs: 1723572008013.725,
      //   birthtimeMs: 1723570190954.7646,
      //   atime: 2024-08-13T18:00:08.019Z,
      //   mtime: 2024-08-13T18:00:08.014Z,
      //   ctime: 2024-08-13T18:00:08.014Z,
      //   birthtime: 2024-08-13T17:29:50.955Z
      // }
      // console.log(stats.isDirectory());
      if(stats.isDirectory()) {
        // console.log(`🗂️ folderName =`, fileName);
        await treeGenerator(results, pathName)
      } else {
        // console.log(`📂 fileName =`, fileName)
        // const relativePath = encodeURIComponent(pathName.replace(`/Users/xgqfrms-mm/Documents/github/IELTS-Guide-2th/docs/`, ``));
        const relativePath = pathName.replace(`/Users/xgqfrms-mm/Documents/github/IELTS-Guide-2th/docs/`, ``);
        let url = `https://ielts-guide-2nd.xgqfrms.xyz/${encodeURIComponent(relativePath)}`;
        switch (relativePath) {
          case `《雅思考试官方指南》（第2版）/视频：口语考试实况录像/01 Speaking Sample 1.mp4`:
            url = `https://www.bilibili.com/video/BV1PbeueyEuE/`;
            break;
          case `《雅思考试官方指南》（第2版）/视频：口语考试实况录像/02 Speaking Sample 2.mp4`:
            url = `https://www.bilibili.com/video/BV15ueuetEKJ/`;
            break;
          case `《雅思考试官方指南》（第2版）/视频：口语考试实况录像/03 Speaking Sample 3.mp4`:
            url = `https://www.bilibili.com/video/BV1PbeueyEuE/`;
            break;
          case `《雅思考试官方指南》（第2版）/视频：口语考试实况录像/04 Speaking Sample 4.mp4`:
            url = `https://www.bilibili.com/video/BV1hVeueRE42/`;
            break;
          // default:
          //   break;
        }
        const aLink = `<a href="${url}" target="_blank">${relativePath}</a><br />\n`;
        //
        await fs.appendFile(rootFolder + `tree.md`, aLink, err => {
          //
        });
        // await fs.appendFile(rootFolder + `tree.md`, pathName + `\n`, err => {
        //   //
        // });
        results.push(pathName);
      }
    });
    // if(isFolder(fileName)) {
    //   console.log(`🗂️ folderName =`, fileName)
    // } else {
    //   console.log(`📂 fileName =`, fileName)
    // }
    // if(isFile(fileName)) {
    //   console.log(`📂 fileName =`, fileName)
    // } else {
    //   console.log(`🗂️ folderName =`, fileName)
    // }
    // let temp = path.join(folderPath, fileName);
  });
}

try {
  await treeGenerator(results, rootFolder);
  // console.log(`results =`, results);
} catch (err) {
  console.error(`error ❌ =`, err);
}







/*

https://nodejs.org/api/fs.html#fslstatsyncpath-options

http://man7.org/linux/man-pages/man2/lstat.2.html

stat, fstat, lstat, fstatat (get file status)



https://nodejs.org/api/fs.html#fsstatpath-options-callback


// __dirname

https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules

*/
