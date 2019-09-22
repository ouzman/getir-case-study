import { success } from '../../services/response/'
import { Record } from '.'
import { createdAtBetween, projectionForTotalCount, totalCountBetween } from './model.aggregations'

export const first100Record = (_, res, next) =>
  Record.find()
    .limit(100)
    .then((records) => records.map((record) => record.view()))
    .then(success(res))
    .catch(next)

export const query = ({ bodymen: { body } }, res, next) =>
  Record.aggregate([
    createdAtBetween({ lowerBound: new Date(body.startDate), upperBound: new Date(body.endDate) }),
    projectionForTotalCount(),
    totalCountBetween({ lowerBound: body.minCount, upperBound: body.maxCount })
  ])
    .exec()
    .then(records => ({ 'records': records }))
    .then(success(res))
    .catch(next)
