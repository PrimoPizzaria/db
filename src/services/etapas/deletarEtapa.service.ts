import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Etapas } from "../../entities/etapas.entities";

const deletarEtapaService = async (): Promise<void> => {
  const etapasRepositorio: Repository<Etapas> =
    AppDataSource.getRepository(Etapas);

  await etapasRepositorio.createQueryBuilder().delete().from(Etapas).execute();
};

export default deletarEtapaService;
