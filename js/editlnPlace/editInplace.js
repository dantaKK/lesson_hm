// /**
//  * @func 就地编辑
//  * @params { id, parent 父节点, value 默认值}
//  * @author ysw
//  * @date 2024-06-12
//  */
// function EditInPlace(id, parent, value) {
//   this.id = id;// 跨函数共享属性
//   this.parent = parent || document.body;
//   this.value = value || '这个家伙很懒，什么都没有留下';
//   this.createElement(this.id);
// }
// EditInPlace.prototype.createElement = function(id) {
//   // console.log(id);
//   // <div id="ep1"></div>
//   this.containerElement = document.createElement('div');
//   this.containerElement.id = this.id;
//   this.parent.appendChild(this.containerElement);

//   this.staticElement = document.createElement('span');
//   this.staticElement.innerText = this.value;
//   this.containerElement.appendChild(this.staticElement);
// }


/**
 * @func 就地编辑
 * @params { id, parent 父节点, value 默认值}
 * @author KK
 * @date 2024-06-12
 */
function EditInPlace(id, parent, value) {
  this.id = id; // 跨函数共享属性
  this.parent = parent || document.body;
  this.value = value || '这个家伙很懒，什么都没有留下';
  this.createElement(this.id);
}

EditInPlace.prototype.createElement = function(id) {
  // 创建容器元素
  this.containerElement = document.createElement('div');
  this.containerElement.id = this.id;
  this.parent.appendChild(this.containerElement);

  // 创建静态显示元素
  this.staticElement = document.createElement('span');
  this.staticElement.innerText = this.value;
  this.containerElement.appendChild(this.staticElement);
   
  // 创建输入框
  this.inputElement = document.createElement('input');
  this.inputElement.type = 'text';
  this.inputElement.style.display = 'none';
  this.containerElement.appendChild(this.inputElement);

  // 创建保存按钮
  this.saveButton = document.createElement('button');
  this.saveButton.innerText = 'Save';
  this.saveButton.style.display = 'none';
  this.containerElement.appendChild(this.saveButton);

  // 创建取消按钮
  this.cancelButton = document.createElement('button');
  this.cancelButton.innerText = 'Cancel';
  this.cancelButton.style.display = 'none';
  this.containerElement.appendChild(this.cancelButton);

  // 添加点击事件监听器
  this.addEventListeners();
};

EditInPlace.prototype.addEventListeners = function() {
  const self = this;

  // 点击文本进入编辑状态
  this.staticElement.addEventListener('click', function() {
    self.convertToEdit();
    self.inputElement.value = self.staticElement.innerText;
  });

  // 点击保存按钮保存最新的签名
  this.saveButton.addEventListener('click', function() {
    self.staticElement.innerText = self.inputElement.value;
    self.convertToText();
  });

  // 点击取消按钮回到文本状态
  this.cancelButton.addEventListener('click', function() {
    self.convertToText();
  });

  // 回车键保存
  this.inputElement.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      self.saveButton.click();
    }
  });
};

EditInPlace.prototype.convertToText = function() {
  this.inputElement.style.display = 'none';
  this.saveButton.style.display = 'none';
  this.cancelButton.style.display = 'none';
  this.staticElement.style.display = 'inline';
};

EditInPlace.prototype.convertToEdit = function() {
  this.staticElement.style.display = 'none';
  this.inputElement.style.display = 'inline';
  this.saveButton.style.display = 'inline';
  this.cancelButton.style.display = 'inline';
  this.inputElement.focus();
};