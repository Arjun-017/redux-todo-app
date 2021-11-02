
export const ADD_TODO = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
          label: data,
          id: Math.floor(Math.random()*10000)
        }
    };
}

export const DELETE_TODO = (data) => {
    return {
        type: 'DELETE_TODO',
        payload: data
      };
}