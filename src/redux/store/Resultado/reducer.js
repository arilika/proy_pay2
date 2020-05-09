// Inicializa el estado
const initialState = { resultado: "" };

export default (state = initialState, action) => {
    // Valida el tipo de "action" de acuerdo a cada identificador
    switch (action.type) {
        case 'ACTUALIZAR_RESULTADO':
            return {
                ...state, // Retorna todo lo que había en el "store" y
                resultado: action.payload + " - " // resultado toma el nuevo valor
            };
        default: // Si no se modifica retorna el estado inicial
            return state;
    }
}

// Se exporta esta opción para devolver el valor de "resultado" del "state"
export const selectActiveResultado = state => state.resultadoReducer.resultado;
