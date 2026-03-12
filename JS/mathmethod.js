const arr2=[
    "renee"
    ,"suraj"
    ,"shivam"
    ,"sneha"
    ,"kashish"
    ,"mehfooz"
    ,"abhishek"
    ,"suraj"
]
// const counts = ans.reduce((ans2, name) => {
//   ans2[name] = (ans2[name] || 0) + 1;
//   return ans2;
// }, {});

// console.log(counts);




let map={};

for (let items of arr2) {
    if(map[items]){
        map[items] = map[items] + 1;
    } else{
        map[items]=1;

    }
}