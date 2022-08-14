const debounce = (func:any, delay:any) => {
    let timer:any;
    return function (...args:any) {
        if(timer) {
        clearTimeout(timer);
        }
        timer = setTimeout(() => {
        func(...args);
        clearTimeout(timer);
        }, delay);
    };
};

// export const getName = list => {
//     let str = "";
//     list.map((item, index) => {
//         str += index === 0? item.name: "/" + item.name;
//         return item;
//     })
//     return str;
// }

// export const filterIndex = rankList => {
//     for (let i = 0; i < rankList.length; i++) {
//         if (rankList[i].tracks.length && !rankList[i+1].tracks.length) {
//             return i + 1;
//         }
//     }
// }

export { debounce };