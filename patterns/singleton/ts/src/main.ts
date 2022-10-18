import { User } from "./classes/user";

// Create a new user
const user = User.getInstance("123456789", "John Doe");

// Display the user's name and matricule
user.sayHello();