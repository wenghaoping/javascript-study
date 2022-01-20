// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Document</title>
// </head>
// <body>
//   <ul id="poem">
//     <li>床前明月光</li>
//     <li>疑是地上霜</li>
//     <li>举头望明月</li>
//     <li>低头思故乡</li>
//     <li>锄禾日当午</li>
//     <li>汗滴禾下土</li>
//     <li>谁知盘中餐</li>
//     <li>粒粒皆辛苦</li>
//     <li>背不动了</li>
//     <li>我背不动了</li>
//   </ul>
// </body>
// </html>

// 在这段 HTML 渲染出的界面里，我希望做到点击每一个 li 元素，
// 都能输出它内在的文本内容。你会怎么做？

<script>
  // 获取 li 列表
  var liList = document.getElementsByTagName('li')
  // 逐个安装监听函数
  for (var i = 0; i < liList.length; i++) {
    liList[i].addEventListener('click', function (e) {
      console.log(e.target.innerHTML)
    })
  }
</script>

// var ul = document.getElementById('poem')
// ul.addEventListener('click', function(e){
//   console.log(e.target.innerHTML)
// })
