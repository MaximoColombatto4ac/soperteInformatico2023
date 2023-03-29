const btn = document.getElementById('btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const pass = document.getElementById('pass').value;
    console.log(name);
    console.log(pass);
});