const { log } = require("console")

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let total = 0
    if (blogs.length > 0){
        blogs.map(blog => {total = total + blog.likes})
    } 
    return total

}

const favoriteBlog = (blogs) => {
    const maximumLikes = Math.max(...blogs.map(blog => blog.likes))
    return blogs.find((blog => blog.likes === maximumLikes)) 
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}