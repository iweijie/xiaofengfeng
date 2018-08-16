// JSON.stringify  不能序列化  function undefined Symbol ；会舍弃当前值
// JSON.stringify  会将 NaN 转为 null
let a = {
    1: '',
    2: undefined,
    3: null,
    4: NaN,
    5: true,
    6: 0,
    7: "true",
    8: function() {},
    9: Symbol(),
}
let b = JSON.parse(JSON.stringify(a))
console.log(b) 