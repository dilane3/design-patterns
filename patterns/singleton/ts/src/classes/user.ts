export class User {
  // Static attibutes
  private static instance: User;

  // Instance attributes
  private name: string | null;
  private matricule: string;

  private constructor(matricule: string, name: string | null = null) {
    this.matricule = matricule;
    this.name = name;
  }

  // Static methods
  public static getInstance(matricule: string, name: string | null = null): User {
    if (!User.instance) {
      User.instance = new User(matricule, name);
    }

    return User.instance;
  }

  // Instance methods
  public getMatricule(): string {
    return this.matricule;
  }

  public getName(): string | null {
    return this.name;
  }

  public sayHello(): void {
    console.log(`Hello, I'm ${this.name} and my matricule is ${this.matricule}`);
  }

  public getSignature(): string {
    return `${this.name} ${this.matricule}`;
  }
}