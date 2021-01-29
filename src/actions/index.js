export const addTask= (task) => {
    return{
        type : "ADDTOLIST",
        payload : task
    }
}

export const removeTask = (index) =>{
    return {
        type : "DELETEFROMLIST",
        payload : index
    }
}

export const completeTask = (index) => {
    return {
        type : "COMPLETETASK",
        payload : index
    }
}