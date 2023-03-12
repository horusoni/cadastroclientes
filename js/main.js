let addBtn = document.getElementById('add-btn')
let win = document.querySelector('.hidden')

function openwin(){
    win.classList.remove('hidden')
    
}
function closewin(){
    win.classList.add('hidden')
    client.value = " "
    mail.value = " "
    contact.value = " "
    date.value = " "
    hour.value = " "
    cash.value = " "
    
}
let client = document.getElementById('client')
let mail = document.getElementById('mail')
let contact = document.getElementById('contact')
let date = document.getElementById('date')
let hour = document.getElementById('hour')
let cash = document.getElementById('cash')

//open the window for add
const save = document.getElementById('save')
addBtn.addEventListener('click',(e)=>{
    save.innerText = "Salvar"
    openwin()
    save.classList.remove('edit-btn')
    save.classList.add('save-btn')
    if(save.classList[0] == "save-btn"){
        save.addEventListener("click",()=>{
            if(client.value == "" || cash.value == ""){
                alert('É necessário preencher a fixa.')
            }else{
                addClient(client.value,mail.value,contact.value,date.value,hour.value,cash.value)
                location.reload()
                closewin()
            } 
        })
    }    
})
//salve the values and create database in localstorage
function addClient(nome,mail,contact,date,hour,cash){
    let clientes = {
        client: nome,
        mail: mail,
        contact: contact,
        date: date,
        hour: hour,
        cash: cash
    }
    let clientesdb = localStorage.clientesdb
    if(clientesdb == null){
        clientesdb = []
    }else{
        clientesdb = JSON.parse(clientesdb)
    }
    clientesdb.push(clientes)
    localStorage.clientesdb = JSON.stringify(clientesdb)
}

//list for values in database from localstorage
function listing(){
    let clientesdb = JSON.parse(localStorage.clientesdb)
    const tabela = document.getElementById('tabela')
    let i = 0 
    for(let client of clientesdb){
        tabela.innerHTML += `<tr class="trjs">
        <td>${client.client}</td>
        <td>${client.mail}</td>
        <td><button class="send"><a href="https://web.whatsapp.com/send?phone=55${client.contact}" target="_blank"><img src ="img/wpp.png"></a></button>${client.contact} </td>
        <td>${client.date}</td>
        <td>${client.hour}</td>
        <td>R$${client.cash}</td>
        <td><button class="edit" id="edit-${i}">Editar</button> <button class="del" id="del-${i}">Deletar</button></td>
         </tr> `
        i++
    }
}
window.addEventListener('load',()=>{
    listing()
})
//button clear
document.addEventListener('click',(e)=>{
    //delete
    if(e.target.classList == "del"){
       let nrandom = Math.floor(Math.random()*10000)
        let question = prompt('Para deletar digite '+nrandom)
        if(question == nrandom){
            let i = Number(e.target.id[4])
            del(i)
            e.target.parentNode.parentNode.remove()
        }       
    }else if(e.target.classList == "edit"){
        save.innerText = "Editar"
        openwin()
        save.classList.remove('save-btn')
        save.classList.add('edit-btn')
        save.addEventListener('click',()=>{
            let i = Number(e.target.id[5])
            edit(i)
        })
    }
})
function del(indice){
    let clientes = JSON.parse(localStorage.getItem('clientesdb'))
    clientes.splice(indice,1)
    localStorage.setItem('clientesdb', JSON.stringify(clientes))
    
}
function edit(indice){
    let client = document.getElementById('client')
    let mail = document.getElementById('mail')
    let contact = document.getElementById('contact')
    let date = document.getElementById('date')
    let hour = document.getElementById('hour')
    let cash = document.getElementById('cash')
    let clientes = JSON.parse(localStorage.getItem('clientesdb'))

    if(client.value == "" || cash.value == ""){
        alert('É necessário preencher a fixa.')
    }else{
        addClient(client.value,mail.value,contact.value,date.value,hour.value,cash.value)
        clientes[indice].client = client.value
        clientes[indice].mail = mail.value
        clientes[indice].contact = contact.value
        clientes[indice].date = date.value
        clientes[indice].hour = hour.value
        clientes[indice].cash = cash.value
        localStorage.setItem('clientesdb', JSON.stringify(clientes))
        closewin()
        location.reload()
        
    } 
   
}