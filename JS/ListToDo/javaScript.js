document.querySelector('#push').onclick = function(){
    
    if(document.querySelector('#newTask input').value.length == 0){
        alert("please enter a tesk...")
    }else{
        document.querySelector('#tasks').innerHTML += `
        <section class="task">
        <span id="taskName">
            ${document.querySelector('#newTask input').value}
        </span>
        <button class="delete">
        DEL
        </button>
        </section>
        `;
    }
    var currentTask = document.querySelectorAll('.delete')
    for (var i = 0; i<currentTask.length; i++){
        currentTask[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    var tasks = document.querySelectorAll(".task");
    for (var i=0; i < tasks.length; i++)
    {
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
    document.querySelector("#newTask input").value = ""
}