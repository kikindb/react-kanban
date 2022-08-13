import { describe, it, expect, vi, beforeAll } from "vitest";
import { taskObj, getTasks } from "./tasks.service";

const fakeLocalStorage = (function () {
  let store = {} as any;

  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem: function (key: string) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

const fakeFetch = (function () {
  let fetch = {} as any;

  return {};
})();

describe("Tasks Service", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: fakeLocalStorage,
    });
  });

  it("should fetch tasks", async () => {
    // const fetchMock = vi
    //   .spyOn(global, "fetch")
    //   .mockImplementation(() =>
    //     Promise.resolve({ json: () => Promise.resolve([]) })
    //   );
    const tasks = await getTasks("testtoken");
  });

  /*it("should save tasks to localstorage", () => {
    saveTasks([taskObj]);
    expect(window.localStorage.getItem("tasks")).toEqual(
      JSON.stringify([taskObj])
    );
  });*/

  /*it("should get tasks from localstorage", () => {
    saveTasks([taskObj]);
    const tasks = getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0]).toMatchObject(taskObj);
  });

  it("should add tasks to localstorage", () => {
    addTask(taskObj);
    const tasks = getTasks();
    expect(tasks.length).toBe(2);
    expect(tasks[0]).toMatchObject(taskObj);
    expect(tasks[1]).toMatchObject(taskObj);
  });*/
});
