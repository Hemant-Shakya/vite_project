// action type

export const INCREMENT= 'INCREMENT'
export const DECREMENT= 'DECREMENT'

//Action creator

export const increment =() =>
    ({
        type : INCREMENT
    })

export const decrement =() =>
    ({
        type : DECREMENT
    })