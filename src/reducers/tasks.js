const tasks = (state = [{text : 'Welcome to To-Do List!!', completed:false},{text:'Lets begin!!', completed:false}, {text:"the journey", completed:true}], action) => {
    switch(action.type){
        case 'ADDTOLIST' : {
            var newlist =  [...state , {text:action.payload , completed : false}]
            // console.log(newlist)
            return newlist;
        }
        case 'DELETEFROMLIST' : {
            const newTodos = [...state];
            newTodos.splice(action.payload, 1);
            // console.log(newTodos)
            return newTodos
        }
        case 'COMPLETETASK' : {
            // console.log(state)
            var newList = [...state]
            newList[action.payload].completed = true;
            return newList;
        }
        default : 
            return state
    }
}

export default tasks;