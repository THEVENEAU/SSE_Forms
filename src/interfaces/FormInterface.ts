export default interface FormInterface {
  name: string;
  shortname: string;
  description: string;
  url: string;
  categories: FormCategory[];
}

export enum FormCategory {
  manager = 'Manager',
  administrative = 'Administratif',
  operational = 'Operationnel',
}
