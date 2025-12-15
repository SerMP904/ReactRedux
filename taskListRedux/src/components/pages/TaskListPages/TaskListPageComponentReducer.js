import { AGREGAR_TAREA, ELIMINAR_TAREA, TOGGLE_TAREA } from "./TaskListPageComponentAction";

const initialState = {
    tasks: [],
};

const taskListPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case AGREGAR_TAREA:
            return {
                ...state,
                task: [...state.tasks, action.payload.newTask]
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tasks: state.tasks.filter((t, idx) => idx !== action.payload.idTask)
            }
        case TOGGLE_TAREA:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default taskListPageReducer;