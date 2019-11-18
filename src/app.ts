/*!
  * Copyright 2019 - Author - Gaurav
  */

import './globals';

import container from 'apps/kung-fu/inversify.config';
import IOC_TYPES from 'apps/kung-fu/ioc-types';

const logger = console;

const ninja = container.get<Warrior>(IOC_TYPES.Warrior);

logger.info(ninja.fight());
logger.info(ninja.sneak());
