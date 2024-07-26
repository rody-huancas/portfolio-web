export const blogData: BlogPostInterface[] = [
  {
    title:
      "Domina Git: Tu Guía Esencial para Aprender los Comandos Más Importantes",
    category: "Aprendizaje de Git",
    image: 'https://res.cloudinary.com/dmgazox1n/image/upload/v1721957210/Portfolio/Blog/Domina%20Git:%20Tu%20Gu%C3%ADa%20Esencial%20para%20Aprender%20los%20Comandos%20M%C3%A1s%20Importantes/domina-git.jpg',
    date: '19 Julio de 2024',
    description:
      "En este repositorio, comparto mi viaje de aprendizaje sobre Git, donde voy descubriendo y practicando poco a poco los comandos fundamentales de esta poderosa herramienta de control de versiones. Espero aprender mucho y mejorar mis habilidades en el desarrollo de software.",
    commands: [
      {
        command: "git --version",
        description: "Muestra la versión de Git instalada.",
      },
      {
        command: "git help <comando>",
        description: "Brinda ayuda sobre los comandos.",
      },
      {
        command: 'git config --global user.name "<usuario>"',
        description: "Configura el nombre de usuario.",
      },
      {
        command: 'git config --global user.email "<correo>"',
        description: "Configura el correo electrónico.",
      },
      {
        command: "git config --list",
        description: "Lista la configuración de Git.",
      },
      {
        command: "git init",
        description: "Inicia un nuevo repositorio.",
      },
      {
        command: "git status",
        description: "Lista el estado de los archivos.",
      },
      {
        command: "git add --all",
        description: "Agrega todos los archivos pendientes de cambios.",
      },
      {
        command: "git add .",
        description:
          "Agrega todos los archivos pendientes de cambios desde la carpeta actual.",
      },
      {
        command: 'git commit -m "<mensaje>"',
        description:
          "Guarda en el repositorio local todos los archivos agregados.",
      },
      {
        command: "git commit --amend",
        description:
          "Abre un editor para modificar el último commit (reemplaza el último commit).",
      },
      {
        command: 'git tag <tag> -m "<mensaje>"',
        description: "Crea un tag.",
      },
      {
        command: "git tag",
        description: "Lista los tags.",
      },
      {
        command: "git tag -d <tag>",
        description: "Borra un tag en específico.",
      },
      {
        command: 'git tag -a <tag> <commit> -m "<mensaje>"',
        description: "Hace un tag en un commit anterior.",
      },
      {
        command: "git show <tag>",
        description: "Muestra información del tag.",
      },
      {
        command: "git reset",
        description:
          "Deshace el último commit, eliminando los cambios del área de preparación.",
      },
      {
        command: "git reset --soft",
        description:
          "Deshace el último commit, conservando cambios en el área de preparación.",
      },
      {
        command: "git reset --hard <commit>",
        description:
          "Cambia a un commit específico, perdiendo todos los cambios posteriores.",
      },
      {
        command: "git log --oneline",
        description: "Muestra los commits realizados hasta el momento.",
      },
      {
        command: "git log --oneline --graph --all",
        description:
          "Lista todos los commits de todas las ramas de forma gráfica tomando como base la rama actual.",
      },
      {
        command: "git branch <rama>",
        description: "Crea una nueva rama.",
      },
      {
        command: "git branch",
        description: "Nos muestra en qué rama estamos y lista las demás.",
      },
      {
        command: "git checkout <rama>",
        description: "Cambiamos de la rama actual a una específica.",
      },
      {
        command: "git checkout -b <rama>",
        description: "Crea y nos movemos a la nueva rama.",
      },
      {
        command: "git branch -m <rama>",
        description: "Renombra la rama actual.",
      },
      {
        command: "git branch -d <rama>",
        description: "Eliminar una rama.",
      },
      {
        command: "git merge <rama>",
        description:
          "Permite juntar dos ramas, trayendo los cambios de la rama especificada a la rama actual.",
      },
      {
        command: "git merge --no-ff <rama>",
        description:
          "Permite juntar dos ramas, pero manteniéndolas. Genera un commit del merge en la rama actual.",
      },
      {
        command: "git rebase <rama>",
        description:
          "Permite traer los commits de otra rama a la rama actual, reorganizando los commits.",
      },
      {
        command: "git remote add origin <url>",
        description: "Vincula el repositorio remoto con el repositorio local.",
      },
      {
        command: "git remote set-url origin <url>",
        description: "Cambia la URL del repositorio remoto.",
      },
      {
        command: "git remote -v",
        description:
          "Nos muestra en qué repositorio estamos enlazados remotamente.",
      },
      {
        command: "git push -u origin <rama>",
        description:
          "Sube los cambios del repositorio local al remoto y especifica la rama principal.",
      },
      {
        command: "git push",
        description:
          "Sube los cambios del repositorio local al remoto de la rama principal.",
      },
      {
        command: "git push origin <rama>",
        description:
          "Sube los cambios del repositorio local al remoto de una rama específica.",
      },
      {
        command: "git push origin --delete <rama>",
        description: "Eliminar una rama remota.",
      },
      {
        command: "git push --tags",
        description: "Sube todos los tags locales al remoto.",
      },
      {
        command: "git tag -d <tag>",
        description: "Eliminar un tag remoto.",
      },
      {
        command: "git push origin :refs/tags/<tag>",
        description: "Eliminar un tag remoto.",
      },
      {
        command: "git pull",
        description:
          "Descarga los cambios del repositorio remoto y actualiza el local en la rama por defecto.",
      },
      {
        command: "git pull origin <rama>",
        description:
          "Descarga los cambios del repositorio remoto y actualiza el local en una rama específica.",
      },
      {
        command: "git clone <url>",
        description: "Clona un repositorio remoto en la rama por defecto.",
      },
      {
        command: "git clone --branch <rama> <url>",
        description: "Clona un repositorio remoto en una rama específica.",
      },
    ],
  },
];
