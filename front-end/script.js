let currentcatID;

function fetchcats() {
    let body = document.getElementsByTagName("body")[0];
    let p = document.createElement('p');
    p.innerText = 'loading...';
    p.setAttribute('id', 'loading');
    body.appendChild(p);

    fetch('http://localhost:3000/cats',
        {
            method:'get'
        }   
    ).then(function(response){
        response.json().then((data)=>{
            if(data.length) {
                console.log(data);
                body.removeChild(p);
            }

            for(let i=0; i<data.length; i++) {
                let image = document.createElement('img');
                image.setAttribute('src', data[i].img);
                image.width=20;
                image.className = "imaginilista";
                body.appendChild(image);
                

                let h2 = document.createElement('h2');
                h2.innerText=data[i].name;
                h2.style.fontFamily = 'Quicksand';
                h2.style.fontStyle = "bold";
                h2.className="titlu";
                body.appendChild(h2);

                let edit = document.createElement('button');
                edit.innerText = 'Edit';
                edit.onclick = function() {
                    document.getElementById('name').value = data[i].name;
                    document.getElementById('url').value = data[i].img;
                    currentcatID = data[i].id;
                }
                body.appendChild(edit);

                let Delete = document.createElement('button');
                Delete.innerText = 'Delete';
                Delete.onclick = function() {
                    deletecat(data[i].id);
                }
                body.appendChild(Delete);

                let hr = document.createElement('hr');
                body.appendChild(hr);
                hr.style.border= "2px solid rgb(75, 73, 73);";
            }
        })
    })
}

function addcat() {
    let body = document.getElementsByTagName('body')[0];
    let name = document.getElementById('name').value;
    let image = document.getElementById('url').value;

    let newcat = {
        name: name,
        img: image
    }

    fetch('http://localhost:3000/cats', 
        {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newcat)
        }).then(function(response) {
            window.location.reload();
        })
}

function updatecat() {
    let name = document.getElementById('name').value;
    let image = document.getElementById('url').value;
    let newcat = {
        name: name,
        img: image
    }

    fetch('http://localhost:3000/cats/' + currentcatID, 
    {
        method: 'put',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify(newcat)
    }).then(function(response) {
        window.location.reload();
    })
}

function deletecat(id) {
    let name = document.getElementById('name').value;
    let image = document.getElementById('url').value;

    fetch('http://localhost:3000/cats/' + id, 
    {
        method: 'delete'
    }).then(function(response) {
        window.location.reload();
    })
}

fetchcats();