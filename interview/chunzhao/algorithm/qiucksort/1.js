function quickSort(arr) {
    // 基准情况：如果数组长度为0或1，则直接返回该数组
    if (arr.length <= 1) {
        return arr;
    }
    // 基准值选择中间位置的元素
    const pivot = arr[Math.floor(arr.length / 2)];
    // 分区：分别收集小于、等于和大于基准值的元素
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot); // 收集等于pivot的元素
    const right = arr.filter(x => x > pivot);
    // 递归调用quickSort，并连接结果
    return [...quickSort(left), ...middle, ...quickSort(right)];
    // return quickSort(left).concat([pivot], quickSort(right));
}



function quickSort(arr) {
    // 基准值？
    const pivot = arr[Math.floor(arr.length / 2)]
    // 分区
    const left = arr.filter(x => x< pivot);
    const right = arr.filter(x => x> pivot);
    // 递归
    return quickSort(left).concat([pivot], quickSort(right));
}

function quickSort2(arr) {
    if(arr.length===1)
        return arr;
    const mid = arr[Math.floor(arr.length/2)]
    const left = arr.filter(item => item<mid)
    const mids= arr.filter(item => item ===mid)
    const right = arr.filter(item => item>mid)
    return [...quickSort2(left),...mids,...quickSort2(right) ]
}