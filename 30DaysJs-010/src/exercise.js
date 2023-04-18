export function createTaskPlanner() { let tasksList = []
  return {
    // crear tarea
    addTask: (task) => {
      task.completed = false
      tasksList.push(task)
      //console.log(task)
    },

    // eliminar tarea
    removeTask: (value) => {
      tasksList = tasksList.filter((task) => {
        if (task.id !== parseInt(value) && task.name !== value) return task
        console.log(task)
      })
    },

    // listar todas las tareas
    getTasks: () => tasksList,

    // listar las tareas pendientes
    getPendingTasks: () => tasksList.filter((task) => !task.completed),

    // listar las tareas completadas
    getCompletedTasks: () => tasksList.filter((task) => task.completed),

    // marcar una tarea como completada
    markTaskAsCompleted: (value) => {
      const index = tasksList.findIndex(
        (task) => task.id === parseInt(value) || task.name === value
      )
      tasksList[index].completed = true
      console.log(tasksList)
    },

    // listar las tareas por prioridad
    getSortedTasksByPriority: () =>
      [...tasksList].sort((a, b) => a.priority - b.priority),

    // filtrar las tareas por etiqueta
    filterTasksByTag: (tag) =>
      tasksList.filter((task) => task.tags.includes(tag)),

    // actualizar una tarea
    updateTask: (taskId, updates) => {
      tasksList = tasksList.map((task) => {
        if (task.id !== taskId) return task

        const taskUpdated = {
          ...task,
          ...updates,
        }
        console.log(taskUpdated)
        return taskUpdated
      })
    },
  }}
