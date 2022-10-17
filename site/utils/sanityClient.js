const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: 'org82rh2',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

