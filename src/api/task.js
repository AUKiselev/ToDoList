import { api } from "./axios";

export const getTasks = async () => {
  try {
    const response = await api.get("api/v1/task/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id) => {
  try {
    await api.delete(`api/v1/task/${id}/`);
  } catch (error) {
    console.error(error);
  }
};

export const addTask = async (ready, title, user) => {
  try {
    await api.post("api/v1/task/", { ready, title, user });
  } catch (error) {
    console.error(error);
  }
};

export const doCompleteTask = async (id, ready) => {
  try {
    await api.patch(`api/v1/task/${id}/`, { ready });
  } catch (error) {
    console.error(error);
  }
};

export const editTask = async (id, title) => {
  try {
    await api.patch(`api/v1/task/${id}/`, { title });
  } catch (error) {
    console.error(error);
  }
};
