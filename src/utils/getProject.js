import { projects } from "../const/projects";

export const getProjectById = (id) => {
  return projects.find((car) => car.id === id);
};
