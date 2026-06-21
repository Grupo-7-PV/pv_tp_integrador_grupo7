import usuarios from "../source/data";
export function login(username, password, sector) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usuario = usuarios.find(
          (u) =>
            u.username === username &&
            u.password === password &&
            u.sector === sector
        );
  
        if (usuario) {
          const { password: _pass, ...perfil } = usuario;
          resolve(perfil);
        } else {
          reject(new Error("Credenciales incorrectas o sector no coincide."));
        }
      }, 800);
    });
  }