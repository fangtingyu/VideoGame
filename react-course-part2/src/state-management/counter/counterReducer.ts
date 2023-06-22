
interface Action {
    type: 'INCREMENT' | 'RESET';
}


//  reducer take the current state and action, then return back with a new state
const counterReducer = (state: number, action: Action): number => {
    if (action.type === 'INCREMENT') return state + 1;
    if (action.type === 'RESET') return 0;
    return state;
}

export default counterReducer;