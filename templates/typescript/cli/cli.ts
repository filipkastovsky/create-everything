#!/usr/bin/env node
import { command } from 'yargs';
import { builder, handleCreate } from '../create-everything';

command(
    '* [<path>] [<template>]',
    'Invalid <path> or <template>',
    builder as any,
    handleCreate
).parse();
