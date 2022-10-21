import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)


//REGISTRO
export const registro = async (newEmail, newPassword) => {

    const result = await supabase.auth.signUp({
      email: newEmail,
      password: newPassword
    });
  
    if(result.error){
      return false
    }

    console.log(result);
    return result, console.log('User created successfully!');
  //TODO identificar el result y retornar lo que nos interesa
};

//LOGIN
export const login = async (email, password) => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password
    });
    console.log(response);
    if(response.error){
      return false
    }
    
    return response.data.user.id
};


/*
task: {
    user_id: id
    title: titulo
    description: descripcion
}
*/
//CREAR NUEVA TASK
export const newTask = async (task) => {
    const response = await supabase.from('Task')
    .insert(task)
    console.log(response);
    //TODO identificar la respuesta y retornar lo que encesitemos. P.ej true si se ha insertado en el registro y false si no.
    // El response no retorna el id de la task que se ha creado tendremos que volver a hace un getTask para obtener los id
};



  //GET TASKS
export const getTasks = async () => {
    const response = await supabase
    .from('Task')
    .select('*') //* ttrae todas las columnas
    .order('id', {ascending: false});
    console.log(response);
    //TODO retornar la información de las task, ej. response.data....
};



/*
task: {
    title: modificacion titulo
    description: modificacion descripcion
}
*/
//UPDATE TASK
export const updateTask = async (taskId, task) => {
    const response = await supabase
    .from('Task')
    .update(task)
    .eq('id', taskId); //columna de referencia, valor que coincide del cual queremos modificar el contenido
  
    console.log(response);
    //TODO identificar el resultado y retornar lo que nos interese. Por ejemplo true si ha ido bien o false si ha fallado
};


//ELIMINAR TASK
export const deleteTask = async (taskId) => {
    const response = await supabase
    .from('Task')
    .delete()
    .eq('id', taskId); //columna, valor (borrara toda la fila que coincida con la columna id que tenga valor 7)
      //TODO identificar el resultado y retornar lo que nos interese. Por ejemplo true si ha ido bien o false si ha fallado
    console.log(response);
};



//LOGOUT
export const logOut = async () => {
    const response = await supabase.auth.signOut();
    console.log(response);
    //TODO identificar el resultado y retornar lo que nos interese. Por ejemplo true si ha ido bien o false si ha fallado
}