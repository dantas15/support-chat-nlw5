import { EntityRepository, Repository } from "typeorm";

import { Setting } from "../entities/Setting";

@EntityRepository(Setting) // EntityRepository do tipo Setting
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };
