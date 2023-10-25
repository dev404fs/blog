const listHelper = require('../utils/list_helper')

describe('total likes', () => {
    test('of empty list is zero', () => {
        expect(listHelper.totalLikes([])).toBe(0)
    })
    test('when list has only one blog equals the likes of that', () => {
        const result = listHelper.totalLikes([{title: "a", author: "b", url:"c", likes:5}])
        expect(result).toBe(5)
    })
    test('list with more than one element', () => {
        const result = listHelper.totalLikes([{title: "a", author: "b", url:"c", likes:5},
                                                {title: "d", author: "e", url:"f", likes:3}])
        expect(result).toBe(8)
    })
})