
/*!
  * Copyright 2019 - Author - Gaurav
  */

import { injectable } from 'inversify';

@injectable()
export class Katana implements Weapon {

  public hit() {
    return 'cut!';
  }

}

@injectable()
export class Shuriken implements ThrowableWeapon {

  public throw() {
    return 'hit!';
  }

}
