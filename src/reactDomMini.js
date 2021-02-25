import ReactReconciler from 'react-reconciler';

let reconciler = ReactReconciler({
  supportsMutation: true,

  now() {
    return Date.now();
  },

  getPublicInstance() {},

  getRootHostContext() {},

  getChildHostContext(parentHostContext, type, rootContainerInstance) {
    return parentHostContext;
  },

  shouldSetTextContent() {
    return false;
  },

  createInstance(type, props, rootContainer, hostContext, internalHandle) {
    console.log(type, props, rootContainer, 'instance');
  },

  createTextInstance(text, rootContainer, hostContext, internalHandle) {
    console.log(text, rootContainer, hostContext, internalHandle);
  },

  prepareForCommit() {},

  resetAfterCommit() {},

  commitTextUpdate() {},

  prepareUpdate() {},

  commitUpdate() {},

  appendInitialChild(parentInstance, child) {},

  appendChild() {},

  clearContainer() {},

  insertBefore() {},

  removeChild() {},

  finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {},

  appendChildToContainer() {},

  insertInContainerBefore() {},

  removeChildFromContainer() {},

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
