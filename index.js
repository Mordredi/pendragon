#!/usr/bin/env node

const program = require('commander');

const newProject = require('./commands/new');

program
  .version('0.0.1')
  .command('new [name]')
  .description('generate new project')
  .action(newProject)

program.parse(process.argv)
