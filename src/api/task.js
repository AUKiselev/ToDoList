import { api } from "./axios";

export const getTasks = async (accessToken) => {
  try {
    const response = await api.get("task/", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id, accessToken) => {
  try {
    await api.delete(`task/${id}/`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  } catch (error) {
    console.error(error);
  }
};

export const addTask = async (ready, title, user, accessToken) => {
  try {
    await api.post(
      "task/",
      { ready, title, user },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  } catch (error) {
    console.error(error);
  }
};

export const doCompleteTask = async (id, ready, accessToken) => {
  try {
    await api.patch(
      `task/${id}/`,
      { ready },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  } catch (error) {
    console.error(error);
  }
};

export const editTask = async (id, title, accessToken) => {
  try {
    await api.patch(
      `task/${id}/`,
      { title },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  } catch (error) {
    console.error(error);
  }
};
