// context

[http: post]
public void RegistrarDocente(DocenteDTO) {
    try
    {
        context.register(DocenteDTO)
    }
    catch {
        console.log("error")
    }
    console.log("Éxito")
}