import { User } from "../src/classes/user";

describe("User", () => {
  it("Should create a user with matricule or with name too oncely", () => {
    const user1 = User.getInstance("12345");
    const user2 = User.getInstance("19325", "Dilane");

    expect(user1.getSignature()).toEqual(user2.getSignature());
    expect(user1.getMatricule()).toBe("12345");
    expect(user2.getName()).toBeNull();
  });
});
