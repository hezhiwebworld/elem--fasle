

//es 导出
export default {
    //在这里面定义改变数据仓库数据的方法
    add(state){
        state.count++
    },
    reduce(state){
        state.count--
    }
}
