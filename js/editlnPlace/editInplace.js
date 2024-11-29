/**
 * @func 就地编辑
 * @params { id, parent 父节点, value 默认值}
 * @author KK
 * @date 2024-06-12
 */
function EditInPlace(id, parent, value) {
     this.id = id;// 跨函数共享属性
     this.parent = parent || document.body;
     this.value = value || '这个家伙很懒，什么都没有留下';
     this.createElement(this.id);
   }
   EditInPlace.prototype.createElement = function(id) {
     // console.log(id);
     this.createElement=document.createElement('div');
     this.createElement.id=this.id;
     this.parent.appendChild(this.containerElement);
     // = <div id="ep1"></div>
     this.staticElement=document.createElement('span');
     this.staticElement.innerHTML=this.value;
     this.containerElement.appendChild(this.staticElement);
     
   }