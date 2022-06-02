import { api } from "./axios";

export const getTasks = async () => {
  try {
    console.log("I am here");
    const response = await api.get("task/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id) => {
  try {
    await api.delete(`task/${id}/`);
  } catch (error) {
    console.error(error);
  }
};

export const addTask = async (ready, title, user) => {
  try {
    await api.post("task/", { ready, title, user });
  } catch (error) {
    console.error(error);
  }
};

export const doCompleteTask = async (id, ready) => {
  try {
    await api.patch(`task/${id}/`, { ready });
  } catch (error) {
    console.error(error);
  }
};

export const editTask = async (id, title) => {
  try {
    await api.patch(`task/${id}/`, { title });
  } catch (error) {
    console.error(error);
  }
};
