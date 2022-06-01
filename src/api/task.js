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
    await api.delete(`task/${id}`);
  } catch (error) {
    console.error(error);
  }
};
