class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = 'Looking for a rig.';
  }
  
  engageWarpDrive() {
    //engage warp drive is 
    if (this.position === 'Pilot' && this.currentShip !== 'Looking for a rig.') {
      //set warpdrive to engage
      this.currentShip.engageWarpDrive = 'engaged';
    } else {
      return 'had no effect';
    }
  }
  
  setsInvisibility() {
    if (this.position === "Defender" && this.currentShip !== 'Looking for a rig.') {
      this.currentShip.cloaked = true;
    }else{
      return "had no effect";
    }
  }
  
  chargePhasers() {
    //set phasers to charged
    if (this.position === 'Gunner' && this.currentShip !== 'Looking for a rig.') {
      this.currentShip.phasers = 'charged!';
    } else {
      return 'had no effect';
    }
  }
}
