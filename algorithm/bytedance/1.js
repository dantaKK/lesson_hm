let list = [
  {
    id: '1',
    title: '节点1',
    parentId: '',
  },
  {
    id: '1-1',
    title: '节点1-1',
    parentId: '1'
  },
  {
    id: '1-2',
    title: '节点1-2',
    parentId: '1'
  },
  {
    id: '2',
    title: '节点2',
    parentId: ''
  },
  {
    id: '2-1',
    title: '节点2-1',
    parentId: '2'
  }
];

function list2Tree(list, parentID = '') {
  return list.filter(item => item.parentId === parentID) // 注意这里使用了小写的parentId
    .map(item => {
      // 确保每个节点都有一个children属性，即使它是空数组
      item.children = list2Tree(list, item.id) || [];
      return item;
    });
}

console.log(list2Tree(list));