import modelsData from "@/app/data/models.json";

export async function getAllModels() {
  return modelsData;
}

export async function getModelById(id) {
  const models = await getAllModels();
  return models.find((model) => model.id === Number(id));
}
