const indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB;

const request=indexedDB.open("TestDB",1);
let db;
request.onupgradeneeded=function(event){
     db=event.target.result;
     let objectStore=db.createObjectStore("Persons",{keyPath:"id",autoIncrement:true});
     objectStore.createIndex("name","name",{unique:false});
     objectStore.createIndex("email","email",{unique:true});
     };
     request.onsuccess=function(event){
        db=event.target.result;
        console.log("Database opened successfully");
        };
    request.onerror=function(event){
            console.log("Error opening database");
            };
        function addData()
        {
            const transaction=db.transaction(['Persons'],'readwrite');
            const objectStore=transaction.objectStore('Persons');
            let request=objectStore.add({name:"Tejasvi",age:21,email:"sudugutejasvi@gmail.com"});
            request.onsuccess=function(event){
                console.log("Data added successfully");
                const addoutput=document.getElementById("addoutput");
                addoutput.innerHTML="Data added successfully";
                };
                request.onerror=function(event){
                    console.log("Error adding data");
                    };
                
        }
        function getData()
        {
            const transaction=db.transaction(['Persons'],'readwrite');
            const objectStore=transaction.objectStore('Persons');
            let request=objectStore.get(1);
            request.onsuccess=function(event){
                const data = event.target.result;
                console.log("Data retrieved successfully");
                document.getElementById('output').textContent = `Name: ${data.name}, Age: ${data.age},Email: ${data.email}`;
                console.log(data);
                };
                request.onerror=function(event){
                    console.log("Error retrieving data");
                    };
        }
