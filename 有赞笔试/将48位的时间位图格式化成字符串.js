/*将48位的时间位图格式化成字符串
 * 要求：写一个函数timeBitmapToRanges，将下述规则描述的时间位图转换成一个选中时间区间的数组。
 * 
 * 规则描述：
 * 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
 * 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
 * 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
 *  [0.5 1 1.5 0 0]
 * 示例输入：`"110010000000000000000000000000000000000000000000"`
 * 示例输出：`["00:00~01:00", "02:00~02:30"]`
 */
function timeBitmapToRanges(bitmap) {
    function addZero(str) {
        if (+str < 10) {
            return `0${str}`;
        }
        return str;
    }
    function arrayToDate(arr) {
        return `${addZero(arr[0])}:${addZero(arr[1])}`;
    }
    const result = [];
    let start = [0, 0];
    let end = [0, 0];
    let startIndex = 0; // 每次开始的位置
    let endIndex = -1; // 每次结束的位置
    for (let i = 0; i < bitmap.length; i++) {
        const b = bitmap[i];
        if (b == 1) {
            // 说明是第一次。
            if (endIndex < startIndex) {
                endIndex = startIndex;
                end = [...start];
            }
            end[1] += 30;
            if (end[1] === 60) {
                end[0] += 1;
                end[1] = 0;
            }
            endIndex = i;
            if (i === bitmap.length - 1) {
                result.push(`${arrayToDate(start)}~${arrayToDate(end)}`);
            }
        } else {
            if (endIndex >= startIndex) {
                result.push(`${arrayToDate(start)}~${arrayToDate(end)}`);
                start = [...end];
            }
            start[1] += 30;
            if (start[1] === 60) {
                start[0] += 1;
                start[1] = 0;
            }
            startIndex = i;
        }
    }
    return result;
}
console.log(timeBitmapToRanges2('000010100000000000000000000000000000000000000011'));