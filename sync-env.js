const log = require('npmlog')

const run = () => {
  log.info('========= sync-env =========')
  log.info('process.env.foo=', process.env.foo)
  log.info('process.env.hello=', process.env.hello)
  console.log(process.env)
}

run()