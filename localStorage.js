export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return {
                products: [],
                cart: [],
                error: ""
            }
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return {
            products: [],
            cart: [],
            error: ""
        };
    }
}

export const saveState = (state) =>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch(err){
        
    }
}