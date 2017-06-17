var tags = require('./tags.json');
var str=process.argv.slice(2)[0];
//console.log(str);

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function Fun(str)
{
    var arr=str.split(/[\s,!?.]+/);
    var len= arr.length;
    var i;
    //console.log(Object.keys(tags["dept"]).length);
    var wl=Object.keys(tags["dept"]).length
    var wts=new Array(wl).fill(0);
    for(i=0;i<len;i++)
    {
        var key=(arr[i].toLowerCase());
        if(tags["dict"].hasOwnProperty(key))
        {
            //console.log(key, 'match!', tags["dict"][key]);
            wts[(tags["dept"][tags["dict"][key]])]++;
        }
        else
        {
            //console.log(key, 'no match!');
        }
    }
    var mi=indexOfMax(wts);
    //console.log(wts, " : ", tags["deptr"][(wts[0]>0) ? 0 : mi]);
    return tags["deptr"][(wts[0]>0) ? 0 : mi];
}
console.log(Fun(str));
