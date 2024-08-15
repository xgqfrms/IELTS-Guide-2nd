
export const echo = () => console.log(`%c雅思考试官方指南（第2版）音频、视频资源`, `background: #000; color: #0f0; font-size: 23px;`);

/*
TODO:

1. Node.js 遍历 tree (js 没有读写本地文件的权限 ？)
2. 判断 folder / file 递归，动态生成 URL
3. URL Unicode encodeURI / encodeURIComponent, 把中文转换成标准的纯字符 URL
4. 返回结果集合数组
5. 动态插入 DOM

*/

export const autoInsertToDOM = () => {
  // document.body
  // const body = document.querySelector(`body`);
  const app = document.querySelectorById(`app`);
  // app.insertAdjacentElement(`beforebegin`, dom)
  // app.insertAdjacentText(`beforebegin`, `text`)
  app.insertAdjacentHTML(`beforebegin`, `<h3>插入 DOM 测试</h3>`)
  // app.insertAdjacentHTML(`beforebegin`, `<ul>tree???</ul>`)
}

