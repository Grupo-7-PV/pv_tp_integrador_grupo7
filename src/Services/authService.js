const usuarios = [
    {
      id: 1,
      username: "carlos.mendez",
      password: "soporte123",
      nombre: "Carlos Mendez",
      sector: "Soporte",
    },
    {
      id: 2,
      username: "laura.garcia",
      password: "gerencia456",
      nombre: "Laura Garcia",
      sector: "Gerencia",
    },
    {
      id: 3,
      username: "martin.lopez",
      password: "soporte789",
      nombre: "Martin Lopez",
      sector: "Soporte",
    },
    {
      id: 4,
      username: "ana.torres",
      password: "gerencia321",
      nombre: "Ana Torres",
      sector: "Gerencia",
    },
  ];
  
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