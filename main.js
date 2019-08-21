//创建乘法表
function createMutiplyTable(start,end){
    var output="";
    var valid=isValid(start,end);
    if(valid){
        return valid;
    } 
    var multiplyArr=generateMultiplyArr(start,end);
    output =printMultiplyTable(multiplyArr);
    return output;
}
// 检测是否有效
function isValid(start,end){
    var sInttemp = isInt(start,end);
    var isStartLessThanEndTemp = isStartLessThanEnd(start,end);
    return (Inttemp && isStartLessThanEndTemp);
}
// 检测是否为整数
function isInt(start,end){
    var startTemp = (start%1===0); 
    var endTemp = (end%1===0);
    return(startTemp && endTemp);
}
// 检测start与end的大小关系
function isStartLessThanEnd(start,end){
    return start<end;
}

// 计算相应的乘法，并获得结果
function generateMultiplyArr(start,end){
  var result=[];
  for(var i=start;i<=end;i++){
        result[i-start]= []; 
        for(var j = start;j<=i;j++){
            result[i-start][j-start] = j+"*"+i+"="+i*j;
        }    
    }
  return result;
}
// 进行输出格式的转换并打印
function printMultiplyTable(multiplyArr){
    var output="";
    for(var i=0;i<multiplyArr.length;i++){
        for(var j=0;j<multiplyArr[i].length;j++){
            output=output+multiplyArr[i][j]+" ";
        }
        output+="\n";
    }
    return output;
}
module.exports = {
    isValid,
    generateMultiplyArr,
    printMultiplyTable
};
