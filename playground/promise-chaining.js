require('../src/db/mongoose')
const User = require('../src/models/user')

// 5ee935f5c6704964297fe0c5

// User.findByIdAndUpdate('5ee93ad8d63a1c64f0fc9e10', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeandCount('5ee93ad8d63a1c64f0fc9e10', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})