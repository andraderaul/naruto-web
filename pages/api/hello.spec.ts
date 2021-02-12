import hello from "./hello";

describe("Hello", () => {
  it("should return json hello", () => {
    const expectResponse = {
      name: "John Doe",
    };
    const response = hello({}, { json: (data: any) => data });
    expect(expectResponse).toEqual(response);
  });
});
