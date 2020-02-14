console.log('hi')
let n = 1;
getPage.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET',`page${n+1}`);
    if(n<3){
    request.onreadystatechange = ()=>{
        if(request.readyState ===4 && request.status ===200 ){
            console.log(request.response)
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n+=1;
        }
    }
    }else{
        alert('暂无下一页')
    }
        request.send();
    }
    

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange = ()=>{
         if(request.readyState ===4 && request.status === 200){
             console.log(request.response)
             const object =JSON.parse(request.response)
             console.log(object)
             myName.textContent = object.name
         }
    }
    request.send();
}
getXML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send();
}
getHTML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/3.html');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    };
    request.send();
}
getJS.onclick = () =>{
const request = new XMLHttpRequest();
request.open('GET','/2.js');
request.onreadystatechange = () =>{
    if(request.readyState === 4){
    const script = document.createElement('script')
    script.innerHTML = request.response
    document.body.appendChild(script)
}
}
request.send();
},
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/style.css');
    request.onreadystatechange = () =>{
        console.log(request.readyState)
        if(request.readyState === 4){
            const style = document.createElement('style')  //创建style标签
        style.innerHTML = request.response      //填写style内容
        document.head.appendChild(style)        //放入头部

        }
            
    };
    request.send();
}