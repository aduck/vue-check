/*  一次输出1-5 */
for(let i=1;i<=5;i++){
  setTimeout(function(){
    console.log(i)
  },20)
}


/*  隔一秒依次输出1-5  */
for(let i=1;i<=5;i++){
  setTimeout(function(){
    console.log(i)
  },i*1000)
}


/*  Promise方法实现 */
const tasks=[]
const output=i=>new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log(i)
    resolve()
  },i*1000)
})
for(var i=1;i<5;i++){
  tasks.push(output(i))
}

Promise.all(tasks).then(()=>{
  setTimeout(()=>{
    console.log(i)
  },1000)
})
