import fs from 'node:fs';
import path from 'node:path';

const rootFolder = '/Users/xgqfrms-mm/Documents/github/IELTS-Guide-2th/docs/《雅思考试官方指南》（第2版）';

try {
  let treeFilePath = rootFolder + `tree.md`;
  if (!fs.existsSync(treeFilePath)) {
    // do nothing
  }
  fs.writeFileSync(treeFilePath, ``, err => {
    // init & clear
  });
} catch (err) {
  console.error(err);
}

const treeFlatRecursiveTraversal = async (folderName = rootFolder) => {
  // console.log(`🚀 folderName =`, folderName);
  await fs.readdirSync(folderName).map(fileName => {
    // console.log(`❓ fileName =`, fileName);
    const pathName = path.join(folderName, fileName);
    fs.stat(pathName, async (err, stats) => {
      // console.log(stats);
      if(stats.isDirectory()) {
        // console.log(`🗂️ folderName =`, fileName);
        await treeFlatRecursiveTraversal(pathName)
      } else {
        // console.log(`📂 fileName =`, fileName)
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
          default:
            // do nothing
            break;
        }
        const aLink = `<a href="${url}" target="_blank">${relativePath}</a><br />\n`;
        await fs.appendFile(rootFolder + `tree.md`, aLink, err => {
          err && console.log(`err =`, err)
        });
      }
    });
  });
}

try {
  await treeFlatRecursiveTraversal(rootFolder);
  console.log(`treeFlatRecursiveTraversal ✅`)
} catch (err) {
  console.error(`error ❌ =`, err);
}
