/** region promise */
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2) {
        resolve('success')
    } else {
        reject('failed')
    }
})

p.then((message) => {
    console.log('this is in the then ' + message)
    console.log(`This is in the ${message}`)
}).catch((message) => {
    console.log('this is in the catch ' + message)
})
/** endregion promise */

/** region callback function */
const userLeft = true
const userWatchingCatMeme = true

const watchTutorialCallback = (callback, errorCallback) => {
    if (userLeft) {
        errorCallback ({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback ({
            name: 'User watching cat meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback ('Thumbs up and Subcribe')
    }
}

watchTutorialCallback ((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})
/** endregion callback function */

/** region promise function */
const watchTutorialPromise = () => {
    return new Promise ((resolve, reject) => {
        if (userLeft) {
            reject ({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject ({
                name: 'User watching cat meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve ('Thumbs up and Subcribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})
/** endregion promise function */

/** region promise all */
const recordVideoOne = new Promise ((resolve, reject) => {
    resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise ((resolve, reject) => {
    resolve('Video 2 recorded')
})

const recordVideoThree = new Promise ((resolve, reject) => {
    resolve('Video 3 recorded')
})

Promise.all ([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})
/** region promise all */