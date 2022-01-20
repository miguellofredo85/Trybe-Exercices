const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };



const dragonPower = dragon => {
    const minimalPow = 15;
    const dragonpow = Math.trunc((Math.random() * (dragon.strength - minimalPow + 1) + minimalPow));
    return dragonpow;
  };
  console.log(dragonPower(dragon));

  const warriorPower = warrior => {
      const minimalDamage = Math.trunc((Math.random() * (warrior.strength * warrior.weaponDmg + 1) + warrior.strength));
      return minimalDamage;
  };
  console.log(warriorPower(warrior))

  const magePower = mage => {
      const mageDamage = Math.trunc((Math.random() * (mage.intelligence*2) + mage.intelligence));
      const mageData = { manaLosed: 0, manaQuantity: 'Insuficient Mana'}
      if (mage.mana > 15){
        const mageDamage2 = Math.trunc((Math.random() * (mage.intelligence*2) + mage.intelligence));
          mageData.manaLosed = 15;
          mageData,manaQuantity = mageDamage2;
          return mageData 
      }
return mageData

  };
  console.log(magePower(mage));