import { success } from '../../services/response/'
import { Record } from '.'

export const query = (_, res, next) =>
  Record.find()
    .limit(100)
    .then((records) => records.map((record) => record.view()))
    .then(success(res))
    .catch(next)
