document.getElementById('fetchToDoListBtn').addEventListener('click', fetchToDoList);
    
    function fetchToDoList(){
        const xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
             let todoObj=JSON.parse(this.responseText);
               
            displayList(todoObj);
            

        }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos",true);
    xhr.send();
    }
    function displayList(obj){
        document.getElementById("fetchToDoListBtn").style.display="none";
        
        let tableList ="<thead><tr><th>TASK</th><th>STATUS</th></tr></thead>";
        for(let i=0;i<obj.length;i++)
        {       
            tableList+="<tr>";
            if(obj[i].completed==true){
                tableList+="<td>"+obj[i].title+"</td><td><input type=checkbox  checked disabled></td>";
            }else{
                tableList+="<td>"+obj[i].title+"</td><td><input type=checkbox name=check onclick=checkTodos()></td>";  
            }
            
            tableList+="</tr>";
        }
        tableList+="</table>";
        document.getElementById("response").innerHTML=tableList;
    }
    function checkTodos()
    {
        var i=0;
        var count=0;
        check = document.getElementsByName("check");
        for(i=0;i<check.length;i++)
        {
            if(check[i].checked==true){
                count=count+1;
                
            }
        }
        
        let myPromise = new Promise(function(myResolve, myReject) {
                   
            if (count == 5) {
              myResolve("Congrats. 5 Tasks have been Successfully Completed");
            } else {
              myReject("Error");
            }
          });
          
          myPromise.then(
            function(value) {alert(value)},
            function(error) {}
          );
        
    }
        