var button = document.querySelector('button')
var input = document.querySelector('input')
var listTasks = document.querySelector('.listTasks')

function addTask() {
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        //initialisation du tableau
        var tabTasks = []
        //affection du contenu du champ input a la variable value
        var value = input.value
        //ajout du contenu du input a tableau tabTasks
        tabTasks.push(value)
        // console.log(tasks)
        for (const text of tabTasks) {
            // creation de la div contenant la task
            var task = document.createElement('div')
            //ajout du contenu du input a la task
             task.textContent=text
             //ajout de la task a list des task
             listTasks.appendChild(div)
             //ajout du trait en dessous de chaque task
             let hr = document.createElement('hr')
                task.appendChild(hr)
        }
        
    })
}addTask()
//ajouter la checkbox
//fait le bonus 1
//faire le bonus 2