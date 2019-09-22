import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { first100Record, query } from './controller'
export { default as Record } from './model'
export { schema } from './model'

const router = new Router()

/**
 * @api {get} /records Retrieve records
 * @apiName RetrieveRecords
 * @apiGroup Record
 * @apiUse listParams
 * @apiSuccess {Object[]} records List of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', body(), first100Record)

/**
 * @api {post} /records Query on record
 * @apiName Query
 * @apiGroup Record
 * @apiParam startDate Minimum value (inclusive) for 'createdAt' field of Record
 * @apiParam endDate Maximum value (exclusive) for 'createdAt' field of Record
 * @apiParam minCount Minimum value (inclusive) for sum of 'counts' field of Record
 * @apiParam maxCount Maximum value (exclusive) for sum of 'counts' field of Record
 * @apiSuccess {Object} record Record's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.post('/', body(), query)

export default router
