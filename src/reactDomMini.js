import ReactReconciler from 'react-reconciler';

let reconciler = ReactReconciler({
  supportsMutation: true,

  now() {
    return Date.now();
  },

  getPublicInstance(instance) {
    console.log('getPublicInstance');
  },

  getRootHostContext(rootContainer) {
    return {};
  },

  getChildHostContext(parentHostContext, type, rootContainerInstance) {
    return parentHostContext;
  },

  shouldSetTextContent() {
    return false;
  },

  createInstance(type, props, rootContainer, hostContext, internalHandle) {
    console.log('createInstance', props);
    let element = document.createElement(type);
    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith('on')) {
        element.addEventListener(key.toLowerCase().slice(2), value);
      }
    });
    return element;
  },

  createTextInstance(text, rootContainer, hostContext, internalHandle) {
    console.log('createTextInstance');
    return document.createTextNode(text);
  },

  prepareForCommit() {},

  resetAfterCommit() {},

  commitTextUpdate() {},

  prepareUpdate() {},

  commitUpdate(instance, updatePayload, type, prevProps, nextProps, internalHandle) {},

  clearContainer(container) {},

  appendInitialChild(parentInstance, child) {
    console.log('appendInitialChild');
    parentInstance.appendChild(child);
  },

  appendChild(parentInstance, child) {
    console.log('appendChild');
    parentInstance.appendChild(child);
  },

  insertBefore(parentInstance, child, beforeChild) {
    console.log('insertBefore');
  },

  removeChild(parentInstance, child) {
    console.log('removeChild', child, parentInstance);
    parentInstance.removeChild(child);
  },

  finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
    return false;
  },

  appendChildToContainer(container, child) {
    console.log('appendChildToContainer');
    container.appendChild(child);
  },

  insertInContainerBefore(container, child, beforeChild) {
    console.log('insertInContainerBefore');
  },

  removeChildFromContainer(container, child) {
    container.removeChild(child);
  },

  hideInstance() {},

  hideTextInstance() {},

  unhideInstance() {},

  unhideTextInstance() {}
});

const render = (element, container) => {
  let _container = reconciler.createContainer(container, false, false);

  reconciler.updateContainer(element, _container, null, null);
};

export default {
  render
};
