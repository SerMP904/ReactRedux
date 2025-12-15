export const SET_VALOR = "SER_VALOR";

export const ponerValor = (nuevoValor) => {
    return {
        type: SET_VALOR,
        payload: {
            nuevoValor
        }
    }
}