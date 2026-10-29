import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material/styles";
import MaterialUISwitch from "./MaterialUISwitch";

function SelectorTema() {
    const {mode, setMode} = useColorScheme();
    
    if(!mode){
        return null
    }
    const modoBlanco = mode === "light"

    function cambiarModo(){
        setMode(event.target.checked ? "light" : "dark")
    }
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            ml: 1
        }}>
            <MaterialUISwitch 
            checked={modoBlanco} 
            onChange={cambiarModo}
            inputProps={{
                "aria-laber": "Cambiar entre claro y oscuro"
            }} />

        </Box>
    )
}

export default SelectorTema;