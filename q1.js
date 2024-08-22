const calculateAverage=numbers=> {
    let sum = numbers.reduce((accumulative,currentNum)=>accumulative+currentNum)
    let average=sum/numbers.length
    return average}