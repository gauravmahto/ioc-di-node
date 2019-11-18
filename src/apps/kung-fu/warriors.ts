
/*!
  * Copyright 2019 - Author - Gaurav
  */

import { inject, injectable } from 'inversify';

import IOC_TYPES from './ioc-types';

@injectable()
export class Ninja implements Warrior {

  private mKatana: Weapon;
  private mShuriken: ThrowableWeapon;

  public constructor(@inject(IOC_TYPES.Weapon) katana: Weapon,
                     @inject(IOC_TYPES.ThrowableWeapon) shuriken: ThrowableWeapon) {

    this.mKatana = katana;
    this.mShuriken = shuriken;

  }

  public fight() {
    return this.mKatana.hit();
  }

  public sneak() {
    return this.mShuriken.throw();
  }

}
