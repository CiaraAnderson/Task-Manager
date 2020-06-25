require('../src/db/mongoose')
const Task = require('../src/models/task')

// 5ee935f5c6704964297fe0c5

// Task.findByIdAndRemove('5ee92b1deb21ee626be28af7').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ee9404d5ee298676265692c').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})