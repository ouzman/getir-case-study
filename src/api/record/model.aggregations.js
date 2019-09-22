export const createdAtBetween = ({ lowerBound, upperBound }) =>
  ({
    $match: {
      createdAt: { $lt: upperBound, $gt: lowerBound }
    }
  })

export const projectionForTotalCount = () =>
  ({
    $project: {
      _id: false,
      key: true,
      createdAt: true,
      totalCount: {
        $reduce: {
          input: '$counts',
          initialValue: 0,
          in: {
            $sum: ['$$value', '$$this']
          }
        }
      }
    }
  })

export const totalCountBetween = ({ lowerBound, upperBound }) =>
  ({
    $match: {
      totalCount: { $lt: upperBound, $gt: lowerBound }
    }
  })
