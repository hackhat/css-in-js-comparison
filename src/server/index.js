console.log('boot')
/**
 * This file is the first file you will run when running the server.
 */
var program = require('commander');
// Setup app cmd line options.
program
  .option('-e, --env [env]'     , 'Set environment' , 'development')
  .option('-h, --host [host]'   , 'Add host', 'localhost')
  .option('-p, --port [port]'   , 'Add port', 80)
  .option('-p, --sslPort [port]', 'Add ssl port', 443)
  .option('-d, --db [db]'       , 'Database', undefined)
  .option('-n, --noDebug'       , 'No debug')
  .option('-x, --debug'         , 'Force debug')
  .option('-x, --noOutput'      , 'No console log')
  .option('-f, --forceFileServer [forceFileServer]'   , 'Force file server even in production', false)
  .parse(process.argv);
// Loads the server/boot
require = require('./getWebpackRequire')
require('server/boot')({}, void 0, program);
