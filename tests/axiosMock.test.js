let Users;
let axios;

describe("mocked axios", () => {
  beforeAll(() => {
    jest.isolateModules(() => {
      Users = require("../functions/axiosMock.js");

      jest.mock("axios");
      axios = require("axios");
    });
  });

  test("should fetch user Bob", () => {
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);

    return Users.all().then((data) => expect(data).toEqual(users));
  });

  test("should fetch user Martin", () => {
    const users = [{ name: "Martin" }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);

    return Users.all().then((data) => {
      return expect(data).toEqual(users);
    });
  });
});

describe("pure axios", () => {
  beforeAll(() => {
    jest.isolateModules(() => {
      Users = require("../functions/axiosMock.js");

      jest.unmock("axios");
      axios = require("axios");
    });
  });

  test("should fetch 2 users", () => {
    const users = [
      {
        name: "Ann",
      },
      {
        name: "Rose",
      },
    ];

    return Users.all().then((data) => {
      return expect(data).toEqual(users);
    });
  });
});
