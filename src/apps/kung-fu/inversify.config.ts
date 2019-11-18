
/*!
  * Copyright 2019 - Author - Gaurav
  */

import { Container } from 'inversify';

import IOC_TYPES from './ioc-types';

import { Ninja } from './warriors';
import { Katana, Shuriken } from './weapons';

const container = new Container();

container.bind<Warrior>(IOC_TYPES.Warrior).to(Ninja);
container.bind<Weapon>(IOC_TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(IOC_TYPES.ThrowableWeapon).to(Shuriken);

export default container;
