const list = [
  {
    id: '1',
    transDate: '20210825'
  },
  {
    id: '2',
    transDate: '20210824'
  },
  {
    id: '3',
    transDate: '20210916'
  },
  {
    id: '4',
    transDate: '20210824'
  },
  {
    id: '5',
    transDate: '20210906'
  },
  {
    id: '6',
    transDate: '20210826'
  },
]
list.sort((a,b) => {
  return Number(b.transDate) - Number(a.transDate)
})

console.log(list)