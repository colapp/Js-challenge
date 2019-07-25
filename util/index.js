/*
 * 事件兼容性方法-混子前端也该会的技能
 */
var EventUtil = {
    //添加事件
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    //获得事件对象
    getEvent: function(event){
        return event ? event : window.event;
    },
    //获得源对象
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    //阻止默认事件
    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //清除事件绑定
    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    //组织事件冒泡和捕获
    stopPropagation: function(event){
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};