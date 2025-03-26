function solve(arr){
         let arr2=[];
         for(let i=0; i<arr.length; i++){
            if(arr[i].gender=="male" && arr[1].age>"18"){
                arr2.push(arr[i])
            }
         }
        return arr2;
}

 const users=[{
    name:"abhinav",
    age:"23",
    gender:"male"
 },
 {
    name:"av9",
    age:"15",
    gender:"male"
 },
 {
    name:"tor",
    age:"45",
    gender:"male"
 },
 {
    name:"raman",
    age:"23",
    gender:"male"
 }
]
console.log(solve(users));