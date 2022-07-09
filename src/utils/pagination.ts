export const getOffset = (page = 1, perPage = 5) => {
  return (page - 1) * perPage
}

export const getDataRangeByPagination = (offset = 0, perPage = 5) => {
  return { from: offset, to: offset + (perPage - 1) }
}

export const getTotalPage = (totalData: number, perPage = 5) => {
  return Math.ceil(totalData / perPage)
}
