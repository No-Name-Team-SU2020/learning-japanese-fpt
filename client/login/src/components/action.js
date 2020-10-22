export const userLoginFetch = user => {
    return dispatch => {
        return fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ user })
            })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {} else {
                    localStorage.setItem("token", data.jwt)
                    dispatch(loginUser(data.user))
                }
            })
    }
}