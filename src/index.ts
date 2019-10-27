const copyMachine = <CopyType>(
    thingToCopy: CopyType,
    numOfCopies: number
): CopyType[] => {
    const result = [];
    for(let i=0; i < numOfCopies; i++) {
        result.push(thingToCopy);
    }
    return result;
}

console.log(copyMachine<string>('hi', 4));