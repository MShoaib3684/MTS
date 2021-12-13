import types from "../types";

const initial_state = {
    userData: {}
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case types.LOGIN:
            const data = actions.payload
            return { userData: data }
        default:
            break;
    }
}