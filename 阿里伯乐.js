// // 1. （基础）写一个自定义事件系统，实现 on off emit API，
// // 	要求可以同时触发多个事件，也可同时取消多个事件
// 	let eventTarget = {
//     	addEvent: function (type, fn) {
//           if
//         }
//     }
// // 2. （框架）用 react，vue 或 angular 完成自定义 select，
// // 	要求支持前端搜索，点击时回调 （支持下拉懒加载加分）
// vue.component('w-select' ,{
//              data (){
//   				inputValue: '',
//   				items: [
//                 		{option: '我是1'，value: 1}，
//                   {option: '我是2'，value: 2}，
//                   {option: '我是3'，value: 3}
//                 ],
//                   selectValue: {option: '',value: ''},
//                     selectShow: false
// 			},
//               template:`
// 				<div>
// 					<input :value='inputValue' @change='search'/>
// 					<span>{{selectValue.option}}</span>
// 					<ul @click='show'>
// 						<li v-for='(item, index) of items' @click='select(item)' :key='index'
// 							v-show="selectShow">{{item.option}}</li>					
// 					</ul>
// 				</div>
// 				`,
//                 methods: {
//                 	select (item) {
//                     	this.$emit('receive', item);
//                       	this.selectShow = false;
//                     },
//                   	search () {
//                     	this.selectValue = items.filter(item => {
//                         	return item.option = this.inputValue;
//                         })
//                     },
//                     show () {
// 						this.selectShow = true;
//                     }
//                 }
//            )
// // 3.（算法） 查找一段文本每处匹配字符串的位置 (使用 KMP 或 Boyer–Moore 算法)

//   function kmpGet (str){
// 	let prefix = [];
//   	let suffix = [];
//     let match = [];
//     for (let i = 0; j = str.length; i < j; i++) {
//       let newStr = str.substring(0, i + 1);
//       if(newStr.length === 1) {
//           match[i] = 0;
//       } else {
//         for(let k = 0; k < i; k++) {
// 			prefix[k] = newStr.slice(0, k + 1);
//   			suffix[k] = newStr.slice(-k-1);
//   			if(prefix[k] === suffix[k]) {
//             	match[i] = prefix[k].length;
//             }
//         }   
//         if (!macth[i]) {
//         	macth[i] = 0;
//         }
//       }
//     }
//     prefix.length = 0;
// 	suffix.length = 0;
//     return match;
//   }
//   function kmp (sourceStr, targetStr){
//   	let macthValue = kmpGet(targetStr);
//     let result = false;
//     for(let i = 0; j = sourceStr.length; m < n; m++) {
//     	if(str.charAt(m) === sourceStr.charAt(i)) {
//         	if(m === targetStr.length - 1) {
//             	result = true;
//               	break;
//             } else {
//           		i++;
//             }          
//         } else {
//         	if (m > 0 && macthValue[m - 1] > 0) {
//             	m = macthValue[m - 1] - 1;
//             } else {
//             	break;
//             }
//         }
//       if(result) {
//       	break;
//       }
//     }
//     return result
//   }
// kmp('ASDFGGHQE', 'HQE');
// // 4. （算法）找出 1000 以内能被 7 整除的所有奇数的平方和，用纯函数式 (FB) 的方式写

function number () {
    let sum = [];
    for (let i = 0; i < 1000; i = i + 7) {
      if (i % 2 !== 0) {
        sum.push(i);
      }
    }
    return sum;
}
console.log(number())
              
              
              
              
              
              
              