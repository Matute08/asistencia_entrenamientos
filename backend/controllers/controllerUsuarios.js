function guardarUsuario(usuario) {

    try {
        const { 
            Nombre, 
            // '03/02': fecha_03_02, 
            // '05/02': fecha_05_02, 
            // '10/02': fecha_10_02, 
            // '12/02': fecha_12_02, 
            // '17/02': fecha_17_02, 
            // '19/02': fecha_19_02, 
            // '24/02': fecha_24_02, 
            // '26/02': fecha_26_02, 
            // Pago, 
            // Cant, 
            // Total 
        } = usuario;
    
        const sheet = getSheets(env_.SH_USUARIOS);
        sheet.appendRox([Nombre]);
        return{
            titulo: 'Usuario Guardado',
        }
    } catch (error) {
        return{
            titulo: 'Error al guardar el usuario'+error
        }
    }
}