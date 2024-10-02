import  supabase  from '../supabase/conexion';

export class User {
    static async createUser(nombre: string, contrasena: string, correo: string){
        const { data, error } = await supabase.rpc('create_user',  { p_nombre: nombre, p_contrasena: contrasena, p_correo: correo });
        if (error) throw error;
        return data;
    }

    static async getUsers(){
        const { data, error } = await supabase.rpc('read_users') 
        if (error) throw error;
        return data;
    }

    static async updateUser(id:number, nombre: string, contrasena: string, correo: string){
        const { data, error } = await supabase.rpc('update_user',  {p_id: id, p_nombre: nombre, p_contrasena: contrasena, p_correo: correo });
        if (error) throw error;
        return data;
    }

    
    static async deleteUser(id:number){
        const { data, error } = await supabase.rpc('delete_user', {p_id: id});
        if (error) throw error;
        return data;
    }

    static async loginUser(contrasena: string, correo: string){
        const { data, error } = await supabase.rpc('login_user', {p_contrasena: contrasena, p_correo: correo });
        if (error) throw error;
        return data;
    }
}
