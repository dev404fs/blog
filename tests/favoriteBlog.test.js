const listHelper = require('../utils/list_helper')

describe ('Testing favoriteBlog', () => {
    test('test with two blogs', () => {
        const result = listHelper.favoriteBlog([{title: "a", author: "b", url:"c", likes:5},
        {title: "d", author: "e", url:"f", likes:3}])
        expect(result).toEqual({title: "a", author: "b", url:"c", likes:5})
    })
})