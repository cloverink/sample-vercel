const log = require('npmlog')

const run = () => {
  log.info('sync-env')
  console.log(process.env)
}

run()