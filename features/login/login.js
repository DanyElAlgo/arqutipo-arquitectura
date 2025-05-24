import security from "../security/security"
export default Login() = {
    Verify(email, password){
        // Obtener un usuario de la base de datos que corresponda al email
        // Sino, retornar un error
        password = security.Hash(password)
        // Verificar que la contraseña del usuario sea la misma a la introducida
        if(1){
            return true
        }
        return false
    }
}