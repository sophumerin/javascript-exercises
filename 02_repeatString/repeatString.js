const repeatString = function(s, count) {
    let str = ''
    if(count < 0){
        return 'ERROR'
    }
    if(s === ''){
        return '';
    }
    for(let i = 0; i < count; i++){
        str += s;
    }
    return str;

};

// Do not edit below this line
module.exports = repeatString;
