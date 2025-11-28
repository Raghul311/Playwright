function browser(){
    if(browserName=="Edge"){
        console.log(`browser is ${browserName} `);    
    }
    else if(browserName=="Chrome"){
        console.log(`browser is ${browserName} `);    
    }
    else{
        console.log("not supported by playwright");
        
    }
}

let browserName="Chrome";
browser();
