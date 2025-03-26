let arr=["abhinav","age",{
    name:"abhinav",
    age:"23",
    cities:["banglore","delhi","patna",{
        country:"india",
    cities:"dehrdun"}] 
}];


console.log(arr[2].cities[3]);

//second array
function solve(arr) {
    let arr2=[];
    for(let i=0; i<arr.length; i++)
        {
        if(arr[i].gender=="male" && arr[i].age>"18")
            {
               arr2.push(arr[i]);
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
    name:"tqm",
    age:"23",
    gender:"female"
},
{
    name:"shubham",
    age:"89",
    gender:"male"
},
{
    name:"av9",
    age:"56",
    gender:"male"
}
]
console.log(solve(users))