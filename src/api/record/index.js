import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { query } from './controller'
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
router.get('/', body(), query)

export default router
