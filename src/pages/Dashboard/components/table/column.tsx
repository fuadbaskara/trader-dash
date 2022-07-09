import { Tag } from 'antd'
import { dateFormat } from '../../../../utils/date'

const tagColor = {
  pending: '#E59849',
  completed: '#789764',
  canceled: '#D66D4B',
}

export const columns = [
  {
    title: 'Order Number',
    dataIndex: 'order_id',
    key: 'order_id',
    render: (order_id: string) => <span>{order_id || '-'}</span>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={tagColor[status as keyof typeof tagColor]}>
        {status || '-'}
      </Tag>
    ),
  },
  {
    title: 'Operator',
    dataIndex: 'full_name',
    key: 'full_name',
    render: (full_name: string) => <span>{full_name || '-'}</span>,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    render: (location: string) => <span>{location || '-'}</span>,
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    key: 'start_date',
    render: (start_date: string) => (
      <span>{start_date ? dateFormat(start_date) : '-'}</span>
    ),
  },
  {
    title: 'Due Date',
    dataIndex: 'due_date',
    key: 'due_date',
    render: (due_date: string) => (
      <span>{due_date ? dateFormat(due_date) : '-'} </span>
    ),
  },
]
