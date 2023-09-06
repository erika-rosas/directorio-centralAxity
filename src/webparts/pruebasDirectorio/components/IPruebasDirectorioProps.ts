export interface IPruebasDirectorioProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  listItems: IitemDirectory[];
}
export interface IitemDirectory {
  Title: string;
  Correo: string;
  Imagen: string;
  img: string;
}

export interface IUser {
  id: number;
  Title: string;
  lastName: string;
  job: string;
  email: string;
  photo: string;
  area: string;
}

export interface IListUser {}
