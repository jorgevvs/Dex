import { createContext, ReactNode } from "react";

export const PokemonContext = createContext({});

interface PokemonProviderProps{
    children: ReactNode;
}

export function PokemonProvider({ children } : PokemonProviderProps){

    function newPokemon(){
        
    }

    return(
        <PokemonContext.Provider value={{

        }}>
            {children}
        </PokemonContext.Provider>
    );
}