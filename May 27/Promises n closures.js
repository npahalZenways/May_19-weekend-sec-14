var teststr = "hello world"

var mypromise = new Promise(function(resolve, reject){
    // if(teststr == 'hello world'){
    //     setTimeout(()=>{
    //         resolve('resolved');
    //     }, 3000)
    // } else{
    //     reject('reject');
    // }
    

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.readyState)
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        resolve(xhttp.responseText);
        } else{
            reject(xhttp.responseText)
        }
    };
    xhttp.open("GET", "test.json", true);
    xhttp.send();
})

mypromise.then(function(response){
    console.log(response)
}).catch(function(res){
    console.log(res)    
});

// console.log('hello');

// closures;

function counter(){
    var num = 0;
    return function(){
        console.log('called')
        return function(){
            return num++;
        }
    }
}

var count = counter();
var count2 = count();
