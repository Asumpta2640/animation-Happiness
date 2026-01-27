function hello(){
    console.log("Hello world");
}
function countToN(){
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            for(let i=0; i <3000000; i++) {}
            console.log("complete counting");
            resolve("done");
        },0);
    });
}

function bye(){
    console.log("Bye for now")
}

function main(){
let x = countToN();
console.log(x);
let y = hello();
let z = bye();
}
main();
console.log("completed all work");