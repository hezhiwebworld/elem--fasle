// 利用本地存储来模拟

//保存
export const save = (name,content) => {
    if(!name) return;
    if(typeof content !== 'string'){
        content = JSON.stringify( content )
    }
    window.localStorage.setItem( name, content );
}
//获取
export const get = (name) => {
    if(!name) return;
    return window.localStorage.getItem( name );
}
//删除
export const remove = (name) => {
    if(!name) return;
    window.localStorage.removeItem(name);
}