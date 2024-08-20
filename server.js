import fs, {stat} from 'node:fs';
import path from 'node:path';



const rootFolder = '/Users/xgqfrms-mm/Documents/github/IELTS-Guide-2th/docs/《雅思考试官方指南》（第2版）';


const isFile = fileName => {
  return fs.lstatSync(fileName).isFile() || false;
};
const isFolder = fileName => {
  return fs.lstatSync(fileName).isDirectory() || false;
};

try {
  // 读取文件夹
  fs.readdirSync(rootFolder).map(fileName => {
    console.log(`❓ fileName =`, fileName);
    const pathName = path.join(rootFolder, fileName);
    stat(pathName, (err, stats) => {
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
      console.log(stats.isDirectory());
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
} catch (err) {
  console.error(`error ❌ =`, err);
}


// try {
//   if (!fs.existsSync(rootFolder)) {
//     fs.mkdirSync(folderName);
//   }
// } catch (err) {
//   console.error(err);
// }



/*

https://nodejs.org/api/fs.html#fslstatsyncpath-options

http://man7.org/linux/man-pages/man2/lstat.2.html

stat, fstat, lstat, fstatat (get file status)



https://nodejs.org/api/fs.html#fsstatpath-options-callback


// __dirname

https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules

*/
