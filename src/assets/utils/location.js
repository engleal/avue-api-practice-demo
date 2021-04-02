// 获取hash值
function getLoactionHash() {
    console.log("hash", window.location.hash)
    let hash =  window.location.hash;
    if(hash && hash.split("#/")[1]){
        hash = hash.split("#/")[1]
    }else{
        hash = "cascader"
    }
    return hash;
}

export let location = {
    hash: getLoactionHash
};
