const ViewModel = require('../build/framework-dev')
const vm = new ViewModel({
  data() {
    return {
      count: 1,
    }
  },
  increase() {
    this.count++
    console.log('值加一', this.count)
  },
  decrease() {
    this.count--
    console.log('值减一', this.count)
  }
})
console.log('初始值', vm.count)
vm.increase()
vm.increase()
vm.increase()
vm.decrease()