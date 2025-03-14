// virtual node
const vnode = {
    type: 'div', // 还能是组件
    props: { id: 'todo-list' },
    children: [
      { 
        type: 'input', 
        props: { placeholder: 'Add new todo' } 
      },
      { 
        type: 'ul', 
        children: [
          { type: 'li', props: { class: 'todo-item' }, children: ['Buy groceries'] },
          { type: 'li', props: { class: 'todo-item' }, children: ['Read a book'] }
        ] 
      }
    ]
    };

<div id='todo-list'>
  <input placeholder='Add new todo'></input>
  <ul>
    <li class='todo-item'>Buy groceries</li>
    <li class='todo-item'>Read a book</li>
  </ul>

</div>