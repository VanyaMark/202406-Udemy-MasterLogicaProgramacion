const multiplicationTable = (num) => {
    let result = `# Multiplication Table for ${num} # \n`;
    for (let i=1; i<=10; i++){
        let multiplication = i*num;
        result += `${i} X ${num} = ${multiplication}\n`;
    }
    return result
}

console.log(multiplicationTable(2))